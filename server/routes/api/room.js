const Room = require("../../models/Room");

module.exports = (app) => {
  //   app.get("/api/counters", (req, res, next) => {
  //     Room.find()
  //       .exec()
  //       .then((counter) => res.json(counter))
  //       .catch((err) => next(err));
  //   });

  app.post("/api/createRoom", function (req, res, next) {
    const room = new Room();
    room
      .save()
      .then(() => res.json(room))
      .catch((err) => next(err));
  });

  app.post("/api/checkstatus", function (req, res, next) {
    Room.findById(req.body.enteredRoomId)
      .then((room) => {
        res.json(room);
        console.log("playerstatus:", room);
      })
      .catch((err) => next(err));
  });

  app.post("/api/joinGame", function (req, res, next) {
    Room.findById(req.body.enteredRoomId)
      .then((room) => {
        console.log("room:", room);

        createDeck();

        shuffleDeck();

        let { player1Cards, player2Cards } = splitCards2();
        let playerOne = [];
        for (let value in player1Cards) {
          playerOne.push({
            name: player1Cards[value].value.name,
            shape: player1Cards[value].shape,
          });
        }

        let playerTwo = [];
        for (let value in player2Cards) {
          playerTwo.push({
            name: player2Cards[value].value.name,
            shape: player2Cards[value].shape,
          });
        }

        room.playerOne = playerOne;
        room.playerTwo = playerTwo;
        console.log("finalroom:", room);
        room
          .save()
          .then(() => res.json(room))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

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
    return deck;
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

  //   app.delete("/api/counters/:id", function (req, res, next) {
  //     Counter.findOneAndRemove({ _id: req.params.id })
  //       .exec()
  //       .then((counter) => res.json())
  //       .catch((err) => next(err));
  //   });

  //   app.put("/api/counters/:id/increment", (req, res, next) => {
  //     Counter.findById(req.params.id)
  //       .exec()
  //       .then((counter) => {
  //         counter.count++;

  //         counter
  //           .save()
  //           .then(() => res.json(counter))
  //           .catch((err) => next(err));
  //       })
  //       .catch((err) => next(err));
  //   });

  //   app.put("/api/counters/:id/decrement", (req, res, next) => {
  //     Counter.findById(req.params.id)
  //       .exec()
  //       .then((counter) => {
  //         counter.count--;

  //         counter
  //           .save()
  //           .then(() => res.json(counter))
  //           .catch((err) => next(err));
  //       })
  //       .catch((err) => next(err));
  //   });
};
