
import './App.css';
import Boton from "./componentes/boton";
import BotonResultado from './componentes/BotonResultado';
import Pantalla  from './componentes/pantalla';

import { useState } from 'react';
import { evaluate} from 'mathjs'; // Paquete que permite realizar operaciones matemáticas

function App() {

  const [valor, setInput] = useState ('');
  
  const agregarValor = val => {
    setInput(valor + val);
  };

  const calcularResultado =() =>{
    if (valor) {
      setInput(evaluate(valor));
    }else {
      alert('Por favor ingrese valores para realizar los cálculos')
    };
  };

  
  
  
  return (
    <div className="App">

             
      <div className="contenedor-calculadora">
        
        <Pantalla entrada = {valor} />

        <div className = "fila">
          <Boton manejarClic={agregarValor}>1</Boton>
          <Boton manejarClic={agregarValor}>2</Boton>
          <Boton manejarClic={agregarValor}>3</Boton>
          <Boton manejarClic={agregarValor}>+</Boton>
        </div>

        <div className = "fila">
          <Boton manejarClic={agregarValor}>4</Boton>
          <Boton manejarClic={agregarValor}>5</Boton>
          <Boton manejarClic={agregarValor}>6</Boton>
          <Boton manejarClic={agregarValor}>-</Boton>
        </div>
        
        <div className = "fila">
          <Boton manejarClic={agregarValor}>7</Boton>
          <Boton manejarClic={agregarValor}>8</Boton>
          <Boton manejarClic={agregarValor}>9</Boton>
          <Boton manejarClic={agregarValor}>*</Boton>
        </div>
        
        <div className = "fila">
          <Boton manejarClic={() => setInput('')}>C</Boton>
          <Boton manejarClic={agregarValor}>0</Boton>
          <Boton manejarClic={agregarValor}>.</Boton>
          <Boton manejarClic={agregarValor}>/</Boton>
        </div>
        
        <div className = "fila">
        <BotonResultado manejarClic={calcularResultado}>=</BotonResultado>
          
        </div>
      
      </div>

      

    </div>
  );
}

export default App;
