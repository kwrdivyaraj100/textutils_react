import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

  function toggleMode(){
    (mode === 'light') ? (setMode('dark')) : (setMode('light'));
  }
  return (
    <>
     <Navbar title = "Text Util" about = "About Text Utilities" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      <About/>
    </div>
    </>
  )
}
export default App;
