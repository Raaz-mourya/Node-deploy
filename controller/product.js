const fs = require("fs");
const model = require("../model/product");
const mongoose = require("mongoose");
const Product = model.Product;


// create
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// find all
exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// find product by id
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  
  // const product = await Product.findOne({ id: id }).exec();
  try {
    const product = await Product.findById(id); 
    // console.log(product);
    res.status(200).json(product);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// replace product by PUT
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// update product specific values by PATCH
exports.updateProduct = async (req, res) => {
 const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
