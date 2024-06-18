import React from 'react';
import './Interface.css'; 

export default function Interface({anagramsList, saveFile, sendText}) {
  return (
    <div className='interface-wrapper'>
      <textarea
        value={anagramsList}
        readOnly
        rows='10'
        cols='50'
        style={{ resize: 'none' }}
        className="interface-textarea"
      />
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


