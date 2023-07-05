import React from 'react';
import './App.css';
//-------
const Header = () =>{
  return <h2>Hello world!</h2>
}
////КАк функция
// const Field = () =>{
//   const holder = 'Enter here';
//   const styledField={
//     width:'300px'
//   };
//   return <input placeholder={holder} 
//                 type='text'
//                 style={styledField} />
// }


////Как класс
////class Field extends React.Component  IF 
//// IFimport {Component} from 'react';
class Field extends React.Component{
  render(){
    const holder = 'Enter here';
    const styledField={
      width:'300px'
    };
  
    return <input placeholder={holder} 
                type='text'
                style={styledField} />
              }
}

function Btn() {
  const text = "Log in";
  const logged=false;
  return <button>{logged?"Enter": text}</button>

  // const res = () =>{
  //   return "Log in";
  // }
  // return <button>{res()}</button>

  // const p = <p>Log in</p>
  // return <button>{p}</button>

}


function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
