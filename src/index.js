//need to use for all of our react files.Distinct/foundational library
import React from 'react';
//Rendering react opbejcts on the screen 
import ReactDOM from 'react-dom';
import App from './components/App';


//special JS called JSX
//document -varuable which represents DOM 
//DOM is a JS object which represents the HTML version of our apllication 
ReactDOM.render(<App />,document.getElementById('root'));
