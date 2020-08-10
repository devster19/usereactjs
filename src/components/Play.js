import React,{ useState } from "react";

export default function Play() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button className="btn-add" onClick={() => setCount(count + 1)} >
          Click me
        </button>
      </div>
    );
  }