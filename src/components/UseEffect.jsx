import React, { useEffect, useLayoutEffect, useState } from "react";

const UseEffect = () => {
  const [text, setText] = useState("Text before the useEffect");
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect is caling")
  },[]);
  useLayoutEffect(() => {
    setText("Text in useEffect Hooks");
  }, []);
  const handleCount=()=>{
    setCount(count+1);
  }
  // The difference between useEffect and UseLayoutEffect is that useEffect called after the 
  //component render but useLayoutEffect is call first then render the components
  return (
    <>
      <h1>UseEffect Hooks</h1>
      <h3> {text} </h3>
      <div className="row">
        <div className="col"><strong>count {count}</strong></div>
        <div className="col-md">
            
      <button className="btn btn-primary" onClick={handleCount}>Count</button>
        </div>
      </div>
   
    </>
  );
};

export default UseEffect;
