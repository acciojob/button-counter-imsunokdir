import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Button Clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default Counter;
