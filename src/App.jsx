import React, {useState} from 'react';
import axios from 'axios';

import './App.css';


export default function App() {
    const [text, setText] = useState(null);
    const [anagramsList, setAnagramsList] = useState('');

    const sendText = async ()=> {
        const testURL = 'http://localhost:5000/getAnagramsList';           /*change the url */

        const data = {
            "text": text
        };

        try {
            const response = await axios.post(testURL, data); 
            setAnagramsList(response.data.data);
            console.log(response.data.data);
        } catch(err) {
            console.error(err)
        };

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
            <textarea value={anagramsList} readOnly rows='10' cols='50' style={{resize: 'none'}}/>
            <div>
                <input type='file' onChange={saveFile} />
                <button onClick={sendText}>Get it!</button>
            </div>
        </>
    );
};