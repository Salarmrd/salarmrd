import React, { useEffect, useState } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = duration / end;
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Counter;
