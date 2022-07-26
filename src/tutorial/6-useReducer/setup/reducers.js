export const reducer = (state, action) => {
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
}
