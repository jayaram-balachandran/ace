import React, { Component } from "react";
import First from "./First";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Bank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deposit: null,
      loan: null,
      yearsLoan: 1,
      yearsDeposit: 1,
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <h1> Interest calculation for : {this.props.bankDetail.name} </h1>

        <div className="card container">
          <h3>
            Loan Interest :{" "}
            {this.state.yearsLoan *
              this.state.loan *
              (this.props.bankDetail.loanInterest / 100)}{" "}
          </h3>
          <p>Interest Rate : {this.props.bankDetail.loanInterest}</p>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Select Tenure
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  name="yearsLoan"
                  as="select"
                  onChange={this.myChangeHandler}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{" "}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="validationCustom05">
              <Form.Label column sm={2}>
                Loan Amount in Rs.
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  type="text"
                  name="loan"
                  placeholder="1000000.00"
                  required
                  onChange={this.myChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid amount.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </div>

        <div className="card container">
          <h3>
            Savings Interest :{" "}
            {this.state.yearsDeposit *
              this.state.deposit *
              (this.props.bankDetail.interestRate / 100)}{" "}
          </h3>
          <p>Interest Rate : {this.props.bankDetail.interestRate}</p>

          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Select Tenure
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  name="yearsDeposit"
                  as="select"
                  onChange={this.myChangeHandler}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{" "}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="validationCustom05">
              <Form.Label column sm={2}>
                Deposit Amount in Rs.
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  type="text"
                  name="deposit"
                  placeholder="1000000.00"
                  required
                  onChange={this.myChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid amount.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </div>
        <Button variant="success" onClick={() => this.props.goBack(false)}>
          Go back
        </Button>
      </div>
    );
  }
}

export default Bank;
