import "./App.css";
// import {User} from './User'; calling without default
//  calling with default
import User1 from "./User1";
// alert("from load");

// all about the components rfc rcc
function App() {
  // native variable 
  let data="rahul pandey"

  // nested component
  // function Apple() {
  //   alert("Fn() Function called");
  // }
  function apple() {
    data="trainee";
    alert(data);
  }

  return (
    <div className="App">
     {/* calling{} native variable  */}
     {/* using variable=!good practice */}
      <h1>{data}</h1>

      {/* compiled as a alert when passed as() */}
      {/* <button onClick={Apple()}>Click me</button> */}
      {/* calling vai a fn() */}
      <button onClick={apple}>Click me</button>
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
      <h5>H5</h5>
      {/* only used locally */}
      {/* <Apple/> */}
      {/* {Apple()} */}
    </div>
  );
}

// fu() component without default can have n* no. in a file
export function User() {
  return (
    <div>
      <h1>Users component</h1>
    </div>
  );
}

export default App;
