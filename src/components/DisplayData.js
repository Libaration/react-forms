import React, { Component } from "react";

class DisplayData extends Component {
  render() {
    return this.props.formData.map((person) => {
      return (
        <span>
          {person.firstName}, {person.lastName}
          <br />
        </span>
      );
    });
  }
}

export default DisplayData;
