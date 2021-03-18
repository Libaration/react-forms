import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submitHandle}>
          <input
            type="text"
            name="firstName"
            onChange={this.props.handleChange}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={this.props.handleChange}
            value={this.props.formData.lastName}
          />
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
