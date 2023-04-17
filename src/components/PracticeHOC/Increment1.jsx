import React, { useState } from 'react'
import HOC from './HOC'
const Increment1 = ({handleIncrement,handleDecrement ,count}) => {
  return (
    <div className='text-center'>
       <h3>Count 1:-)  {count}</h3>
       <button className='btn btn-success mx-3' onClick={handleIncrement}>Increment1</button>
       <button className='btn btn-success' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
const UpdatedIncrement= HOC(Increment1)
export default UpdatedIncrement;
