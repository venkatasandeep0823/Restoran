import React, { useEffect, useState } from 'react'

function Todo() {


    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('')


    // fetching app call using useEffect

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((data) => data.json())
            .then((res) => setTodos(res.todos))
    }, []);


    function addTodoInput() {
        let newTodos = [...todos, {
            "id": Date.now(),
            "todo": input,
            "completed": false
        }];
        setTodos(newTodos);
        setInput('')
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // const onToggle = (id) => {
    //     let toggleIds = todos.map((item) => {
    //         item.id === id ? { ...item, completed: !item.completed } : item
    //     });
    //     setTodos(toggleIds)
    // }

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title mb-4 mt-4">
                            <h3>Todo List Application (No Redux)</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="input-group form-group mb-4">
                            <input type="text" className='form-control' value={input} onChange={(e) => {
                                let todotext = e.target.value
                                setInput(todotext)
                            }} />
                            <button className='btn btn-primary' onClick={addTodoInput}>Add Todo</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="listblock">
                            <ul className='list-group'>
                                {
                                    todos.map((item) => (
                                        <li key={item.id} className='list-group-item d-flex justify-content-evenly align-items-center mb-3 '>
                                            <input type="checkbox" checked={item.completed} onChange={() => { toggleTodo(item.id) }} />
                                            <span>{item.todo}</span>
                                            <button className='btn btn-danger' onClick={() => onRemove(item.id)}>Delete</button>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo