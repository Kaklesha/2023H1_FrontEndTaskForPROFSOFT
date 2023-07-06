import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class WhoAmi extends Component{

  constructor(props){
    super(props);
    this.state={
      years: 27
      ,text:'+++'
      ,position:''
    }
    //this.nextYear=this.nextYear.bind(this);
  }
  //nextYear  ()  {  //for bind

  nextYear =() => {
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

  commitInputChanges=(e,color)=>{
    // console.log(e.target.value)
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

render(){
  const {name,surname,link}=this.props;
  const{position, years, text} = this.state;
  return(
    <div>
{/* <button onClick={()=>this.nextYear()}>{text}</button> */}
     
      <button onClick={this.nextYear}>{text}</button>
      <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
      <a href={link}>My channel</a>
      <form action=""></form>
      <span>Введите должность</span>
      <input type="text" onChange={(e)=>this.commitInputChanges(e,'some color')} />

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
