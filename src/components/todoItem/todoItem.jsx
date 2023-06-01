import lixeira from '../assets/lixeira.svg';
import "./index.scss";
import editar from '../assets/edita.svg';
import React from 'react';
import { DeleteTarefa } from '../pages/deleteTarefa/deleteTarefa';
import { Link } from 'react-router-dom';


export const TodoItem = ( {todo, deleteTodo} ) => {
    return (
      <ul className='item'>
        <div className='d-flex'>
        <li>{todo.tarefa}</li>
        <input type='checkbox'></input>
        </div>
        <div className='TodoItem__ContImg'>
            <Link to={'/EditarTarefa'}>
              <img className='edita' src={editar}></img>
            </Link>
          
            <Link to={'/deleteTarefa'}>
              <img className='delete'  onClick={ () => deleteTodo(todo.id)} src={lixeira}></img>
            </Link>
        </div>
      </ul>
    )
}