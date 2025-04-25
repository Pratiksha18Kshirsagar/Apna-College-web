import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");


    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let addTodo = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("")
    }

    let deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id != id))
    }

    let uppercaseAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((Todo) => {
                return { ...Todo, task: Todo.task.toUpperCase() }
            })
        })
    }

    let uppercaseOne = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((Todo) => {
                if (Todo.id === id) {
                    return { ...Todo, task: Todo.task.toUpperCase() }
                }
                else {
                    return { ...Todo };
                }
            })
        })
    }

    let AlltaskDone = () => {
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                if (!todo.isDone) {
                    return { ...todo, isDone: true }
                } else {
                    return { ...todo, isDone: false };
                }
            })
        })
    }

    let markAsDone = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                if (todo.id === id) {
                    if (!todo.isDone) {
                        return { ...todo, isDone: true }
                    }
                    else {
                        return { ...todo, isDone: false }
                    }
                }else{
                    return {...todo}
                }
            })
        })
    }

    return (
        <>
            <input type="text" placeholder="Write your task!" value={newTodo} onChange={updateTodo} />
            <br /><br />
            <button onClick={addTodo}>Add Task</button>
            <hr />
            <h2>Task Todo</h2>
            {console.log(todos.length)}
            {todos.length > 0 && <ul>{todos.map((todo) => {
                return <li key={todo.id}>{todo.isDone ? <span style={{ textDecorationLine: 'line-through' }}>{todo.task} </span> : <span >{todo.task} </span>} <button onClick={() => deleteTask(todo.id)} >Delete</button><button onClick={() => uppercaseOne(todo.id)} >One Uppercase</button><button onClick={() => markAsDone(todo.id)}>Mark-as-done</button></li>
            })}</ul>}
            <button onClick={uppercaseAll}>Upper-case</button>
            <button onClick={AlltaskDone}>All done</button>
        </>
    )
}