import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

  function toggleMode(){
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#495057'
    }else{
      setMode('light');
      document.body.style.background = '#ffffff'
  };
}
  return (
    <>
     <Navbar title = "Text Util" about = "About Text Utilities" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      <About/>
    </div>
    </>
  )
}
export default App;
