import React from 'react';
import PropTypes from 'prop-types'
import {ContenedorResumen} from 'components/styled'
import {primerMayuscula} from 'helper'

const Resumen = ({datos}) => {

    //Extraer datos

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul> 
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del Auto: {primerMayuscula(year)}</li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;