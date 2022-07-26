import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      const person = { id: new Date().getTime().toString(), firstName: name, userEmail: email }
      console.log(person);

      setPeople(() => {
        return [...people, person];
      });

      setName("");
      setEmail("");
    }
    else {
      console.log("Empty fields");
    }
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>

          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">ADD PERSON</button>

        </form>

        {
          people.map((person) => {
            const { id, firstName, userEmail } = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{userEmail}</p>
              </div>
            )
          })
        }
      </article>
    </>
  )
};

export default ControlledInputs;