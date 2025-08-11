const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Middleware
app.use(cors());
app.use(express.json());

function verifyJWT(req, res, next) {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ message: "Authorization header missing" });
	}

	const token = authHeader.split(" ")[1]; // "Bearer <token>"

	if (!token) {
		return res.status(401).json({ message: "Token missing" });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(403).json({ message: "Invalid or expired token" });
		}
		req.user = decoded;
		next();
	});
}

const PORT = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI;
if (!uri) {
	console.error("MONGODB_URI is not defined in .env file");
	process.exit(1);
}

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		await client.connect();
		const database = client.db("arvyaxDB");
		const usersCollection = database.collection("users");

		// Register User
		app.post("/register", async (req, res) => {
			try {
				const { name, email, password, confirmPassword } = req.body;

				if (!name || !email || !password || !confirmPassword) {
					return res.status(400).json({ message: "All fields are required" });
				}

				if (password !== confirmPassword) {
					return res.status(400).json({ message: "Passwords do not match" });
				}

				const existingUser = await usersCollection.findOne({ email });
				if (existingUser) {
					return res.status(400).json({ message: "Email already registered" });
				}

				const hashedPassword = await bcrypt.hash(password, 10);

				const result = await usersCollection.insertOne({
					name,
					email,
					password: hashedPassword,
					createdAt: new Date(),
				});

				res.status(201).json({ message: "User registered successfully", userId: result.insertedId });
			} catch (error) {
				console.error(error);
				res.status(500).json({ message: "Server error" });
			}
		});

		// Login User
		app.post("/login", async (req, res) => {
			try {
				const { email, password } = req.body;

				if (!email || !password) {
					return res.status(400).json({ message: "Email and password are required" });
				}

				const user = await usersCollection.findOne({ email });
				if (!user) {
					return res.status(400).json({ message: "Invalid email or password" });
				}

				const isPasswordValid = await bcrypt.compare(password, user.password);
				if (!isPasswordValid) {
					return res.status(400).json({ message: "Invalid email or password" });
				}

				// Create JWT token
				const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

				res.json({
					message: "Login successful",
					token,
					userId: user._id,
					name: user.name,
					email: user.email,
				});
			} catch (error) {
				console.error(error);
				res.status(500).json({ message: "Server error" });
			}
		});

		// Get user info by ID
		app.get("/user/:id", verifyJWT, async (req, res) => {
			try {
				const userId = req.params.id;
				const user = await usersCollection.findOne({ _id: new ObjectId(userId) }, { projection: { password: 0 } });
				if (!user) {
					return res.status(404).json({ message: "User not found" });
				}
				res.json(user);
			} catch (error) {
				console.error(error);
				res.status(500).json({ message: "Server error" });
			}
		});

		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Arvyax Wellness Platform API is running!");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
