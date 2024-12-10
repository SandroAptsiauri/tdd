import React from "react";
import useCounter from "../hooks/useCounter";

const TestComponent: React.FC = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default TestComponent;
