import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [state, setState] = useState({
    count: 0,
    history: [],
  });

  const updateCount = (newCount) => {
    setState((prevState) => ({
      ...prevState,
      count: newCount,
      history: [prevState.count, ...prevState.history],
    }));
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p className="count">{state.count}</p>
      <div className="buttons">
        <button onClick={() => updateCount(state.count + 1)}>+1</button>
        <button onClick={() => updateCount(state.count - 1)}>-1</button>
        <button onClick={() => updateCount(0)}>Reset</button>
      </div>

      <h3>History</h3>
      <ul className="history">
        {state.history.length === 0 ? (
          <p>No history yet</p>
        ) : (
          state.history.map((value, index) => (
            <li key={index} onClick={() => updateCount(value)}>
              {value}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Counter;
