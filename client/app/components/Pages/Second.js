import React, { Component } from "react";

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Second Page</h1>
        <button onClick={() => this.props.goBack(false)}>Go back</button>
      </div>
    );
  }
}

export default Second;
