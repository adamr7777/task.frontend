import React, {useState} from 'react';
import axios from 'axios';

import './App.css';


export default function App() {
    const [text, setText] = useState(null);

    const sendText = async ()=> {
        const testURL = 'http://localhost:5000/test';           /*change the url */

        const data = {
            "text": text
        };

        const response = await axios.post(testURL, data);  /*set up try and catch*/
        // console.log(response.data.message);
        console.log(text);
    };

    const saveFile = (event)=> {
        const inputFile = event.target.files[0];
        const fileReader = new FileReader();

        fileReader.onload = (e)=> {
            setText(e.target.result);
        };

        try {
            fileReader.readAsText(inputFile);

        } catch(err) {
            console.log(`The problem: ${err}`);
        };
    };

    return(
        <>
            <h1>working!</h1>
            <input type='file' onChange={saveFile} />
            <button onClick={sendText}>Get it!</button>
        </>
    );
};