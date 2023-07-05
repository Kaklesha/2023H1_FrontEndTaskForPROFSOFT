import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//const elem = <h2>Hello world</h2>;
//Для понимания v
// const elem = React.createElement('h2',null,'Hello world');

const text ='Hello world!';

//const ff = new Date();

//Если многострочное испл ()
// Эдементы в контейнер оборачиваем
//Стандартные св-ва через CamelCase class->className
//Обьекты не выводятся через {"интерполяция"}

// const elem =(
//   <div>
//     <h2 className='fff' tabIndex={0}>Text: {text}</h2>
//       <input type="text" />
//      <button>Click</button>
//      <label htmlFor=""></label>
//      <button class='ddd' />
    
//   </div>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  //elem

);

//