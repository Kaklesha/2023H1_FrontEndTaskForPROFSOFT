import logo from './logo.svg';
import './App.css';


function WhoAmi(props){
  return(
    <div>
      <h1>My name is {props.name()}, surname - {props.surname}</h1>
      <a href={props.link}>My channel</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmi name={()=> {return "john"}} surname='Smith' link="youtube.com"/>
      <WhoAmi name={()=> {return "john"}} surname='Smith' link="youtube.com"/>
    </div>
  );
}

export default App;
