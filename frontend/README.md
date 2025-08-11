# Arvyax Wellness Platform - Frontend

This directory contains the frontend for the Arvyax Wellness Platform. It is a single-page application built with React and Vite.

## Tech Stack

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool and development server for modern web projects.
*   **React Router**: For client-side routing.
*   **Tailwind CSS**: A utility-first CSS framework.
*   **DaisyUI**: A component library for Tailwind CSS.
*   **axios**: For making HTTP requests to the backend API.
*   **react-hot-toast**: For displaying notifications.

## Features

*   **Component-Based Architecture:** Built with reusable React components.
*   **Routing:** Uses `react-router` for client-side routing.
*   **Styling:** Styled with Tailwind CSS and DaisyUI for a modern and responsive UI.
*   **State Management:** Uses React hooks for state management.
*   **API Communication:** Uses `axios` for making HTTP requests to the backend API.

## Getting Started

### Prerequisites

*   Node.js and npm

### Installation and Setup

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Folder Structure

*   **`src/assets`**: Static assets like images and SVGs.
*   **`src/components`**: Reusable React components.
*   **`src/hooks`**: Custom React hooks.
*   **`src/layouts`**: Components that define the overall page structure.
*   **`src/pages`**: The main pages of the application.
*   **`src/routes`**: Route definitions for the application.

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
