import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="font-bold text-[64px]">Counter</h1>
        </div>
        <div>
          <span
            className="text-[96px] font-semibold"
            id="countalue text-black text-16"
          >
            0
          </span>
          <div className="flex flex-row gap-6">
            <button
              id="decrease"
              className="border-2 border-black px-3 rounded-md"
            >
              DECREASE
            </button>
            <button
              id="reset"
              className="border-2 border-black px-3 rounded-md"
            >
              RESET
            </button>
            <button
              id="increase"
              className="border-2 border-black px-3 rounded-md"
            >
              INCREASE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
