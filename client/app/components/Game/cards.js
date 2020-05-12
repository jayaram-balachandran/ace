var readline = require("readline");

var prompts = readline.createInterface(process.stdin, process.stdout);
// var prompts2 = readline.createInterface(process.stdin, process.stdout);

// Declaring numbers array:
var num = [
  { value: 1, name: "2" },
  { value: 2, name: "3" },
  { value: 3, name: "4" },
  { value: 4, name: "5" },
  { value: 5, name: "6" },
  { value: 6, name: "7" },
  { value: 7, name: "8" },
  { value: 8, name: "9" },
  { value: 9, name: "10" },
  { value: 10, name: "J" },
  { value: 11, name: "Q" },
  { value: 12, name: "K" },
  { value: 13, name: "A" },
];

//Declaring shapes:

var shapes = ["spade", "clover", "heart", "diamond"];

//Declaring empty Deck and players deck:

var deck = [];

var player1Cards = [];
var player2Cards = [];
var player3Cards = [];
var player4Cards = [];

//Function for creating a Deck:

function createDeck() {
  for (i = 0; i < shapes.length; i++) {
    for (j = 0; j < num.length; j++) {
      var cards = { value: num[j], shape: shapes[i] };
      deck.push(cards);
    }
  }
  return deck;
}

//Function for shuffling the Deck:

function shuffleDeck() {
  // for 1000 turns
  // switch the values of two random cards
  for (var i = 0; i < 1000; i++) {
    var location1 = Math.floor(Math.random() * deck.length);
    var location2 = Math.floor(Math.random() * deck.length);
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

//Function to split the cards and for two players:

function splitCards2() {
  let deckCopy = [...deck];
  var equal = deckCopy.length / 2;
  player1Cards = deckCopy.splice(0, equal);
  player2Cards = deckCopy;
  return {
    player1Cards,
    player2Cards,
  };
}

//Function to split the cards and for four players:

function splitCards4() {
  let deckCopy = [...deck];
  var equal = deckCopy.length / 4;
  player1Cards = deckCopy.splice(0, equal);
  player2Cards = deckCopy.splice(0, equal);
  player3Cards = deckCopy.splice(0, equal);
  player4Cards = deckCopy;
  return {
    player1Cards,
    player2Cards,
    player3Cards,
    player4Cards,
  };
}

async function question1() {
  return new Promise((resolve, reject) => {
    prompts.question("Enter yes to start the game | no to quit : ", function (
      response1
    ) {
      resolve(response1);
    });
  });
}

async function question2() {
  return new Promise((resolve, reject) => {
    prompts.question("Enter no of players - 2 or 4 ? : ", function (response2) {
      resolve(response2);
    });
  });
}

async function main() {
  let response1 = await question1();
  let response2 = "";
  if (response1 === "yes") {
    createDeck();
    shuffleDeck();
    response2 = await question2();
    if (Number(response2) === 2) {
      let splitOfTwoPlayersList = splitCards2();
      var playerOneCards = [];
      console.log("player 1 Cards : ");

      for (let value in player1Cards) {
        console.log(player1Cards[value].value.name, player1Cards[value].shape);
      }
      console.log("=============================");
      console.log("player 2 Cards : ");

      for (let value in player2Cards) {
        console.log(player2Cards[value].value.name, player2Cards[value].shape);
      }
    } else if (Number(response2) === 4) {
      let splitOfFourPlayersList = splitCards4();
      console.log("player 1 Cards : ");

      for (let value in player1Cards) {
        console.log(player1Cards[value].value.name, player1Cards[value].shape);
      }
      console.log("=============================");
      console.log("player 2 Cards : ");

      for (let value in player2Cards) {
        console.log(player2Cards[value].value.name, player2Cards[value].shape);
      }
      console.log("=============================");
      console.log("player 3 Cards : ");

      for (let value in player3Cards) {
        console.log(player3Cards[value].value.name, player3Cards[value].shape);
      }
      console.log("=============================");
      console.log("player 4 Cards : ");

      for (let value in player4Cards) {
        console.log(player4Cards[value].value.name, player4Cards[value].shape);
      }
    } else {
      console.error("Unexpected input not captured");
    }
  } else if (response1 === "no") {
    console.error("Thank you. Visit next time");
  } else {
    console.error("Expected input not captured");
  }
  console.log("response1", response1, response2);
}

main();
// process.exit();
