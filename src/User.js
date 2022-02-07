import React from "react";
export default class User extends React.Component {
  
  render() {
      console.log("from render")
    return (
      <div
        style={{
          backgroundColor: "coral",
          margin: 20,
          padding: 10,
          color: "darkred",
        }}
      >
        <h1>User Component</h1>
        <p>a class based component</p>
      </div>
    );
  }
}

