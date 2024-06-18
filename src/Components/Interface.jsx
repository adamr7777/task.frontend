import React from 'react';
import './Interface.css'; 

export default function Interface({anagramsList, saveFile, sendText, clearScreen}) {
  return (
    <div className='interface-wrapper'>
      <div className='textarea-container'>
        <textarea
          value={anagramsList}
          readOnly
          rows='10'
          cols='50'
          style={{ resize: 'none' }}
          className="interface-textarea"
        />
        <button onClick={clearScreen} className='clear-button'>Clear the Screen</button>
      </div>
      <div className='interface-container'>
        <label className='file-label'>
          <input type='file' onChange={saveFile} className='interface-input' />
          📁 Select File
        </label>
        <button onClick={sendText} className='interface-button'>Get it!</button>
      </div>
    </div>
  );
};


