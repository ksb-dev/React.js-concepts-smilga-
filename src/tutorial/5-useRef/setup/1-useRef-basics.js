import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  useEffect(() => {
    console.log(refContainer.current);
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
    console.log(divContainer.current);
    refContainer.current.value = '';
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>

      <div ref={divContainer}>Hello World!</div>
    </>
  )
};

export default UseRefBasics;