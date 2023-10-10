const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT_SERVER;

const data = JSON.parse(fs.readFileSync("./db.json"));
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
  const user = data.users.find((user) => user.login === login && user.password === password);
  if (user) {
    const token = jwt.sign({ login }, secretKey);
    res.json(token);
  } else {
    res.status(401).json({ message: "Login or Password is incorrect" });
  }
});

app.get("/products", (req, res) => res.json(data.products));

app.post("/products/edit/:id", (req, res) => {
  const { id } = req.params;
  const { product } = req.body;
  let item = data.products.find((product) => product.id === +id);
  if (item) {
    for (let productKey in product) {
      item[productKey] = product[productKey];
    }
    writeDB(data);
    res.json({ success: true });
  }
});

app.post("/products/delete/:id", (req, res) => {
  const { id } = req.params;
  data.products = data.products.filter((product) => product.id !== +id);
  writeDB(data);
  res.json({ success: true });
});

app.post("/products/add", (req, res) => {
  const { product } = req.body;
  product.id = Math.max(...data.products.map((product) => product.id), data.products.length) + 1;
  data.products.push(product);
  writeDB(data);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
