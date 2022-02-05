
import './App.css';
 // import {User} from './User'; calling without default
//  calling with default
import User1 from './User1'; 


// all about the components rfc rcc
function App() {
  // nested component
  function Apple(){
    return(<div>Apple Component</div>)
  }
  return (
    <div className="App">
      <h1>H1</h1>
      {/* rfc */}
      <User/>
      <User/>
      <User/>
      <User/>
      {/* rcc */}
      <User1/>
      <h5>H5</h5>
      {/* only used locally */}
      <Apple/>
      {/* {Apple()} */}
    </div>
  );
}

// fu() component without default can have n* no. in a file  
export function User(){
  return(
  <div>
      <h1>Users component</h1>
  </div>
  )
}

export default App;
