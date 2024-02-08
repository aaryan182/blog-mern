# Blog Platform with MERN Stack

This project is a full-stack blog platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It features user authentication, post creation, comments, and a dashboard for managing posts and comments.

## Features

- **User Authentication**: Sign up, sign in, and sign out functionality.
- **Blog Posts**: Users can create, update, and delete their blog posts.
- **Comments**: Users can comment on posts and manage their comments.
- **Dashboard**: A dashboard for users to manage their posts and comments, with additional admin privileges for managing all users.

## Technology Stack

- **Frontend**: React for the UI, Redux for state management, Tailwind CSS for styling.
- **Backend**: Node.js with Express.js for the server, MongoDB for the database.
- **Authentication**: Custom authentication system using JSON Web Tokens (JWT).
- **Deployment**: (Specify your deployment platform and any CI/CD tools you use, if applicable)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation
- Clone the repository:
- git clone https://github.com/aaryan182/blog-mern.git

## Install backend dependencies:
- cd blog-mern
- npm install

## Install frontend dependencies:
- cd client
- npm install

## Create a .env file in the root directory and add your MongoDB URI and JWT secret key:
makefile

- MONGO_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret

## Start the backend server:
- npm start
## Start the frontend development server:
- cd client
- npm run dev

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.
