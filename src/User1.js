// class based component
import React,{Component} from 'react'
// can export while deceleration 
import "./App.css";
export default class User1 extends Component{
    constructor(){//template of the class
        super();//to implement this
        this.state={//object
           data:"rahul",
           dataCalc:0,
        }
    }
    apple(){
        this.setState({data:"trainee"});
    }
    appleCalc(){
        this.setState({dataCalc:this.state.dataCalc+1});
    }
    render()
    {
        return(
            <div>
            <h1>Users1 Component</h1>
            <p>a class based component</p>
            <h1>{this.state.data}</h1>
            <h1>{this.state.dataCalc}</h1>
            {/* !()=>execute on load */}
            <button onClick={()=>this.apple()}>Click me</button>
            <button onClick={()=>this.appleCalc()}>Click me</button>
            </div>
        )
    }
}
// state must not be used out of the component
// state is public