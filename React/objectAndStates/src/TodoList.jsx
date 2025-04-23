import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{}]);
    let [newTodo, setNewTodo] = useState("");

    let updateTodo = (event) => {
        setNewTodo(event.target.value);     
    }

    let addTodo = () => {
        setTodos((prevTodo) => {
            return [...prevTodo,{task: newTodo , id:uuidv4()}];
        });
        setNewTodo("")
    }

    return (
        <>
            <input type="text" placeholder="Write your task!" value={newTodo} onChange={updateTodo} />
            <br /><br />
            <button onClick={addTodo}>Add Task</button>
            <hr />
            <h2>Task Todo</h2>
            <ul>{todos.map((todo) => {
                return <li key={todo.id}>{todo.task}</li>
            })}</ul>
        </>
    )
}