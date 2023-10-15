const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT_SERVER;

const secretKey = "0000";

app.use(cors());
app.use(bodyParser.json());

const writeDB = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data), "utf-8", (err) => {
    if (err) console.log(err);
    console.log("Data added to file");
  });
};

app.post("/users", (req, res) => {
  const { login, password } = req.body;
  const { users } = JSON.parse(fs.readFileSync("./db.json"));
  const user = users.find((user) => user.login === login && user.password === password);
  if (user) {
    const token = jwt.sign({ login }, secretKey, { expiresIn: "2h" });
    res.json(token);
  } else {
    res.status(401).json({ message: "Login or Password is incorrect" });
  }
});

app.post("/token", (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }
  try {
    const user = jwt.verify(token, secretKey);
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
});

app.get("/products", (req, res) => {
  const { products } = JSON.parse(fs.readFileSync("./db.json"));
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const { products } = JSON.parse(fs.readFileSync("./db.json"));
  const product = products.find((_product) => _product.id === +id);
  console.log(product);
  product ? res.json(product) : res.status(404).json({ message: "Not Found" });
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { product } = req.body;
  const data = JSON.parse(fs.readFileSync("./db.json"));
  let item = data.products.find((product) => product.id === +id);
  if (item) {
    for (let productKey in product) {
      item[productKey] = product[productKey];
    }
    writeDB(data);
    res.json(item);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./db.json"));
  data.products = data.products.filter((product) => product.id !== +id);
  writeDB(data);
  res.json({ success: true });
});

app.post("/products", (req, res) => {
  const { product } = req.body;
  const data = JSON.parse(fs.readFileSync("./db.json"));
  product.id =
    Math.max(...data.products.map((product) => product.id), data.products.length) + 1;
  data.products.push(product);
  writeDB(data);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
