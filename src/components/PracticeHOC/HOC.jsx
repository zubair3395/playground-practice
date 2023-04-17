import React, { useState } from 'react'

const HOC = (WrappedComponent) => {
     const  UpdatedValues=()=>{
      const [count, setCount] = useState(0);
      const handleIncrement=()=>{
        setCount(count+1)
      }
      const handleDecrement=()=>{
        setCount(count-1)
      }
      return <WrappedComponent count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
    }
    return UpdatedValues;
}

export default HOC;
