import React from 'react';
import { Header } from "../../header/header";
import { Lista } from '../../Lista/lista';
import { AddTarefa } from '../../AddTarefa/addTarefa';

export const Home = () => {
        return (
           <div>
             <Header />
             <Lista />
           </div>
        );
}