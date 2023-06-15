import React from 'react';
import { Header } from '../../header/header';
import './index.scss';
import { Link } from 'react-router-dom';

export const EditarTarefa = () => {
    return (
        <section className='Editar'>
            <Header />
            <div className='EditarTarefa'>
                <h1>Deseja editar esse item?</h1>
                <div className='contButton'>
                    <Link to={'/'}>
                        <button >
                            Não
                        </button>
                    </Link>

                    <Link to={'/'}>
                    <button >
                        Sim
                    </button>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}