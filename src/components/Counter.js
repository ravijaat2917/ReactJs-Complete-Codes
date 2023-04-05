import { useState } from "react";

export const Counter = () => {
  const [number, setNumber] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    setTimeout(() => {
      setNumber((number) => number + 1);
    }, 2000);
    console.log(number + 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
};
