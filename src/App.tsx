import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-[64px]">Counter</h1>
      </div>
      <div>
        <span
          className="text-[96px] font-semibold"
          id="countalue text-black text-16"
        >
          {count}
        </span>
        <div className="flex flex-row gap-6">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            id="decrease"
            className="border-2 border-black px-3 rounded-md"
          >
            DECREASE
          </button>
          <button
            onClick={() => {
              setCount((count = 0));
            }}
            id="reset"
            className="border-2 border-black px-3 rounded-md"
          >
            RESET
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            id="increase"
            className="border-2 border-black px-3 rounded-md"
          >
            INCREASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
