import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';

const ToDo = () => {
    const [todolist, setTodolist] = useState([]);
    const addNewTodo = (e) => {
        if(!e.target.value.trim()) return;
        // console.log(e.code);
        if (e.code == "Enter") {
            console.log(e.target.value);
            setTodolist([...todolist, { text: e.target.value, completed: false }]);
            e.target.value = "";
            console.log(todolist);
        }
    };

    const completeTodo = (index) => {
        console.log(index);
        let temp = todolist;
        temp[index].completed = !temp[index].completed;
        setTodolist([...temp]);
    }

    const deleteTodo = (index) => {
        let temp = todolist;
        temp.splice(index, 1);
        setTodolist([...temp]);
    }
    return (
        <div className='bg-body-secondary vh-100'>
            <div className='container py-5'>
                <h1 className='text-center mt-5'>Todo App</h1>
                <div className='card'>
                    <div className='card-header'>
                        <input type="text" className='form-control' onKeyDown={addNewTodo} />
                    </div>
                    <div className='card-body'>
                        <ul className='list-group'>
                            <AnimatePresence mode='popLayout'>
                            {
                                todolist.map((todo, index) => {
                                    return (
                                        <motion.li
                                        layout
                                        key={todo.text}
                                        initial={{opacity: 0, x: 400}}
                                        animate={{opacity: 1, x:0}}
                                        exit={{opacity: 0, x: 200}}
                                        transition={{duration: 0.6, type: 'spring'}}
                                        className='list-group-item'
                                        >
                                        <input checked={todo.completed} type="checkbox" className='mx-2' />
                                        <span className = {todo.completed ? 'fw-bold text-success text-decoration-line-through' : 'fw-bold text-danger'}>{todo.text}</span>
                                        <br />
                                        <button className='btn btn-success my-2' onClick={() => {completeTodo(index)} }>Complete</button>
                                        <button className='btn btn-danger mx-2' onClick={() => {deleteTodo(index)}}>Delete</button>
                                        </motion.li>
                                    )
                                })
                            }
                            </AnimatePresence>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo;