import "./App.css";
// import {User} from './User'; calling without default
//  calling with default
import User1 from "./User1";
// alert("from load");
import User from "./User";
import Student from "./Student";
import { useState } from "react"; //stateHook
import Student1 from "./Student1";
import React from "react";
import Profile from "./Profile";
import User2 from "./User2";
import Members from "./Members";

// all about the components rfc rcc
function App() {
  // native variable !render
  // let data="rahul pandey"
  // function apple() {
  //   data="trainee";
  //   alert(data);
  // }

  // fn()for onChange event
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  // submit event
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [intrust, setIntrust] = useState("");

  function getFormData(e) {
    console.log(name, tnc, intrust);
    // stops lode
    e.preventDefault();
  }
  // onclick event
  const [status, setStatus] = React.useState(true);
  // using stateHooks
  const [n, setN] = useState("Rahul");
  // user2 
  function getData(){
    alert("from app");
  }
  console.warn("___________check for rerendering__________");
  return (
    <div className="App">
      {/* compiled as a alert when passed as() */}
      {/* <button onClick={Apple()}>Click me</button> */}
      {/* calling vai a fn() */}
      {/* <button onClick={apple}>Click me</button> */}
      {/* calling vai a ()=> using alert */}
      {/* <button
        onClick={() => {
          alert("Arrow fn()=> Function called");
        }}
      >
        Click me
      </button> */}
      {/* calling vai a ()=> using Apple */}
      {/* <button
        onClick={() => {
          Apple();
        }}
      >
        Click me
      </button> */}
      {/* rfc */}
      <User />
      {/* rcc */}
      <User1 />
      
      <Student name={n} />
      <button
        onClick={() => {
          setN("trainee");
        }}
      >
        Update Name
      </button>
      <Student1 name="Rahul" email="trainee@thrymr.net" />
      <Student1 name={"akash"} email="trainee@thrymr.net" />
      {/* <Student
        name={"rishi"}
        email="trainee@thrymr.net"
        other={{ address: "kapoorthala", mobile: "126" }}
      /> */}
      {/* only used locally */}
      {/* <Apple/> */}
      {/* {Apple()} */}

      {/* native components */}
      <div
        style={{
          backgroundColor: "MistyRose",
          margin: 20,
          padding: 10,
          color: "brown",
        }}
      >
        {print ? <h1>{data}</h1> : null}
        <p>Get INput Box Value</p>
        <input type="text" onChange={getData} />
        <button onClick={() => setPrint(true)}>Print</button>
      </div>

      <div
        style={{
          backgroundColor: "MistyRose",
          margin: 20,
          padding: 10,
          color: "brown",
        }}
      >
        {status ? <h1>magic!!</h1> : null}
        <p>Show/Hide & Toggle</p>
        <button onClick={() => setStatus(true)}>Show</button>
        <button onClick={() => setStatus(false)}>Hide</button>
        <button onClick={() => setStatus(!status)}>Toggle</button>
      </div>

      <div
        style={{
          backgroundColor: "MistyRose",
          margin: 20,
          padding: 10,
          color: "brown",
        }}
      >
        {/* forms and there property */}
        <h1>Forms!!</h1>
        <form onSubmit={getFormData}>
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <select onChange={(e) => setIntrust(e.target.value)}>
            <option>Select Option</option>
            <option>Dark</option>
            <option>Light</option>
          </select>
          <br />
          <br />
          <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
          <span>Accept Terms & conditions</span>
          <br />
          <br />
          <button type="submit">Submit</button>
          <button>Clear</button>
        </form>
      </div>

        <Profile/>
        <User2 data={getData} />
        <div style={{float:"right"}}>
        <Members/>
        </div>
      <h5>App.js</h5>
    </div>
  );
}

// making a component withing the same file
// fu() component without default can have n* no. in a file
// export function User() {
//   return (
//     <div>
//       <h1>Users component</h1>
//     </div>
//   );
// }

export default App;
