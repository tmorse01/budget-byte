const express = require("express");
const multer = require("multer");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");
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

    const excludedRoutes = ["/api/auth/login", "/api/auth/register"];
    // Apply auth middleware to all routes except excludedRoutes
    app.use((req, res, next) => {
      // Check if the request path is in the excluded routes
      if (excludedRoutes.includes(req.path)) {
        return next(); // Skip the auth middleware
      }

      // Apply the auth middleware
      authMiddleware(req, res, next);
    });

    // Routes
    app.use("/api/data", dataRoutes);
    app.use("/api/auth", authRoutes);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });
