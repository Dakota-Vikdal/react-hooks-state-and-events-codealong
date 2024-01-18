// import React, {useState} from "react";

// function Toggle() {
//   const [isOn, setIsOn] = useState(false)
  

//   function toggleButton() {
//     return(
//       setIsOn(isOn => !isOn)
//     )
//   }
  
//   const color = isOn ? "red" : "white"

//   return (
//     <button 
//       style = {{background: color}}
//       onClick={toggleButton}>{isOn ? "ON" : "OFF"}
//     </button>
//   )
// }

// export default Toggle;


















import React, {useState} from 'react';


function Toggle() {

  const [isOn, setIsOn] = useState(false)

  function handleClick() {
    setIsOn(!isOn)
  } 

  const color = isOn ? "red" : "blue"



  return (
    <button style={{ background: color}} onClick={handleClick}>{isOn ? "On" : "Off"}</button>
  )
}


export default Toggle