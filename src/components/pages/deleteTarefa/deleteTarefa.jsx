
import React from 'react';
import { Header } from '../../header/header';
import './index.scss'
import { Link } from 'react-router-dom';

export const DeleteTarefa = () => {
    return (
        <>
             <Header />
            <section className='DeleteTarefa'>
                <div className='DeleteTarefa__container'>
                    <h1>Deseja excluir esse item?</h1>
                    <div className='DeleteTarefa__contButon'>
                        <Link to={'/'}>
                            <button>
                                Não
                            </button>
                        </Link>
                       
                        <Link to={'/'}>
                            <button>
                                Sim
                            </button>
                        </Link>
                       
                    </div>
                </div>
        </section>
        </>
        
    )
}