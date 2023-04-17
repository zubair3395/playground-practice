import React from 'react'
import HOC from './HOC'
const Increment2 = ({handleIncrement,handleDecrement ,count}) => {

  return (
    <div className='text-center'>
       <h3>Count 2:-)  {count}</h3>
       <button className='btn btn-success mx-2' onClick={handleIncrement}>Increment</button>
       <button className='btn btn-success' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
const UpdatedIncrement2= HOC(Increment2);
export default UpdatedIncrement2;
