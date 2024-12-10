import { useState } from 'react';

const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);

  return { count, increment };
};

export default useCounter;
