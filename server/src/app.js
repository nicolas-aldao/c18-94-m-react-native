const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri = "mongodb+srv://nflorent:contraseña@telemedicinadb.jlrf2ra.mongodb.net/?retryWrites=true&w=majority&appName=telemedicinaDB";

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


app.use("/api", () => {})

module.exports = app;
