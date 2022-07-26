import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [user, setUser] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });

    console.log(name, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.firstName && user.email && user.age) {
      const newPerson = { ...user, id: new Date().getTime().toString() }

      setPeople([...people, newPerson]);

      setUser({ firstName: '', email: '', age: '' })
    }
  }

  return (
    <>
      <article>
        <form className="form">

          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              //value={name}
              value={user.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              //value={email}
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="age">Age :</label>
            <input
              type="text"
              id="age"
              name="age"
              //value={age}
              value={user.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>ADD PERSON</button>

        </form>

        {
          people.map((person) => {
            const { id, firstName, email, age } = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
                <p>{age}</p>
              </div>
            )
          })
        }
      </article>
    </>
  )
};

export default ControlledInputs;