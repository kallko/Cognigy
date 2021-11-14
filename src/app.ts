import express from "express";
import { setupMongoose } from "./service/dbConnect";
const apiRouter = require("./router/api/routes");

const app = express();

const PORT: number = 5000;

app.use(express.json());
app.use("/api/v1", apiRouter);
setupMongoose();

app.listen(PORT, () => {
  console.info(`Ready on port: ${PORT}`);
});
