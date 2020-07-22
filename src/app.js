require("dotenv").config();

const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./routes");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));
app.use(routes);

app.listen(process.env.PORT || 3000, () =>
  console.log(`API 2 OK NA PORTA: ${process.env.PORT || 3000}`)
);
