import React, { Component } from "react";
import {
  Button,
  Container,
  InputGroup,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";
import { uuid } from "uuidv4";

var set = null;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: "",
      enteredRoomId: "",
      player: [],
    };
  }

  createGame = () => {
    const userId = uuid();
    fetch("/api/createRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        // enteredRoomId,
      }),
    })
      .then((res) => res.json())
      .then((roomDetail) => {
        console.log("room", roomDetail);
        this.setState({
          roomId: roomDetail._id,
        });

        //set interval

        set = setInterval(() => this.checkPlayerArray(roomDetail._id), 1000);
      });
  };

  checkPlayerArray = (roomId) => {
    fetch("/api/checkstatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enteredRoomId: roomId,
      }),
    })
      .then((res) => res.json())
      .then((roomDetail) => {
        // console.log("playerStatus:", roomDetail);
        console.log("length:", roomDetail.playerOne.length);

        if (roomDetail.playerOne.length === 26) {
          console.log("clear interval");
          clearInterval(set);
        }
        this.setState({
          gameOn: true,
          player: roomDetail.playerOne,
        });
      });
  };

  setEnteredGameId = (name) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    console.log(event.target.name, event.target.value);
  };

  joinGame = () => {
    // if (this.state.enteredRoomId === this.state.roomId) {

    fetch("/api/joinGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enteredRoomId: this.state.enteredRoomId,
      }),
    })
      .then((res) => res.json())
      .then((roomDetail) => {
        this.setState({
          player: roomDetail.playerTwo,
        });
        console.log("roomreturned:", roomDetail);
      });
  };

  render() {
    const { roomId, player } = this.state;
    // const roomId = this.state.roomId
    return (
      <Container>
        <Row>
          <Col>
            <Button variant="primary" className="m-5" onClick={this.createGame}>
              Create Game
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Join game using roomid"
                aria-label="roomId"
                aria-describedby="basic-addon1"
                name="enteredRoomId"
                onChange={this.setEnteredGameId}
              />
            </InputGroup>
            <Button variant="secondary" className="m-5" onClick={this.joinGame}>
              Join Game
            </Button>
            <div>
              {player.map((card, key) => {
                return <Button key={key}> {card.name + card.shape}</Button>;
              })}
            </div>

            {roomId ? (
              <h1>Ask you friends to join in the room id : {roomId}</h1>
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}
