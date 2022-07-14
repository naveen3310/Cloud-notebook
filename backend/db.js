const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongoURL =
  "mongodb+srv://naveenmahich:naveenkumar@cluster0.drya3.mongodb.net/notebook?retryWrites=true&w=majority";

const connectMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("mongo connected successfully!");
  });
};

module.exports = connectMongo;
