import React, { useState, useEffect } from "react";
import './ChatHeader.css';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CameraVideoFill, TelephoneFill, ThreeDotsVertical } from 'react-bootstrap-icons';
import { imagenes } from "../../../Imagenes";
import obtenerContactos from '../../../Fetching/contactos.fetching'; 
import FormBusquedaMensajes from "../FormBusquedamensajes/FormBusquedaMensajes";

function ChatHeader({ search, onSearchChange }) {
  const { contactoID } = useParams();
  const [contacto, setContacto] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    obtenerContactos()
      .then(data => {
        const contactoEncontrado = data.find(contacto => contacto.id === parseInt(contactoID));
        if (contactoEncontrado) {
          setContacto(contactoEncontrado);
        }
      });
  }, [contactoID]);

  const imgSrc = imagenes[contacto.thumbnail];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);  
  };

  return (
    <div className={`chat-header ${searchVisible ? 'search-visible' : ''}`}>
       {searchVisible && (
        <FormBusquedaMensajes
          search={search}
          onSearchChange={onSearchChange}
        />
      )}
      <Link to="/contactos">
        <ArrowLeft className="arrow" />
      </Link>
      <Link to={`/contactoInfo/${contacto.id}`} className="contacto">
        <img src={imgSrc} alt={contacto.nombre} />
        <div className="contact-info">
          <div className="contact-name">{contacto.nombre}</div>
          <div className="contact-status">Online</div>
        </div>
      </Link>
      <div className="iconos">
        <CameraVideoFill className="icono"/>
        <TelephoneFill className="icono"/>
        <ThreeDotsVertical onClick={toggleMenu} />
        {menuVisible && (
          <div className="context-menu">
            <Link to={`/contactoInfo/${contacto.id}`} className="link"><div className="menu-item">Ver Contacto</div></Link>
            <Link onClick={() => { handleSearchClick(); toggleMenu(); }} className="link"><div className="menu-item">Buscar</div></Link>
            <Link to='#' className="link"><div className="menu-item">Silenciar</div></Link>
            <Link to='#'  className="link"><div className="menu-item">Mensajes temporales</div></Link>
            <Link to='#' className="link"><div className="menu-item">Más opciones</div></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
