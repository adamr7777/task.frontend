import React from 'react';
import './App.css';


export default function App() {
    const testUrl = 'http://localhost:5000/test';
    const click = ()=> {
        fetch(testUrl) 
            .then((response)=> response.json())
            .then((data)=> console.log(data.message));
    };

    return(
        <>
            <h1>working!</h1>
            <button onClick={click}>Click Me</button>
        </>
    );
};