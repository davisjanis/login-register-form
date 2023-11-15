import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register} from "./Register";

function App() {
  //new state 'currentForm' that would hold the value of which form should be displayed.
  // setCurrentForm is for default behaviour
  const [currentForm, setCurrentForm] = useState('login');

  // 
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
      
    </div>
  );
}

export default App;
