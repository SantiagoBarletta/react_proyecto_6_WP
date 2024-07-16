import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Mensaje } from "../Mensaje/Mensaje";
import "./Listamensajes.css";

function ListaMensajes({ mensaje, search }) {
  const { contactoID } = useParams();
  const [mensajesIniciales, setMensajesIniciales] = useState([]);
  const [contacto, setContacto] = useState();

  // Carga mensajes almacenados en el JSON
  useEffect(() => {
    fetch("/mensajeria.json")
      .then((response) => response.json())
      .then((data) => {
        const contactoEncontrado = data.find(
          (contacto) => contacto.id === parseInt(contactoID)
        );
        if (contactoEncontrado) {
          setContacto(contactoEncontrado);
          setMensajesIniciales(contactoEncontrado.mensajes);
        }
      });
  }, [contactoID]);

  // Agrega el mensaje nuevo
  useEffect(() => {
    if (mensaje) {
      setMensajesIniciales((mensajesPrevios) => [...mensajesPrevios, mensaje]);
    }
  }, [mensaje]);

  // Resaltador de busqueda
  const resaltarBusqueda = (texto, busqueda) => {
    if (!busqueda) return texto;

    const letras = texto.split(new RegExp(`(${busqueda})`, 'gi'));
    return letras.map((letra, index) =>
      letra.toLowerCase() === busqueda.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{letra}</span>
      ) : (
        letra
      )
    );
  };

  return (
    <div className="mensaje-container">
      {mensajesIniciales.map((msj, index) => (
        <Mensaje
          mensaje={{ ...msj, texto: resaltarBusqueda(msj.texto, search) }}
          key={`${contactoID}.${msj.id}.${index}`}
          contacto={contacto}
        />
      ))}
    </div>
  );
}

export default ListaMensajes;
