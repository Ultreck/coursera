import React, { useState } from 'react';


const Counter = () => {
      const [counterC, setcounterC] = useState(0)
      const [users, setusers] = useState({
            name:"Oluwatayese",
            school:"SQI"
      })
      let counter = 0;

      const increamentFunct = () =>{
            setcounterC(counterC + 1) 
      }
      const dereamentFunct = () =>{
            setcounterC(counterC - 1) 
      }
      const resetFunct = () =>{
            setcounterC(0)
            
      }
      const changeName = () =>{
            setusers({...users, name:'Tunmise'})
      }
  return (
    <div>
      <span className="text-xl mx-5 mt-20 font-mono font-bold">{users.name}</span>
      <span className="text-xl mt-20 font-mono font-bold">{users.school}</span>
       <button className="text-xl font-semibold bg-lime-600 hover:bg-blue-800 text-white px-10 py-2 mt-10 mx-32" onClick={changeName}>Change Name</button>
      <h1 className="text-6xl mx-40 mt-20 font-mono font-bold">{counterC}</h1>
       <button className="text-xl font-semibold bg-green-600 hover:bg-blue-800 text-white px-10 py-2 mt-6  mx-5" onClick={increamentFunct}>Increament</button>
       <button className="text-xl font-semibold bg-blue-600 hover:bg-blue-800 text-white px-10 py-2 mt-6 " onClick={dereamentFunct}>Decreament</button><br />
       <button className="text-xl font-semibold bg-red-600 hover:bg-blue-800 text-white px-10 py-2 mt-6 mx-32" onClick={resetFunct}>Reset</button>
    </div>
  )
}

export default Counter
