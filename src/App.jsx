import React, { useState } from 'react';
import './App.css';
import Card from './Card.jsx';

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div className="fixed top-0 w-full flex justify-center mt-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-800"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black"
          >
            Black
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400"
          >
            Yellow
          </button>
          <button
  onClick={() => setColor("white")}
  className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white"
>
  White
</button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600"
          >
            Green
          </button>
        </div>
      </div>

      <div className="h-screen w-full duration-200 flex items-center justify-center" style={{ backgroundColor: color }}>
        <h1 className="text-center text-4xl font-bold text-white">hello, This is a Background Changer.</h1>
      </div>

      {/* Card component */}
      <Card username="Shree" place="Thapar University, Patiala" />
    </>
  );
}

export default App;

