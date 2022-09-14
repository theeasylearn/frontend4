import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

// day 1
// example 1
// const output = <div className='container'><div className='row'><div className='col-12'><h1>First Example in React</h1><hr/><p>this is first line in react <br/> this is second line in react</p></div></div></div>

//example 2(use of expression)
let number1 = 10;
let number2 = 3;
let output = <div className='container'><div className='row'><div className='col-12'><h1>Expression in javascript </h1> <hr/> <b>we can display variables & we can use Expression in javascript <br/></b>{number1} + {number2} = {number1 + number2} <br/> {number1} - {number2} = {number1 - number2}</div></div></div>
root.render(output);
