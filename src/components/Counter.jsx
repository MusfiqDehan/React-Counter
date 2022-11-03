import { useState } from "react";

const btnStyle = {
  padding: "10px 30px",
  backgroundColor: "green",
  color: "white",
  margin: "10px 0",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  fontSize: "30px",
  boxShadow: "0 0 5px 5px gray"
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        +
      </button>

      <h1>{count}</h1>

      <button style={btnStyle} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
