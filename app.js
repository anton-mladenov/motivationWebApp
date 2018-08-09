// const Joi = require("joi");
const express = require('express');
const app = express();
const myRouter = require("./firstRouter.js");
// const bodyParser = require("body-parser");
// const csp = require(`helmet-csp`);
app.use(express.json());

const port = process.env.PORT || 3080;

app.use("/", myRouter);

app.use("/userInput", myRouter);

app.listen(port);
