import React, { useState, useMemo, useCallback, useEffect } from "react";


  


const Play = () => {
  
    const [callbackCount, setCallbackCount] = useState(0);
    const [memoCount, setMemoCount] = useState(0);
  
    const memoFunction = () => {
      console.log(memoCount, "memo called");
    };
    const callbackFunction = useCallback(() => {
      console.log(callbackCount, "callback called");
      return callbackCount;
    }, [callbackCount]);

    useMemo(memoFunction, [memoCount]);
  
    return (
      <>
        <h1>useCallback &amp; useMemo</h1>  
        <ChildComponent action={callbackFunction} />
        <button className="btn" onClick={() => setCallbackCount(callbackCount + 1)}>
          Change callback count
        </button>
        <button className="btn warn" onClick={() => setMemoCount(memoCount + 1)}>
          Change memo count
        </button>
      </>
    );
  };
  
  const ChildComponent = ({action}) => {
    const [value, setValue] = useState(0)
  
    useEffect(() => {
      let val = action()
      setValue(val)
    }, [action]) 
  
    return(
      <>
      Child : {value}
      </>
    )
  }

  export default Play;