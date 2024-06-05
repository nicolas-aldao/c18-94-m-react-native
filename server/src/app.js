require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./routes/index')
const responseHandler = require('./middlewares/responseHandler');
const errorHandler = require("./middlewares/errorHandler");

// const uri = "mongodb+srv://nflorent:contraseña@telemedicinadb.jlrf2ra.mongodb.net/?retryWrites=true&w=majority&appName=telemedicinaDB"
const uri = process.env.DB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ connected database")
  })
  .catch((error) => {
    console.error("❌ Error connecting database", error.message)
  });

app.use(express.json())
app.use(cors())


app.use("/api", router)
app.use(responseHandler)
app.use(errorHandler)

module.exports = app