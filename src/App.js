import {useState} from "react";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import {ImageData} from "./imageData";
import "./App.css";

function App() {
  const [autoTransitionState, setAutoTransitionState] = useState(false);
  const [contextBgColorState, setContextBgColorState] = useState(true);



  return <div className="App">
    <div className="transition-details">
    Auto Transitions: <input type="checkbox" checked={autoTransitionState} onChange={() => setAutoTransitionState(!autoTransitionState)}></input><br/>
    Contextetual Background Color: <input type="checkbox" checked={contextBgColorState} onChange={() => setContextBgColorState(!contextBgColorState)}></input>
    </div>
 
    <ImageCarousel data={ImageData} autoTransition={autoTransitionState} contextualBackground={contextBgColorState}/>
  </div>;
}

export default App;
