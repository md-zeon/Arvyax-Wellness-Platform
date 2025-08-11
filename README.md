# Arvyax Wellness Platform

This repository contains the full-stack implementation of the Arvyax Wellness Session Platform, a system that allows users to register, log in, and manage wellness sessions.

## Live Demo

[Link to Live Demo](https://your-live-demo-link.com)

## Folder Structure

```
.c:/Projects/Job Projects/Arvyax Wellness Platform/
├───README.md
├───.git/
├───backend/
│   ├───.env
│   ├───.env.example
│   ├───.gitignore
│   ├───index.js
│   ├───package-lock.json
│   ├───package.json
│   └───README.md
└───frontend/
    ├───.gitignore
    ├───eslint.config.js
    ├───index.html
    ├───package-lock.json
    ├───package.json
    ├───README.md
    ├───vite.config.js
    ├───public/
    │   ├───background.avif
    │   └───vite.svg
    └───src/
        ├───index.css
        ├───main.jsx
        ├───assets/
        │   └───react.svg
        ├───components/
        │   ├───Dashboard/
        │   │   ├───DashboardFooter.jsx
        │   │   ├───DashboardNavbar.jsx
        │   │   └───DashBoardSidebar.jsx
        │   ├───Forms/
        │   │   ├───LoginForm.jsx
        │   │   └───RegisterForm.jsx
        │   ├───Home/
        │   │   ├───Features.jsx
        │   │   └───Hero.jsx
        │   └───shared/
        │       ├───Container.jsx
        │       ├───Footer.jsx
        │       └───Navbar.jsx
        ├───hooks/
        │   └───useAxiosSecure.js
        ├───layouts/
        │   ├───DashboardLayout/
        │   │   └───DashboardLayout.jsx
        │   └───RootLayout/
        │       └───RootLayout.jsx
        ├───pages/
        │   ├───Dashboard/
        │   │   ├───DashboardHome.jsx
        │   │   ├───MySessions.jsx
        │   │   └───SessionEditor.jsx
        │   ├───Home/
        │   │   └───Home.jsx
        │   ├───Login/
        │   │   └───Login.jsx
        │   ├───Register/
        │   │   └───Register.jsx
        │   └───Sessions/
        │       ├───SessionDetails.jsx
        │       └───Sessions.jsx
        └───routes/
            └───routes.jsx
```

## Features

*   **User Authentication:** Secure user registration and login with JWT authentication.
*   **Session Management:**
    *   Create, edit, and delete wellness sessions.
    *   Save sessions as drafts or publish them for others to see.
    *   Browse and view published sessions from other users.
*   **User Dashboard:** A personalized dashboard for users to manage their sessions.

## Frontend Architecture

*   **`components`**: Reusable React components used throughout the application.
    *   **`Dashboard`**: Components specific to the user dashboard.
    *   **`Forms`**: Components for user login and registration forms.
    *   **`Home`**: Components for the home page.
    *   **`shared`**: Components that are shared across multiple pages (e.g., Navbar, Footer).
*   **`hooks`**: Custom React hooks, such as `useAxiosSecure` for making authenticated API requests.
*   **`layouts`**: Components that define the overall structure of the application, such as the main layout and the dashboard layout.
*   **`pages`**: The main pages of the application, which are rendered by the router.
*   **`routes`**: The route definitions for the application, using `react-router`.

## Backend Architecture

*   **`index.js`**: The main entry point for the backend application. It sets up the Express server, connects to MongoDB, and defines all the API routes and controllers.

## Technologies Used

**Frontend:**

*   React
*   React Router
*   Tailwind CSS
*   DaisyUI
*   Vite
*   Axios

**Backend:**

*   Node.js
*   Express.js
*   MongoDB
*   JWT (JSON Web Tokens)
*   bcryptjs

## Setup Instructions

### Prerequisites

*   Node.js and npm installed
*   MongoDB instance (local or cloud)

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file and add the following environment variables (see the Environment Variables section for more details):
    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```
4.  Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```

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

## Frontend Routes

| Path                   | Component          | Description                                       |
| ---------------------- | ------------------ | ------------------------------------------------- |
| `/`                    | Home               | The landing page of the application.              |
| `/sessions`            | Sessions           | Displays all published sessions.                  |
| `/sessions/:id`        | SessionDetails     | Displays the details of a single session.         |
| `/login`               | Login              | The user login page.                              |
| `/register`            | Register           | The user registration page.                       |
| `/dashboard`           | DashboardHome      | The main dashboard page for logged-in users.      |
| `/dashboard/my-sessions` | MySessions         | Displays all sessions for the logged-in user.     |
| `/dashboard/session-editor` | SessionEditor      | A form to create a new session.                   |
| `/dashboard/session-editor/:id` | SessionEditor      | A form to edit an existing session.               |

## Environment Variables

To run this project, you will need to create a `.env` file in the `backend` directory with the following variables:

*   `MONGODB_URI`: Your MongoDB connection string.
*   `JWT_SECRET`: A secret key for signing JWT tokens.
*   `PORT`: The port for the backend server to run on (defaults to 5000).

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the ISC License.
