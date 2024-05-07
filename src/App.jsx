// App.jsx
import { useState } from 'react';
import numberTostring from './numberTostring' // Assuming numberToString.js is in the same directory

function App() {
  const [numberAsString, setNumberAsString] = useState("");
  const [numberIsValid, setNumberIsValid] = useState(true);
  const [result, setResult] = useState("");

  // Validation of the user input
  const onClickConvert = (string) => {
    const isValid = /^[0-9]+$/.test(string);
    setNumberIsValid(isValid);
    if (isValid) {
      setResult(numberTostring(string));
    } else {
      setResult("");
    }
  };

  // Handle Enter
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      onClickConvert(numberAsString);
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>Number Converter</h1>
        <div className='input-box'>
          <p>Enter the number</p>
          <input type="text" placeholder='Write your number here...' value={numberAsString} onChange={e => setNumberAsString(e.target.value)} onKeyUp={handleEnter} />
        </div>
        <button onClick={() => onClickConvert(numberAsString)}>Convert</button>
        <div className="message-box">
          <p>Result</p>
          <div>
            {!numberIsValid ?
              <p>Please write whole numbers only</p>
              :
              <p>{result}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
