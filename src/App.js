import "./App.css";
// import {User} from './User'; calling without default
//  calling with default
import User1 from "./User1";
// alert("from load");
import User from "./User";

// all about the components rfc rcc
function App() {
  // native variable !render
  // let data="rahul pandey"
  // function apple() {
  //   data="trainee";
  //   alert(data);
  // }

  // check for rerendering
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
      <h5>H5</h5>
      {/* only used locally */}
      {/* <Apple/> */}
      {/* {Apple()} */}
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
