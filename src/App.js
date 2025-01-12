import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForms from './components/TextForms';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode==="light") {
      setMode("dark")
      document.getElementById('mode-btn').style.color= "white"
      document.body.style.backgroundColor="#070547"
      document.body.style.color="white";
      
    }
    else{
      
      setMode("light")
      document.getElementById('mode-btn').style.color= "black"
      document.body.style.backgroundColor="white"
      document.body.style.color="black";

    }
  }

  return (
    <>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode}/>
        <div className="container">


        <Routes>
          <Route path="/about" element={<About />} />
           <Route path="/" element={<TextForms />} /> 
        </Routes>
        </div>
       </Router> 
       
    </>

  );
}

export default App;
