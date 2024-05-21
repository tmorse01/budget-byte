const express = require("express");
const multer = require("multer");
const expensesRoutes = require("./routes/expenses");
const authMiddleware = require("./middleware/auth");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply auth middleware globally
app.use(authMiddleware);

// Routes
app.use("/api/expenses", expensesRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
