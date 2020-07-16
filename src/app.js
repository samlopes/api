const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(routes);

app.listen(3000, () => console.log("API 2 OK"));
