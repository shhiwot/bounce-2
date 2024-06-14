import React, { Component } from "react";

class Desplay extends Component {
  render() {
    const { fullName, state, country, district } = this.props.list;
    const { className } = this.props;
    return (
      <div className={className}>
        Full Name : {fullName} <br /> State : {state} <br />
        Country : {country} <br /> District :{district}
      </div>
    );
  }
}

export default Desplay;
