import React, { useState, useEffect } from 'react';

// cleanup function

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener('resize', checkSize);

    return () => {
      console.log("Clean Up");
      window.removeEventListener('resize', checkSize);
    }
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  )
};

export default UseEffectCleanup;
