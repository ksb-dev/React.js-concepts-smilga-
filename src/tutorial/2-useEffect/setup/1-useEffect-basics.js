import React, { useState, useEffect } from 'react';
// useEffect by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Inside useEffect');

    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hello World");
  }, []);

  console.log('Outsise useEffect');

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;