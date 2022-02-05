import "./App.css";
// import {User} from './User'; calling without default
//  calling with default
import User1 from "./User1";
// alert("from load");
import User from "./User";
import Student from "./Student";
import { useState } from "react"; //stateHook
import Student1 from "./Student1";

// all about the components rfc rcc
function App() {
  // native variable !render
  // let data="rahul pandey"
  // function apple() {
  //   data="trainee";
  //   alert(data);
  // }

  // using stateHooks
  const [n, setN] = useState("Rahul");
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
