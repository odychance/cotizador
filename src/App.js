import React, {useState} from "react";
import Header from './components/Header'
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import {Contenedor, ContenedorFormulario} from 'styled'

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //Extraer datos
  const { datos, cotizacion } = resumen

  //Asignar el spinner
  const [cargando, setCargando] = useState(false)

  return(
    <Contenedor>
        <Header 
          titulo='Cotizador de seguros'
        />

        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
            setCargando={setCargando}
          />

          { cargando ? <Spinner /> : null}

            <Resumen
              datos={datos }
            />

          { !cargando ? 
            <Resultado 
              cotizacion={cotizacion}
            />
            : null 
        }
        </ContenedorFormulario>
    </Contenedor>
    )
}

export default App;
