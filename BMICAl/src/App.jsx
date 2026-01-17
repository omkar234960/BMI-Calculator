
import './App.css'
import { useState } from 'react'

function App() {
  const [height , setHeight] = useState("")
  const [weight , setWeight] = useState("")
  const [bMI , setBMI] = useState("")
  const [category , setCategory] = useState("")
  
  
function CalculateBMI() {
  if(height <=0|| weight <=0){
    alert("Enter Valid Input For Height & Weight")
  }
  
  else{
  const heightInMeters = height / 100;
  let bmivalue=(weight / (heightInMeters ** 2)).toFixed(2)
  setBMI(bmivalue)

  const BMIcategory = bmivalue

  if( BMIcategory < 18.5)
    {
  setCategory("Underweight")
   }
if( BMIcategory>=18.5 && BMIcategory <= 24.9 )
  {
  setCategory("Healthy")
 }
if(  BMIcategory >=25 &&  BMIcategory <=29.0 ){
 setCategory("Overweight")
}
if(  BMIcategory >=30)
  {
  setCategory("Obese")
 }
  }
  
}
function ReloadFunction(){
 setBMI("")
 setHeight("")
 setWeight("")
 setCategory("")
}


  return (
    <>
     <div className='Conatiner'>
      
        <input 
        type="number" 
        placeholder='Enter Height (cm)' 
        id="Height" 
        value={height}
        onChange={(e)=>setHeight(e.target.value)}
        /> 
        <input type="number" 
        placeholder='Enter Weight (kgs)' 
        id="Weight"
        value={weight}
        onChange={(e)=>setWeight(e.target.value)}
         /> 
        <br/>
        <button onClick={CalculateBMI} id="Submit"> Calculate </button>
        <br/>
        <button onClick={ReloadFunction} id="Reload"> Reload </button>

         <h3>BMI: {bMI} </h3>
         <h3> Category : {category}</h3>
      
     </div>
    </>
  )
}

export default App
