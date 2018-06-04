
var myStorage = []; // temporary storage helping localStorage to ADD user input, not overwrite it

var doEverythingButton = document.getElementById('doEverythingButton');
var RandomButton = document.getElementById('RandomButton');
var userInput = document.getElementById('userInputField');
var userInput2 = userInput.value; // .focus() immediatelly and automatically puts the cursor inside the user input field. brilliant! :D
var userOutput = document.getElementById('userOutput');
var userStorage = localStorage.getItem('userStorage');

// button.addEventListener("click", function() {
doEverythingButton.addEventListener("click", function() {
  var c = addToLocalStorage(userInput.value);
  var threeRandomWords = randomizer(c);
  userOutput.innerText = threeRandomWords;
  fetch('http://localhost:3080/test', {
    method: 'GET',
    body: {
      something: 'This is the something property value !!!'
    }
  })
  .then(function(text) {
    console.log("Request is successful! Becoming a real dev now! YAY!");
  })
  .catch(function(error) {
    console.log("Request failed - not okay, Houston!", error);
  });
});

function addToLocalStorage(aString) {

  let userStorage = localStorage.getItem('userStorage');
  let dString = aString.split(" ");
  // console.log("Tova mi e dString-a tuka: ", dString);

  if (!userStorage) {

    userStorage = [];
    userStorage.push(dString);
    localStorage.setItem('userStorage', userStorage);
    // console.log("TOVA MI E userStorage V IF-A: ", userStorage);
    return userStorage;

  } else {
    // console.log("typeof userStorage v nachaoto na ELSE, predi .split()", typeof userStorage);
    userStorage.split(",");
    // console.log("TOVA MI E userStorage V ELSE-A sled .split(): ", userStorage);
    // console.log("typeof userStorage sled .split()", typeof userStorage);
    userStorage.concat(aString);
    localStorage.setItem('userStorage', userStorage.toString());
    // console.log("TOVA MI E userStorage V ELSE-A sled kato e update-nat: ", userStorage);
    return userStorage;

  };
};

function randomizer(bString) { // Here the randomizing function begins
  // console.log("TOVA MI E bString: ", bString);
  // let dString = bString.split(",");
  var sortedArray = [...new Set(bString)];
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

// module.exports.randomizer = randomizer;
