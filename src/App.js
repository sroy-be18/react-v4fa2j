import React from 'react';
import {useState} from "react"
import './style.css';
import Signup from './components/Signup.js';
import Success from './components/Success.js'
export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className='App'>
      {!isSubmitted ?<Signup submitForm={submitForm}/>: <Success/> }
    </div>
  );
}
