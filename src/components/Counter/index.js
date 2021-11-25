import React, { useState } from "react";
import "./index.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const getModifier = () => {
    if (counter > 0) return "counter__title--increment";
    if (counter < 0) return "counter__title--decrement";
    return "";
  };
  return (
    <div className="counter">
      <h1 className={`counter__title ${getModifier()}`}>{counter}</h1>
      <section className="buttons">
        <button
          onClick={() => setCounter(counter + 1)}
          className="button button--increment"
        >
          increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="button button--decrement"
        >
          decrement
        </button>
      </section>
    </div>
  );
}

export default Counter;
