
// const Joi = require("joi");
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
const myRouter = express.Router();

app.use(express.json());

function randomizer(bString) { // Here the randomizing function begins
  console.log("TOVA MI E bString: ", bString);
  let dString = bString.split(",");
  var sortedArray = [...new Set(dString)];
  // console.log("TOVA MI E sortedArray: ", sortedArray);
  var finalResult = [];

  for (let i = 0; i < sortedArray.length; i++) { // three words are randomly chosen from the array of strings and returned in a new array
    var hey = sortedArray.splice(Math.floor(Math.random() * sortedArray.length), 1)[0]; // [0] is used so finalResult receives only strings and not whole arrays with only one string in each array.
    if (hey !== " " && hey !== "") {
      finalResult.push(hey);
    };
  }; // [0] is used so finalResult receives only strings and not whole arrays with only one string in each array.
  // console.log("TOVA M E finalResult: ", finalResult);
  return ("Hey, sunshine! You are " + finalResult[0] + ", " + finalResult[1] + " and " + finalResult[2] + ". Never forget that!");
};

const smth = [
  { id: 0, a: "That's something major, bruh!", b: "You are definitely becoming a F developer!" }
];

myRouter.get("/", (req, res, next) => {
  res.send(randomizer("FUCK, Awesome, nice!"))
});

// myRouter.get("/test", (req, res, next) => {
//   res.send("WHAT BRO");
//   let a = req.body.something;
//   res.send(a);
// });

myRouter.post("/userInput", (req, res, next) => {
  let smthTest = {
    id: smth.length + 1,
    a: req.body.a,
    b: req.body.b
  };
  smth.push(smthTest);
  // res.send(smthTest);
  res.send(smth);
});

// myRouter.post("/userInput", (req, res, next) => {
//   const schema = {
//     word: Joi.string().min(3).required();
//   };
//
//   const result = Joi.validate(req.body, schmema);
//   console.log(result);
//
//   if (result.error) {
//     res.status(400).send(result.error);
//   };
// });

module.exports = myRouter;
