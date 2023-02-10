import React, { useState, useEffect } from 'react';
const Buttons = (props) => {
  
  return (
    <div>
        <button onClick={() => props.functs(props.id)} className={props.styles}>{props.name}</button>
    </div>
  )
}

export default Buttons
