import React from 'react'

const Child = (props) => {
      let age = 20;
      props.setage(age)
    
  return (
    <div className='px-20'>
      <div className="text-2xl">{props.myName}</div>
      <div className="text-2xl">{props.user.name}</div>
      <div className="text-2xl">{props.user.dept}</div>
      <div className="text-2xl">{props.user.school}</div>
      <div className="text-2xl">
            <button className="text bg-blue-600 hover:bg-blue-800 text-white px-10 py-2 mt-6 " onClick={props.logName}>Log Name</button>
      </div>
      
      
    </div>
  )
}

export default Child
