import React from "react";
import { imagenes } from "../../../Imagenes";
import { Link } from "react-router-dom";
import "./Contacto.css";

function Contacto({ contacto }) {
  const { id, nombre, thumbnail , mensajes, ...mensaje} = contacto;
  const imgSrc = imagenes[thumbnail];


    
    const lastMessage = mensajes[mensajes.length - 1];
    const horaUltimoMensasje = lastMessage?.hora;
    const statusUltimoMensasje = lastMessage?.estado;

  return (
    <Link className="contactos-link" to={`/mensajes/${id}`}>
    <div key={id} className="contacto-item">
      <img src={imgSrc} alt={nombre} />
      <div className="datos">
        <p className="nombre">
          <strong>{nombre}</strong>
        </p>
       <p className="preview"> <img 
          className="estado" 
          src={statusUltimoMensasje=== 'visto' ? imagenes.visto : statusUltimoMensasje === 'entregado' ? imagenes.entregado : imagenes.noEntregado} 
          alt={statusUltimoMensasje}
        />{lastMessage?.texto}</p>
      </div>
      <div className="hora">{horaUltimoMensasje}</div>
    </div>
    </Link>
  );
}

export default Contacto;
