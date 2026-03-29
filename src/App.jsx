import { useState } from 'react'
import './App.css'

function App() {
  const [message,setmessage] = useState('');
  const [height,setheight] = useState(0);
  const [weight,setweight] = useState(0);
  const [bmi,setbmi] = useState('');

  function restart(){
    window.location.reload();
  }

  const yourbmi = (e) => {
    e.preventDefault();

    let bmi = (weight/(height*height)*100*100).toFixed(2);
    if(height ===0 || weight ===0){
      alert("Please enter valid weight and height");
    }
    else{
      setbmi(bmi);
    }
    if(bmi<18.5){
      setmessage("You are underweight");
    }
    else if(bmi>=18.5 && bmi<24.9){
      setmessage("You are normal weight");
    }
    else if(bmi>=25 && bmi<29.9){
      setmessage("You are overweight");
    }
    else{
      setmessage("You are obese");
    }
  }

  return (
    <>
    <div className="container">
      <div className="box">
        <div className="in">
      <h1>BMI Calculator</h1>
      <form onSubmit={yourbmi}>

        <label htmlFor="weight">Weight (kg) : </label>
        <input type="text" placeholder='Enter weight in kg' value={weight} onChange={(e)=>setweight((e.target.value))}/>

        <label htmlFor="height">Height (cm) : </label>
        <input type="text" placeholder='Enter height in cm' value ={height} onChange={(e)=>setheight(e.target.value)} />

      <div className="btn">
        <button type="submit" onClick={yourbmi} >Calculate BMI</button>
        <button onClick={restart} type='button'>Reset</button>
      </div>
      </form>
      
      <h3>Your BMI is: {bmi}</h3>
      <p>{message}</p>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default App
