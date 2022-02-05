// fn() based component***
import { useState } from "react"; //stateHook
export function User() {
  // nested component
  // function Apple() {
  //   alert("Fn() Function called");
  // }

  // using stateHook
  const [data, setData] = useState("rahul");
  function updateData() {
    setData("trainee");
    alert(data);
  }
  const [dataCal, setDataCal] = useState(0);
  function calculateData() {
    setDataCal(dataCal + 1);
  }
  return (
    <div>
      <h1>Users component</h1>
      <p>a fn() based component</p>
      {/* calling{} native variable  */}
      {/* using variable=!good practice */}
      {/* rerendering = only in state&props React feature */}
      <h1>{data}</h1>
      <h1>{dataCal}</h1>

      <button onClick={updateData}>Click me</button>
      <button onClick={calculateData}>Click me</button>
    </div>
  );
}

// without using JSX
// import React from "react"
// function User(){
//     return React.createElement(div,h1,"Users component");
// }

export default User;
