import React from "react";

export default class Student1 extends React.Component {
 
    render() {
    //must in rcc
    console.log(this.props);
    return (
      <div
        style={{
          backgroundColor: "coral",
          margin: 20,
          padding: 10,
          color: "darkred",
        }}
      >
        <h1>Student1 Component</h1>
        <p>a class based component</p>
        <h2>Student:{this.props.name}</h2>
        <h2>Email:{this.props.email}</h2>
      </div>
    );
  }
}
// props can be changed only in the parent component 
// cannot change in here 