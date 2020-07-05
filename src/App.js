import React , { useState } from 'react';
import Header from './componentes/Header';
import styled from '@emotion/styled';
import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spiner';



const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color:#fff;
  padding:3rem;
`;

function App() {

  const [resumen, setresumen] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });
  const [loading, setloading] = useState(false)

  const {cotizacion, datos } = resumen;
  


  return (
    <Contenedor>
      <Header
          titulo = "Cotizador de Seguros"
      />
      <ContenedorFormulario>
        <Formulario
          setresumen = {setresumen}
          setloading = {setloading}
        />

        {loading  ?  <Spinner/> : null}
         
        <Resumen 
          datos={datos}
       />

      {!loading ? 
        <Resultado 
        cotizacion = { cotizacion }
      />
      : null
      }
     
         
        
   

       
      </ContenedorFormulario>
    </Contenedor>
    
  );
}

export default App;
