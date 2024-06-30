const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const debug = require("debug")("api");

const taskRoutes = require("./routes/tasks");
const { connectDb } = require("./config/connection");

const port = process.env.PORT;

// LOAD ENV VARS
dotenv.config();

async function main() {
  debug("booting %o", "App");

  // Application
  const app = express();

  const options = {};

  app.get("/", (req, res) => {
    res.send("service is running......");
  });

  // Update CORS to allow requests from your frontend
  app.use(cors({ origin: "https://mernstack-formclient-7rx0uktgy-landrysb.vercel.app" }));
  app.use(bodyParser.json());
  app.use("/api/v1/tasks", taskRoutes);

  app.listen(port, () => {
    console.log(`server started running🏃 on port ${port}`);
  });
}

connectDb().then(() => main());
