import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Text');

  const handleClick = () => {
    if (text === 'Text') {
      setText("Text Changed");
    }
    else {
      setText("Text");
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="submit" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
