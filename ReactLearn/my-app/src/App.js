import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class WhoAmi extends Component{

  constructor(props){
    super(props);
    this.state={
      years: 27
      ,text:'_--_'
    }
  }

  nextYear = () =>{
    console.log('+++');
    this.setState(
    //   {
     // years: ++this.state.years
    // }

    //Верни обьект v когда чётко зависит от пред-го состояния
    state=>({ 
      years: this.state.years + 1
    })
    )
  }

render(){
  const {name,surname,link}=this.props;
  return(
    <div>
      <button onClick={this.nextYear}>{this.state.text}</button>
      <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
      <a href={link}>My channel</a>
    </div>
  )
}
}

function App() {
  return (
    <div className="App">
      <WhoAmi name={"john"} surname='Smith' link="youtube.com"/>
      <WhoAmi name={"Alex"} surname='Smith' link="youtube.com"/>
    </div>
  );
}

export default App;

//у компонентов динам состояния что меняются
