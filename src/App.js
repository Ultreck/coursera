import './App.css';
import React, { useState } from 'react';
// import Child from './components/Child';
// import HeroSection from './components/HeroSection';
import Home from './pages/Home';
// import Counter from './components/Counter';
// import Loops from './components/Loops';
// import Navbar from './components/Navbar';

function App() {
//   const [userArr, setuserArr] = useState(
//     [
//       {
//         name:"Emmanuel",
//         dept: "Web",
//         school:'SQI'
//       },
//       {
//         name:"Oluwatayese",
//         dept: "Data Science",
//         school:'SQI'
//       },
//       {
//         name:"John",
//         dept: "Media",
//         school:'SQI'
//       },
//       {
//         name:"Testimony",
//         dept: "Native",
//         school:'SQI'
//       },
//       {
//         name:"Dammy",
//         dept: "UI/UX",
//         school:'SQI'
//       },
//       {
//         name:"Job",
//         dept: "Web",
//         school:'SQI'
//       },
//       {
//         name:"Kola",
//         dept: "Python",
//         school:'SQI'
//       },
//       {
//         name:"Toyin",
//         dept: "Digital Literacy",
//         school:'SQI'
//       },
//       {
//         name:"Oluwaseun",
//         dept: "Machine Learning",
//         school:'SQI'
//       },
//       {
//         name:"William Olaoluwa",
//         dept: "Artificial Intelligence",
//         school:'SQI'
//       },
// ]
//   )
//   const [age, setage] = useState()
//  let myName = "Emmanuel Oluwatayese";
//  const user = {
//   name:"Emmanuel",
//   dept: "Web",
//   school:'SQI'
//  }
//  const logName = () =>{
//   console.log(myName);
// }
//  const inputValue = (e) =>{
//   console.log(e.target.value);
//  }
//  const inputBlur = (e) =>{
//   console.log(e.target.value);
//  }
  return (
    <> 
    {/* <Navbar/> */}
    {/* <Loops userArr={userArr} setuserArr={setuserArr} /> */}
    {/* <Counter/>
    <input onChange={inputValue} onBlur={inputBlur} type={'text'} className="text border mx-40 mt-20 w-1/4 py-2 px-5 focus:border-blue-300 transition-all outline-none" placeholder='Search Values... ' />
    <div className="text-2xl px-20">{age}</div>
    <Child myName={myName} user={user} setage={setage} logName={logName}/> */}
    {/* <HeroSection/> */}
    <Home/>
    </>
  );
}

export default App;
