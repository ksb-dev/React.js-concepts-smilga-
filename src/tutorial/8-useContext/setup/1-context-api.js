import React, { useState, useContext } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// Now we have access to two components
// 1. Provider
// 2. Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
};

const List = () => {
  const peopleData = useContext(PersonContext);

  // Or

  //const { people } = useContext(PersonContext);

  return (
    <>
      {peopleData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;