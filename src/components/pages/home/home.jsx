import React from 'react';
import { Header } from "../../header/header";
import './index.scss'
import { Lista } from '../../Lista/lista';
import { AddTarefa } from '../../AddTarefa/addTarefa';

export const Home = () => {
        return (
           <div className='Home'>
             <Header />
             <Lista />
           </div>
        );
}