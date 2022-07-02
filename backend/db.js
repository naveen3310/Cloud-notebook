const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongoURL = "mongodb://localhost:27017/notebook";

const connectMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("mongo connected successfully!");
  });
};

module.exports = connectMongo;
