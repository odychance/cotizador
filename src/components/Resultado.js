import React from 'react'
import PropTypes from 'prop-types'
import { Mensaje, TextoCotizacion, ResultadoCotizacion } from 'components/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Resultado = ({cotizacion}) => {


  return (

    (cotizacion === 0 )
        ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
        
        :
            (
                <ResultadoCotizacion>
                    <TransitionGroup
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{enter: 1000, exit: 1000}}
                        >
                            <TextoCotizacion>El total es: $ <span>{cotizacion}</span></TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>

            )

    )
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado