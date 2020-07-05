import React from 'react';
import styled from '@emotion/styled';
import {letraMyuscula} from '../helper'

const ContenedorResumen = styled.div`
    padding:1rem;
    text-align: center;
    background-color: #00838f;
    color:#fff;
    margin-top:1rem;
`;

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;

    if(marca.trim() ==='' || year.trim()==='' || plan.trim() ==='') return null;

    return (  
        <ContenedorResumen>
             <h2>Resumen de Cotizacion</h2>
                <ul>
                    <li>Marca: {letraMyuscula(marca)}</li>
                    <li>Año del Auto: {year} </li>
                    <li>Plan: {letraMyuscula(plan)}</li>
                </ul>
        </ContenedorResumen>
    );
}
 
export default Resumen;