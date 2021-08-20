import React, {useState} from 'react';
import TodoFrom from './todoForm';

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    return (
        <div>
           <h1>Whats the plan for today</h1>
           <TodoFrom onSubmit = {addTodo} /> 
        </div>
    )
}

export default TodoList
