
import React from 'react';
import { Header } from '../../header/header';
import './index.scss'
import { Link } from 'react-router-dom';

export const DeleteTarefa = () => {
    return (
        <>
             <Header />
            <section className='DeleteTarefa'>
                <h1 className='DeleteTarefa__textPrincipal'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
                <div className='DeleteTarefa__container'>
                    <h1>Deseja excluir esse item?</h1>
                    <p>Colocar as descrições das tarefas aqui.</p>
                    <div className='DeleteTarefa__contButon'>
                        <Link to={'/'}>
                            <button className='DeleteTarefa__bgBlue' type="submit">
                                Não
                            </button>
                        </Link>
                       
                        <Link to={'/'}>
                            <button className='DeleteTarefa__bgWhite' type="submit">
                                Sim
                            </button>
                        </Link>
                       
                    </div>
                </div>
        </section>
        </>
        
    )
}