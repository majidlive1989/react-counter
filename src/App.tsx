import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-[64px]">Counter</h1>
      </div>
      <div>
        <span
          style={{
            color: count > 0 ? "green" : count === 0 ? "black" : "red",
          }}
          className="text-[96px] font-semibold"
          id="countvalue text-black text-16"
        >
          {count}
        </span>
        <div className="flex flex-row gap-6">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            id="decrease"
            className="border-2 border-black px-3 rounded-md hover:bg-black hover:text-white"
          >
            DECREASE
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
            id="reset"
            className="border-2 border-black px-3 rounded-md hover:bg-[#222] hover:text-white"
          >
            RESET
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            id="increase"
            className="border-2 border-[#222] px-3 shadow-2xl shadow-[#0003] rounded-md  hover:bg-[#222] hover:text-white"
          >
            INCREASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
