import React, { Component } from "react";
import "./App.css";

const li = [
  {
    name: "question",
    str: "Click on button to start the Game",
  },
  {
    name: "question",
    str: "Guess a number between 1 to 10",
  },
  {
    name: "question",
    str: "Multiply it by 9",
  },
  {
    name: "question",
    str: "Sum the digits, if it is a two digit number. (Eg 1+2 = 3)",
  },
  {
    name: "question",
    str: "Subtract 5 from the number u got",
  },
  {
    name: "question",
    str:
      "Convert the number into alphabets. Eg if number = 1 -> A, 2 -> B, 3 -> C, 4 -> D",
  },
  {
    name: "question",
    str:
      "Guess a country name, starting with the alphabet you got. Eg I -> India",
  },
  {
    name: "question",
    str: "Guess a animal name starting with the last alphabet of the country ",
  },
  {
    name: "question",
    str: "Guess a fruit name starting with the last alphabet of the animal ",
  },
  {
    name: "answer",
    str: " Was it a Orange Kangarooo in Denmark?  ",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickFlag: false,
      clicks: 0,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mind Games</h1>
          <p>{li[this.state.clicks].str}</p>
          <button onClick={this.IncrementItem}>Go...!</button>
        </header>
      </div>
    );
  }
}

export default App;
