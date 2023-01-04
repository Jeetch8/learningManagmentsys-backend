require("dotenv").config();
require("express-async-errors");

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Jeet Chawda",
      },
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./Controller/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(morgan("dev"));
app.use(cors("http://localhost:3000"));
app.use(express.json());

app.use("/", require("./Routes/Test_Routes"));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  app.listen(5000, () => {
    console.log("Server Running");
  });
});
