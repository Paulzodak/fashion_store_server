import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Product from "../models/product.js";
export const createProduct = async (req, res) => {
  const product = new Product({
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productBrand: req.body.productBrand,
    productPrice: req.body.productPrice,
    productPurpose: req.body.productPurpose,
    productDou: req.body.productDou,
    productIngredients: req.body.productIngredients,
  });
  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(409).json({
      error: error.message,
    });
  }
};
export const fetchAllProducts = async (req, res) => {
  const products = await Product.find({});
  if (products) {
    console.log(products);
    return res.json({ status: "ok", products: products });
  } else {
    res.json({ status: "error", user: false, body: "password incorrect" });
  }
};
