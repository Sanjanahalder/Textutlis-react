import './App.css';
import Alert from './components/Alert';
import Textform from './components/Textform';
import About from './components/About'
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
           setAlert({
           msg: message,
           type: type
            } )
            setTimeout(()=>{
                 setAlert(null)
            },1600)
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode ('dark')
      document.body.style.backgroundColor="rgb(13 70 86)"
      showAlert("Dark mode enable" , "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode enable" , "success");
    }
  }
  return(
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'> 
      <Switch>
          <Route  exact path="/about">
            <About   mode={mode}/>
          </Route>
         <Route exact path="/">
         < Textform showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter" mode={mode}/>
          </Route>
        </Switch> 
        </div>
      </Router>
      </>
  );
}
export default App;
