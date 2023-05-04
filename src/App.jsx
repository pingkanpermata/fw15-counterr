import { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count >= 10) {
      alert("Error: Counter cannot exceed 10");
    } else {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count <= 1) {
      alert("Error: Counter cannot be less than 1");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="bg-red-400 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-pink-700 font-bold mb-4">Counter App</h1>
      <h4 className="text-xs text-rose-800 font-bold mb-4">By : Pingkan Permata Arianto</h4>
      <div className="flex items-center justify-center w-64 h-20 border border-stone-950 rounded-lg">
        <button
          className="w-10 h-10 bg-rose-700 hover:bg-rose-500 text-stone-950 rounded-full focus:outline-none"
          onClick={decrementCount}
        >
          -
        </button>
        <div className="w-12 text-center">{count}</div>
        <button
          className="w-10 h-10 bg-rose-700 hover:bg-rose-500 text-stone-950 rounded-full focus:outline-none"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
      {count > 10 || count < 1 ? (
        <p className="text-red-500 mt-4">Error: Count value must be between 1 and 10.</p>
      ) : null}
    </div>
  );
}

export default App;
