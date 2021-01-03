import {useState} from "react";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import {ImageData} from "./imageData";
import "./App.css";

function App() {
  const [autoTransitionState, setAutoTransitionState] = useState(false);



  return <div className="App">
    <div className="transition-details">
    Auto Transitions: <input type="checkbox" checked={autoTransitionState} onChange={() => setAutoTransitionState(!autoTransitionState)}></input>
    </div>
 
    <ImageCarousel data={ImageData} autoTransition={autoTransitionState}/>
  </div>;
}

export default App;
