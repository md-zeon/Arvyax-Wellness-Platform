# Arvyax Wellness Platform

This repository contains the full-stack implementation of the Arvyax Wellness Session Platform, a system that allows users to register, log in, and manage wellness sessions.

## Project Structure

- **/backend**: Contains the Node.js, Express, and MongoDB backend server.
- **/frontend**: Contains the React.js client application built with Vite.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, JSON Web Tokens (JWT), bcryptjs
- **Frontend**: React.js, Vite, Tailwind CSS, daisyUI, Axios, React Router

## Core Features

-   User registration and login with secure password hashing and JWT authentication.
-   Protected routes for user-specific data.
-   Publicly viewable published wellness sessions.
-   Users can create, view, update, and delete their own sessions.
-   Sessions can be saved as "draft" or "published".

---

## Setup Instructions

### Prerequisites

-   Node.js and npm installed.
-   A MongoDB database (local or a cloud service like MongoDB Atlas).

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an environment file:**
    Create a file named `.env` in the `backend` directory by copying the example:
    ```bash
    cp .env.example .env
    ```

4.  **Configure environment variables:**
    Open the `.env` file and add your specific configurations:
    ```
    MONGODB_URI="your_mongodb_connection_string"
    JWT_SECRET="your_strong_jwt_secret"
    PORT=5000
    ```

5.  **Start the server:**
    ```bash
    npm start
    ```
    The backend server will be running on `http://localhost:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The frontend application will be available at `http://localhost:5173` (or another port if 5173 is busy).

---

## API Documentation

The base URL for the API is `http://localhost:5000`.

### Auth Routes

| Method | Endpoint     | Description                  | Protected |
| :----- | :----------- | :--------------------------- | :-------- |
| `POST` | `/register`  | Registers a new user.        | No        |
| `POST` | `/login`     | Logs in a user, returns JWT. | No        |

### Session Routes

| Method   | Endpoint              | Description                                       | Protected |
| :------- | :-------------------- | :------------------------------------------------ | :-------- |
| `GET`    | `/sessions`           | Get all **published** wellness sessions.          | No        |
| `GET`    | `/sessions/:id`       | Get a single published session by its ID.         | No        |
| `GET`    | `/my-sessions`        | Get all sessions (drafts & published) for the logged-in user. | Yes       |
| `GET`    | `/my-sessions/:id`    | Get a single session by ID for the logged-in user. | Yes       |
| `POST`   | `/my-sessions/save-draft` | Create or update a session as a draft.        | Yes       |
| `POST`   | `/my-sessions/publish`| Publish a draft session.                          | Yes       |
| `DELETE` | `/my-sessions/:id`    | Delete a session owned by the logged-in user.     | Yes       |

### User Routes

| Method | Endpoint  | Description                                  | Protected |
| :----- | :-------- | :------------------------------------------- | :-------- |
| `GET`  | `/user/:id` | Get a user's public information by their ID. | Yes       |