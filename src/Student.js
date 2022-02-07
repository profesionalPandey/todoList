import React from "react";

export default class Student extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount called");
    // auto call
  }
  render() {
    //must in rcc
    console.log(this.props);
    return (
      <div
        style={{
          backgroundColor: "Moccasin",
          margin: 20,
          padding: 10,
          color: "OrangeRed",
        }}
      >
        <h1>Student Component</h1>
        <p>a class based component</p>
      </div>
    );
  }
}
