import './App.css';
import React, {useState} from 'react';

function App() {
  const [create, setCreate] = useState(false);
  const [take, setTake] = useState(false);
  const [currentOption, setCurrentOption] = useState('single');
  
  const changeOption = (option) => {
    setCurrentOption(option)
  }

  const createSurveyButton = () => {
    setTake(false);
    setCreate(true);
  }
  const takeSurveyButton = () => {
    setCreate(false);
    setTake(true);
  }

  return (
    <div className="App">
      {(create===false && take===false) ? 
        (
        <>
          <button className="survey" onClick={createSurveyButton}>Create Survey</button>
          <br/><br/><br/>
          <button className="survey" onClick={takeSurveyButton}>Take Survey</button>
        </>)
        :
        null
      }
      {(create === true)? 
        <>
          <select onChange={(event) => changeOption(event.target.value)} value={currentOption}>
            <option value="single">Single-select</option>
            <option value="multi">Multi-select</option>
          </select>
        </> 
      : null}
    </div>
  );
}

export default App;
