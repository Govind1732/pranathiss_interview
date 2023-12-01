import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './store';

const TodoList = ({ todos, dispatchAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            dispatchAddTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddTodo: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
