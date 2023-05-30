import React from "react";
import "../hojas-de-estilo/pantalla.css"


// En este caso se utiliza una función flecha para la creación de un componente.

const Pantalla = ({ entrada }) => (
    
    <div className = "entrada" >
        { entrada }
    </div>

);

export default Pantalla;