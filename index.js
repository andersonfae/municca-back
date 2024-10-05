const express = require("express");
const app = express();
const PORT = 3000;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const documentRoutes = require("./routes/documentRoutes");

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Municca Sign",
      version: "1.0.0",
      description: "Esta é uma API de teste para Municca Sign",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/users", userRoutes);
app.use("/api/documents", documentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
