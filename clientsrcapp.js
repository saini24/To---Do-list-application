import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const fetchTodos = async () => {
        const response = await fetch('http://localhost:5000/api/todos');
        const data = await response.json();
        setTodos(data);
    };

    const addTodo = async () => {
        await fetch('http://localhost:5000/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: todoInput }),
        });
        setTodoInput('');
        fetchTodos();
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>To-Do List</h1>
            <input 
                value={todoInput} 
                onChange={(e) => setTodoInput(e.target.value)} 
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
