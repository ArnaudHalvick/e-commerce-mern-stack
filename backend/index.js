require("dotenv").config(); // Load environment variables from .env file

const port = 4000;
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Log environment variables for debugging
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const mongoURI = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.prdnq.mongodb.net/`;

// Database Connection
mongoose
  .connect(mongoURI, {})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API Creation
app.get("/", (req, res) => {
  res.send("Express app is running");
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

const upload = multer({ storage });

// Creating Upload Endpoint for images
app.use("/images", express.static(path.join(__dirname, "upload/images")));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for the product
// TODO: More schema to its own file
const Product = new mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
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

app.post("/add-product", async (req, res) => {
  let products = await Product.find();
  let id;

  // TODO: Modify the way ids are generated because this is not a good practice
  if (products.length > 0) {
    id = products[products.length - 1].id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    image: req.body.image,
    name: req.body.name,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    date: req.body.date,
    available: req.body.available,
  });
  console.log(product);
  await product.save();
  res.json({
    success: true,
    name: req.body.name,
  });
});

// API to delete a product
app.post("/remove-product", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({
    success: true,
    name: req.body.name,
    // TODO: Remove line above because it doesn't make sense because we can put any name in req body.
    // Should give the name of deleted product instead. Maybe find name before deleting and return it.
    message: "Product deleted successfully",
  });
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
