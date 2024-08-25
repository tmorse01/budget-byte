# Budget Byte

Budget Byte is a full-stack application for managing expenses. The frontend is built with React, TypeScript, and Vite, while the backend is powered by Express and MongoDB.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication
- Expense tracking
- Expense categorization
- Customizable expense categories
- CSV upload for bulk expense entry
- Data visualization with charts
- Goal setting and tracking

## Getting Started

### Prerequisites

- Node.js (v18.17 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/tmorse01/budget-byte.git
   cd budget-byte
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in both `frontend` and `backend` directories.
   - Add the necessary environment variables as specified in `.env.example` files.

### Running the Application

1. Start the backend server:

   ```sh
   cd backend
   npm run dev
   ```

2. Start the frontend development server:

   ```sh
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` for the backend and `http://localhost:5173` for the frontend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
