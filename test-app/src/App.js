import logo from './logo.svg';
import './App.css';

function WhoAmI (props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Cena" link="facebook.com"/>
      <WhoAmI name="Lu" surname="Wong" link="fuckingbitch.com"/>
    </div>
  );
}

export default App;
