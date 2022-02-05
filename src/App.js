import logo from './logo.svg';
import './App.css';
// import {User} from './User';
import User1 from './User1';

function App() {
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
    </div>
  );
}

export function User(){
  return(
  <div>
      <h1>Users component</h1>
  </div>
  )
}

export default App;
