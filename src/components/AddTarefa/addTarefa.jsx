import './index.scss';
import adiciona from '../assets/adiciona.svg'
import { useState } from 'react';

export const AddTarefa = ( {addTodo} ) => {

    const [tarefa, setTarefa] = useState(null);
    const [id, setId] = useState(1);

    const todoCreat = (tarefa) => {
        const todoObj = { tarefa: tarefa, id: id }
        setId( id + 1);
        addTodo(todoObj);
        document.getElementById('adicionaTarefa').value = null;
    }
   
    return (
        <section className='AddTarefa'>
            <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <form>
                <div className='AddTarefa__FormTitle'>
                    <h4>Tarefa</h4>
                    <h4>Status</h4>
                    <h4>Opções</h4>
                </div>
                <div className='AddTarefa__NovaTarefa'>
                   <input id='adicionaTarefa' onChange={ (e) => setTarefa(e.target.value)} type="text" placeholder='Nova Tarefa...'></input>
                   <img onClick={ () =>  todoCreat(tarefa) } src={adiciona}></img>
                </div>
            </form>
        </section>
    )
}