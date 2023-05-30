import React from "react";
import "../hojas-de-estilo/botonResultado.css"

const BotonResultado = (props) => (

 <div className="boton-resultado" 
      onClick={props.manejarClic}>
      {props.children}
 </div>
);





export default BotonResultado;