# Arvyax Wellness Platform - Backend

This directory contains the backend server for the Arvyax Wellness Platform. It is a Node.js application built with the Express.js framework and uses MongoDB as its database.

For detailed setup instructions, API documentation, and full project overview, please refer to the [main README.md](../README.md) in the project root.

## Getting Started (Backend Only)

To run the backend server independently:

### Prerequisites

*   Node.js and npm
*   MongoDB instance (local or cloud)

### Installation and Setup

1.  Navigate to this directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file by copying the example and update it with your environment variables:
    ```bash
    cp .env.example .env
    ```
4.  Start the server:
    ```bash
    npm start
    ```

The server will be running on the port specified in your `.env` file (defaults to 5000).
