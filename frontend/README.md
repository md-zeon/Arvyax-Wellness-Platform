# Frontend - Arvyax Wellness Platform

This directory contains the React.js client application for the Arvyax Wellness Platform, built with Vite.

## Tech Stack

- **React.js**
- **Vite** as a build tool
- **React Router** for client-side routing
- **Axios** for making API requests
- **Tailwind CSS** for styling
- **daisyUI** component library for Tailwind CSS
- **React Hot Toast** for notifications

## Core Features

-   User registration and login forms.
-   JWT handling for authenticated API requests.
-   Protected routes for the user dashboard.
-   A dashboard to view public and user-owned wellness sessions.
-   A session editor to create and update sessions.
-   Auto-saving drafts after 5 seconds of inactivity.
-   Logout functionality.

---

## Setup and Running

### Prerequisites

-   Node.js and npm installed.
-   The [backend server](..\backend) must be running for the API requests to work.

### Instructions

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