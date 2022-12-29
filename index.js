require("dotenv").config();

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

app.use("/", require("./Routes/Test_Routes"));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  app.listen(5000, () => {
    console.log("Server Running");
  });
});
