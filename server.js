const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT_SERVER;

const users = [
  { login: "admin", password: "admin" },
  { login: "test", password: "test" },
];
const secretKey = "0000";
app.use(cors());
app.use(bodyParser.json());
app.post("/users", (req, res) => {
  const { login, password } = req.body;
  const user = users.find((user) => user.login === login && user.password === password);
  if (user) {
    const token = jwt.sign({ login }, secretKey);
    res.json(token);
  } else {
    res.status(401).json({ message: "Login or Password is incorrect" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
