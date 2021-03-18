import React, { Component } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "John",
      lastName: "Henry",
      submittedData: [],
    };
  }
  submitHandle = (event) => {
    event.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    this.setState((prevState) => {
      return {
        submittedData: [...prevState.submittedData, formData],
      };
    });
    console.log(this.state.submittedData);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  totalUsers = () => {
    return (
      <span>
        Total: {this.state.submittedData.length}
        <br />
      </span>
    );
  };

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          submitHandle={this.submitHandle}
        />
        {this.totalUsers()}
        <DisplayData formData={this.state.submittedData} />
      </div>
    );
  }
}

export default ParentComponent;
