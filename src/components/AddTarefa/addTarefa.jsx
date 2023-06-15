import './index.scss';
import adiciona from '../assets/adiciona.svg'
import { useState } from 'react';
import { Lista } from '../Lista/lista';

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
            <form>
                <div className='AddTarefa__FormTitle'>
                    <p>Tarefa</p>
                    <p>Status</p>
                    <p>Opções</p>
                </div>
                <div className='AddTarefa__NovaTarefa'>
                   <input id='adicionaTarefa' onChange={ (e) => setTarefa(e.target.value)} type="text" placeholder='Adiciona Nova Tarefa'></input>
                   <div className='Cont-img'>
                     <img onClick={ () =>  todoCreat(tarefa) } src={adiciona}></img>
                   </div>
                </div>
            </form>
        </section>
    )
}