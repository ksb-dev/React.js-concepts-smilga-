import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Peter', age: 24, msg: 'Hi, i am learning React.js' });

  const handleClick = () => {
    if (person.name === 'Peter') {
      setPerson({ name: 'Kedar', age: 28, msg: 'Hi, i am full stack developer' });
    }
    else {
      setPerson({ name: 'Peter', age: 24, msg: 'Hi, i am learning React.js' });
    }
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.msg}</h3>
      <button className="btn" onClick={handleClick}>Change</button>
    </>
  );
};

export default UseStateObject;
