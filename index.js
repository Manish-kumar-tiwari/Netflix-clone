const express = require("express");

const app = express();

const dotent = require("dotenv");
const router = require("./routes/userRoutes");
const connectDb = require("./utils/connnectDb");
const path = require("path");

dotent.config();

connectDb();

app.use(express.json());

app.use("/api/v1/user", router);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.port, () => {
  console.log(`Server is Running at the port ${process.env.port}`);
});
