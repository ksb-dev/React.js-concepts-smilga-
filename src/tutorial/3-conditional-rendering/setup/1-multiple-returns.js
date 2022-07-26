import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        }
        else {
          setLoading(false);
          setError(true);
        }
      })
      .then((resUser) => {
        const { login } = resUser;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error...</h1>
  }

  return (
    <>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  );
};

export default MultipleReturns;