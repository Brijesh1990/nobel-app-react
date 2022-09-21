import React from 'react';
import ReactDOM from 'react-dom/client';
import {Add,Subs} from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById("nobel-app-calc"));

root.render(

    <>
    <button type ="button" id="btn" getElementById onClick={Add}> Click
    for additions</button>
     <br/> <br/>
    <button type ="button" id="btn"
    onClick={ Subs }> Click for substraction</button> 

    </>

)