import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+"
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1,
      text: state.text + '+'
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
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
