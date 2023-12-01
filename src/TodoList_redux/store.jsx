import { createStore } from 'redux';

// Action types
const ADD_TODO = 'ADD_TODO';

// Action creators
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

// Reducer
const initialState = {
    todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text }],
            };
        default:
            return state;
    }
};

// Redux store
const store = createStore(reducer);

export default store;
