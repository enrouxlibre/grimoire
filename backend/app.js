require("dotenv").config({ path: "../.env" });
const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

const path = require("path");

const app = express();
app.use(express.json());

mongoose
  .connect(
    `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/grimoire?authSource=admin`,
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((e) => console.log(e));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  );
  next();
});

app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
