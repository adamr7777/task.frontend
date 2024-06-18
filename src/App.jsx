import React, {useState} from 'react';
import axios from 'axios';

import './App.css';
import Interface from './Components/Interface';


export default function App() {
    const [text, setText] = useState(null);
    const [anagramsList, setAnagramsList] = useState('');

    const sendText = async ()=> {          
        const serverURL = 'https://task-backend-dmmf.onrender.com/getAnagramsList';         

        const data = {
            "text": text
        };

        try {
            const response = await axios.post(serverURL, data); 
            setAnagramsList(response.data.data);

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
            console.error(`The problem: ${err}`);
        };
    };

    return(
        <div className='app-background'>
            <Interface 
                saveFile={saveFile}
                sendText={sendText}
                anagramsList={anagramsList}
            />
        </div>
    );
};