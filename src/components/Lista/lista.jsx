import React, { useState } from 'react';
import "./index.scss";
import { AddTarefa } from '../AddTarefa/addTarefa';
import { TodoItem } from '../todoItem/todoItem';


export const Lista = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos( [...todos, todo] )
    }

    const deleteTodo = (id) => {
        var filterTodo = todos.filter((todo) => todo.id !== id);
        setTodos(filterTodo);
    }

        return (
            <div>
                <AddTarefa addTodo={addTodo} />
                <form className='Lista'>
                    {todos.map( (todo, index) => (
                    <TodoItem key={index} todo={todo} deleteTodo={deleteTodo}/>
                    ))}
                </form>
            </div>
            
        )
}