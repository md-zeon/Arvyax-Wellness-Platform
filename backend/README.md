# Arvyax Wellness Platform - Backend

This directory contains the backend server for the Arvyax Wellness Platform. It is a Node.js application built with the Express.js framework and uses MongoDB as its database.

## Tech Stack

*   **Node.js**: A JavaScript runtime environment.
*   **Express.js**: A web application framework for Node.js.
*   **MongoDB**: A NoSQL database.
*   **jsonwebtoken**: For generating and verifying JSON Web Tokens.
*   **bcryptjs**: For hashing passwords.
*   **cors**: For enabling Cross-Origin Resource Sharing.
*   **dotenv**: For loading environment variables from a `.env` file.

## Features

*   **RESTful API:** A complete API for managing users and wellness sessions.
*   **Authentication:** Secure user authentication using JSON Web Tokens (JWT).
*   **Password Hashing:** Passwords are securely hashed using `bcryptjs` before being stored in the database.
*   **Middleware:** Includes middleware for verifying JWT tokens to protect routes.

## Getting Started

### Prerequisites

*   Node.js and npm
*   MongoDB instance (local or cloud)

### Installation and Setup

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Create a `.env` file by copying the example:
    ```bash
    cp .env.example .env
    ```
3.  Update the `.env` file with your environment variables (see below).
4.  Start the server:
    ```bash
    npm start
    ```

The server will be running on the port specified in your `.env` file (defaults to 5000).

## API Documentation

| Method | Endpoint                   | Description                                         | Authentication |
| ------ | -------------------------- | --------------------------------------------------- | -------------- |
| POST   | `/register`                | Register a new user.                                | Public         |
| POST   | `/login`                   | Login a user and get a JWT token.                   | Public         |
| GET    | `/user/:id`                | Get user information by ID.                         | Required       |
| GET    | `/sessions`                | Get all published sessions.                         | Public         |
| GET    | `/my-sessions`             | Get all sessions for the logged-in user.            | Required       |
| GET    | `/my-sessions/:id`         | Get a single session by ID for the logged-in user.  | Required       |
| POST   | `/my-sessions/save-draft`  | Save or update a session as a draft.                | Required       |
| POST   | `/my-sessions/publish`     | Publish a session.                                  | Required       |
| DELETE | `/my-sessions/:id`         | Delete a session by ID.                             | Required       |
| GET    | `/sessions/:id`            | Get a single published session by ID.               | Public         |

## Environment Variables

*   `MONGODB_URI`: Your MongoDB connection string.
*   `JWT_SECRET`: A secret key for signing JWT tokens.
*   `PORT`: The port for the server to run on (e.g., 5000).