import React from "react";
import "../hojas-de-estilo/boton.css";
import "../App.css"

// isNaN: funcion que permite determinar si un valor no es un numero.
function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <button 
            className= { `boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </button>

    );

};
export default Boton;