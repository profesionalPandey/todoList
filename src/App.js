import "./App.css";
import React from "react";
import Student1 from "./Student1";
import User from "./User";
import Student from "./Student";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Rahul",
      // never call api
      // count:0,
      show: true,
    };
    console.log("constructor");
  }
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   // api deceleration
  // }
  // componentDidUpdate(preProps,preState,snapshot){
  //   console.log("componentDidUpdate",snapshot);
  //   // previous state
  //   // if(preState.count===this.state.count){
  //   //   alert("same");
  //   // }
  //   // without condition 1/0-loop
  //   if(this.state.count<10){
  //     this.setState({count:this.state.count+1});
  //   }

  // }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) return true;
    // block update by default
  }
  render() {
    // do not set !condition
    console.log("render");
    return (
      <div className="App">
        <Student1 name={this.state.name} email="trainee@thrymr.net" />

        <button onClick={() => this.setState({ name: "trainee" })}>
          Update Name
        </button>

        <User />
        <h2>DID Update {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update
        </button>

        {this.state.show ? <Student /> : <h1>Component will UNMOUNT</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
      </div>
    );
  }
}
export default App;
