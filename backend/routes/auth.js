const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.locals.db;

  try {
    const user = await db.collection("users").findOne({ username: username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username: username,
      password: hashedPassword,
    };

    await db.collection("users").insertOne(newUser);

    const payload = { user: { id: newUser._id } };

    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.locals.db;

  try {
    const user = await db.collection("users").findOne({ username: username });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = { user: { id: user._id } };

    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
