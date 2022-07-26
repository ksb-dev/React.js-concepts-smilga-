import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducers';
// reducer function

/*const Index = () => {

  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      setShowModal(true);

      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    }
    else {
      setShowModal(true);
    }
  }

  return (
    <>
      {showModal && <Modal />}

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">ADD</button>
      </form>

      {people.map((person) => {
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  );
};

export default Index;
*/

/*const reducer = (state, action) => {
  //console.log(state);

  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item Added'
    }
  }

  if (action.type === 'EMPTY_FIELD') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please Enter Something'
    }
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.payload);

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item Removed'
    }
  }
  //throw new Error("No matching action type");
}*/

const initialState = {
  people: data,
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {

  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }

      dispatch({ type: 'ADD_ITEM', payload: newItem });

      setName('');
    }
    else {
      dispatch({ type: 'EMPTY_FIELD' });
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">ADD</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}
            >
              REMOVE
            </button>
          </div>
        )
      })}
    </>
  );
};

export default Index;