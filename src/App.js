import "./App.css";
import React from "react";
import Student1 from "./Student1";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Rahul",
    };
  }
  render() {
    return (
      <div className="App">
        <Student1 name={this.state.name} email="trainee@thrymr.net" />

        <button onClick={() => this.setState({ name: "trainee" })}>
          Update Name
        </button>
      </div>
    );
  }
}
export default App;
