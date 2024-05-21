const express = require("express");
const multer = require("multer");
const cors = require("cors");
const expensesRoutes = require("./routes/expenses");
const authMiddleware = require("./middleware/auth");
const app = express();
const port = 3000;
require("dotenv").config({ path: ".env.local" });

console.log("Hello World", process.env.ORIGIN_URL);
const corsOptions = {
  origin: process.env.ORIGIN_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Apply auth middleware globally
// app.use(authMiddleware);

// Routes
app.post("/api/login", authMiddleware.login);
app.use("/api/expenses", expensesRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
