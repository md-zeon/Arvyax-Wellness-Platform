const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require("mongodb");
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



		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Arvyax Wellness Platform API is running!");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
