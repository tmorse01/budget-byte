const express = require("express");
const multer = require("multer");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const expensesRoutes = require("./routes/expenses");
const authMiddleware = require("./middleware/auth");
const connectDB = require("./config/db");

const app = express();
const port = 3000;
require("dotenv").config({ path: ".env.local" });

const corsOptions = {
  origin: process.env.ORIGIN_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB()
  .then((db) => {
    app.locals.db = db; // set the db in app locals

    // Apply auth middleware globally
    // app.use(authMiddleware);

    // Routes
    app.use("/api/expenses", expensesRoutes);
    app.use("/api/auth", authRoutes);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });
