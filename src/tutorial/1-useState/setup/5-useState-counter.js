import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [alert, setAlert] = useState(false);

  const handleDecrease = () => {
    if (value <= 0) {
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 2000);

      return;
    }
    else {
      setValue(value - 1);
    }
  }

  const handleReset = () => {
    setValue(0);
  }

  const handleIncrease = () => {
    setValue(value + 1);
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        {alert ? <h4>You can't decrease below 0</h4> : ''}
        <h1>{value}</h1>
        <button className='btn' onClick={handleDecrease}>Decrease</button>
        <button className='btn' onClick={handleReset}>Reset</button>
        <button className='btn' onClick={handleIncrease}>Increase</button>
      </section>
    </>
  )
};

export default UseStateCounter;