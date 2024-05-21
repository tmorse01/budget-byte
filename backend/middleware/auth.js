const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = {
  "admin@email.com": {
    password: bcrypt.hashSync("password", 10),
  },
};

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "your_jwt_secret", (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, "your_jwt_secret");
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authMiddleware;
module.exports.login = login;
