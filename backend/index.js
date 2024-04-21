const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB

mongoose.connect(
  "mongodb+srv://codexadebayo:TIgnUpscvByzJ5uh@cluster0.8sltzyb.mongodb.net/"
);

//API Creation
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port: ${port}`);
  } else {
    console.log(`Error: ${error}`);
  }
});

app.get("/login", (req, res) => {
  res.send("Login");
});

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("./upload/images"));

// Creating upload endpoint for images

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Mongoose DB Schema

const Products = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/products", async (req, res) => {
  let products = await Products.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Products({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save({ timeout: 15000 });
  console.log("Product has been successfully saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Delete Product

app.delete("/products", async (req, res) => {
  await Products.findOneAndDelete({ id: req.body.id });
  console.log("Product successfully removed");
  res.json({
    success: true,
  });
});

app.get("/products", async (req, res) => {
  let products = await Products.find({});
  console.log("successfully fetched all products");
  res.send(products);
});
