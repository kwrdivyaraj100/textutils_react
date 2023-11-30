import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.background = '#ffffff';
      showAlert("Dark Mode has been Disabled", "success");
    };
  }
  return (
    <>
      <Navbar title="Text Util" about="About Text Utilities" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
      </div>
      <About />
    </>
  )
}
export default App;
