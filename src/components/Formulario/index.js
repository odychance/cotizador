import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'
import { años, marcas } from './constatns';
import { Error, Campo, Label, InputRadio, Boton } from './styled';
import { CustomField } from 'components/Campo';
import { obtenerDiferenciaYear, calcularMarca, calcularPlan} from 'helper';

const Formulario = ({guardarResumen, setCargando}) => {    

    const [ datos, GuardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    }) 

    const [error, setError] = useState(false )

    //Extraer los valores

    const {marca, year, plan} = datos

    //Leer los datos del formulario y colocarlos en el state

    const obtenerDatos = e => {
        GuardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario preciona Submit

    const cotizarSeguro = e => {
        e.preventDefault()

        if( marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return;
        } 

        //Iniciamos con una base de 2000
        
        let resultado = 2000 

        //Obtener la diferencia de los años

        const diferencia = obtenerDiferenciaYear(year);

        //por cada año hay que restar el 3%

        resultado -= ((diferencia * 3) * resultado) / 100;

        //Americano 15%
        //Asiatico 5%
        //Europeo 30%

        resultado = calcularMarca(marca) * resultado;

        console.log(resultado)

        //Basico aumenta 20%
        //Completo 50%

        const incrementoPlan = calcularPlan(plan)

        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        setCargando(true)

        setTimeout(() => {
            //Elimina el spinner
            setCargando(false)

            //Pasa info al proyecto
            guardarResumen({
                datos,
                cotizacion: Number(resultado)
            })    

        }, 1500);


        setError(false)
    }

    

    


  return (
    <form
        onSubmit={cotizarSeguro}
    >

        { error ? <Error>Todos los campos son obligatorios </Error> : null}

        <CustomField
            name="marca"
            title="Marca"
            options={marcas}
            onChange={obtenerDatos}
            marca={marca}
        />
        <CustomField
            name="year"
            title="Año"
            options={años}
            onChange={obtenerDatos}
            year={year}
        />



        {/* <Campo>
            <Label>Marca</Label>
            <Select>
                <option value="">--Seleccione--</option>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Año</Label>
            <Select>
                <option value="">--Seleccione--</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
            </Select>
        </Campo> */}
        
        <Campo>
            <Label>Plan</Label>
            <InputRadio 
                type="radio"
                name="plan"
                value="basico"
                checked={plan === "basico"}
                onChange={obtenerDatos}
                /> Básico
            <InputRadio 
                type="radio"
                name="plan"
                value="completo"
                checked={plan === "completo"}
                onChange={obtenerDatos}
            /> Completo
        </Campo>

        <Boton type='submit'>Cotizar presupuesto</Boton>
    </form>

    )
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}

export default Formulario