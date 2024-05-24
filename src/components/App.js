
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  
  let [greet,setGreet]=useState("");
  let [input,setInput]=useState("");

  function upadteInput(e){
    let value=e.target.value;
    setInput(value)
    setGreet("Hello "+value+ "!")
  }
  return (
    <div>
        <input 
          type="text"
          value={input}
          onChange={upadteInput}
        />
      <p>{greet}</p> 
    </div>
  )
}

export default App
