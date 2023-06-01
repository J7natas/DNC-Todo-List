import React from 'react';
import { Header } from '../../header/header';
import './index.scss';
import { Link } from 'react-router-dom';

export const EditarTarefa = () => {
    return (
        <section className='Editar'>
            <Header />
            <h1 className='textPrincipal'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <div className='EditarTarefa'>
                <h1>Deseja editar esse item?</h1>
                <p>Colocar as descrições das tarefas aqui.</p>
                <div className='contButton'>
                    <Link to={'/'}>
                        <button className='bgBlue'>
                            Não
                        </button>
                    </Link>

                    <Link to={'/'}>
                    <button className='bgWhite'>
                        Sim
                    </button>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}