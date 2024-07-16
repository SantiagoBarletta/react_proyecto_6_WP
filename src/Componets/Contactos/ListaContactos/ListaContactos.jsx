import React, { useState, useEffect } from "react";
import { Contacto } from "../../../Componets";
import "./ListaContactos.css";
import obtenerContactos from "../../../Fetching/contactos.fetching";

function ListaContactos({ search }) {
  const [contactos, setContactos] = useState([]);
  const [contactosFiltrados, setContactosFiltrados] = useState([]);

  useEffect(() => {
    obtenerContactos()
      .then((contactos) => {
        console.log("contactos", contactos);
        setContactos(contactos);
      })
      .catch((error) => {
        console.error("Error al obtener contactos:", error);
      });
  }, []);

  useEffect(() => {
    if (search) {
      setContactosFiltrados(
        contactos.filter((contacto) =>
          contacto.nombre?.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setContactosFiltrados(contactos);
    }
  }, [contactos, search]);

  return (
    <div className="contact-list">
      {contactosFiltrados.map((contacto) => (
        <Contacto key={contacto.id} contacto={contacto} />
      ))}
    </div>
  );
}

export default ListaContactos;
