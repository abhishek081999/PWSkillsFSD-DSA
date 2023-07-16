import React, { useState } from 'react';

const APP = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-950">
      <div className="bg-black rounded p-4">
       <div className="grid grid-cols-4 gap-2 h-12">
         <input
          className="col-span-3 p-2 mb-4 text-right "
          type="text"
          value={result}
          readOnly
        />
        <button
            className="col-span-1 bg-gray-100 hover:bg-gray-400 text-black rounded  p-2 mb-4 text-right"
            name="clear"
            onClick={clear}
          >
            Clear
          </button>
        </div>
        <div className="col-span-1 grid grid-cols-3 gap-2">
          
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white rounded p-2"
            name="="
            onClick={calculate}
          >
            =
          </button>
          <button
            className="col-span-2 bg-orange-500 hover:bg-orange-700 text-white rounded p-2"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white rounded p-2"
            name="*"
            onClick={handleClick}
          >
            *
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white rounded p-2"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white rounded p-2"
            name="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          
          <button
            className="col-span-3 bg-gray-100 hover:bg-gray-300 text-black rounded p-2"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default APP;
