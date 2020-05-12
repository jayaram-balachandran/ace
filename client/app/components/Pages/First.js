import React, { Component } from "react";
// import Second from "./Second";
import Bank from "./Bank";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

const data = [
  {
    name: "SBI Bank",
    interestRate: 8.8,
    loanInterest: 8.65,
    favourite: true,
  },
  {
    name: "HDFC Bank",
    interestRate: 7.9,
    loanInterest: 11.25,
    favourite: true,
  },
  {
    name: "ICICI Bank",
    interestRate: 8.5,
    loanInterest: 11.4,
    favourite: false,
  },
  {
    name: "YES Bank",
    interestRate: 8.3,
    loanInterest: 13.1,
    favourite: false,
  },
];

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   goToSecondPage: false,
      goToBankPage: false,
      bankObj: {},
      favChange: false,
      searchFlag: false,
      bankSearch: "",
    };
  }
  //   setGoToSecondPage = (value) => {
  //     this.setState({
  //       goToSecondPage: value,
  //     });
  //   };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      searchFlag: true,
      [nam]: val,
    });
  };

  setGoToBankPage = (value) => {
    this.setState({
      goToBankPage: value,
    });
  };

  setBankObj = (value) => {
    // console.log(value);
    this.setState({
      bankObj: value,
    });
  };

  checkFavourite = (value) => {
    this.setState({
      favChange: !value,
    });
  };

  filterBank = (value) => {
    let filteredBank;
  };

  render() {
    return (
      <div>
        {/* {this.state.goToSecondPage ? (
          <Second goBack={this.setGoToSecondPage} /> 
           */}
        {this.state.goToBankPage ? (
          <Bank bankDetail={this.state.bankObj} goBack={this.setGoToBankPage} />
        ) : (
          <div className="card container">
            <div>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Bank Details: </Navbar.Brand>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    name="bankSearch"
                    onChange={this.myChangeHandler}
                  />
                </Form>
              </Navbar>
            </div>
            {/* <button onClick={() => this.setGoToSecondPage(true)}>
              Second Page
            </button> */}
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>InterestRate</td>
                  <td>LoanInterest</td>
                  <td>Favourites</td>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter(
                    (value) =>
                      value.name
                        .toLowerCase()
                        .includes(this.state.bankSearch.toLowerCase()) === true
                  )
                  .map((bankObj, index) => (
                    <tr>
                      <td
                        key={index}
                        onClick={() => {
                          this.setBankObj(bankObj);
                          this.setGoToBankPage(true),
                            this.setGoToBankPage(true);
                        }}
                      >
                        {bankObj.name}
                      </td>
                      <td>{bankObj.interestRate}</td>
                      <td>{bankObj.loanInterest}</td>
                      <td>
                        <input
                          type="checkbox"
                          name="name1"
                          checked={bankObj.favourite}
                          onClick={() => {
                            this.checkFavourite(bankObj.favourite);
                            bankObj.favourite = !bankObj.favourite;
                          }}
                        />
                        &nbsp;
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <h3>Favourite Banks:</h3>
            <div>
              {data
                .filter((value) => value.favourite == true)
                .map((filteredBank) => (
                  <p>{filteredBank.name}</p>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default First;
