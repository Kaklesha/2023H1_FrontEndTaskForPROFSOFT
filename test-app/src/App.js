import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+",
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1,
      text: state.text + '+'
    }))
  }

  commitInputChanges = (e, color) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type='text' onChange={(e) => this.commitInputChanges(e, "some color")}/>
        </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Cena" link="facebook.com"/>
      <WhoAmI name="Ada" surname="Wong" link="fuckingbitch.com"/>
    </div>
  );
}

export default App;
