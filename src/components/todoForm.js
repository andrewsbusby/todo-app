import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.eidt ? props.edit.value : '');

const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input,

    })
    setInput('')
}

    return (
        <div>
            <form className='todo-form' onSubmit = {handleSubmit}>

                <input type='text' 
                placeholder='Add a todo' 
                value={input} 
                name='text'
                 className='todo-input'
                 onChange = {handleChange}
                 ref={inputRef} />
                 <button className='todo-btn'>Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
