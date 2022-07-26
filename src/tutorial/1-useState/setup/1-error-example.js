import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';

  const handleClick = () => {
    title = 'Changed';
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="submit" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;