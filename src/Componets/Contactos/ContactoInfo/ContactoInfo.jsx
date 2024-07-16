import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { imagenes } from "../../../Imagenes";
import { ArrowLeft, ThreeDotsVertical, } from 'react-bootstrap-icons';
import { MdOutlinePhone, MdOutlineVideocam, MdSearch, MdLock, MdOutlineTimelapse  } from "react-icons/md";
import obtenerContactos from '../../../Fetching/contactos.fetching';
import './ContactoInfo.css';
import { FaRegBell, FaRegBookmark  } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import { PiLockLaminatedFill } from "react-icons/pi";

const ContactoInfo = () => {
  const { contactoID } = useParams([]);
  const [contacto, setContacto] = useState([]);

  useEffect(() => {
    obtenerContactos()
      .then(data => {
        const contactoEncontrado = data.find(contacto => contacto.id === parseInt(contactoID));
        if (contactoEncontrado) {
          setContacto(contactoEncontrado);
        }
      })
  }, [contactoID]);

  const imgSrc = imagenes[contacto.thumbnail];

  return (
    <div className="infoContainer">
      <div className="infoHeader">
        <Link to={`/mensajes/${contacto.id}`}>
          <ArrowLeft className="arrow" />
        </Link>
        <div className="bioInfo">
          <img src={imgSrc} alt={contacto.nombre} />
          <div className="contact-info">
            <div className="contact-name">{contacto.nombre}</div>
            <div className="contact-nro">{contacto.nro}</div>
          </div>

        </div>
        <ThreeDotsVertical className="iconos" />
      </div>
      <div className="opciones">
      <div className="icon-container"><MdOutlinePhone className="iconos" /><p>Llamar</p></div>
      <div className="icon-container"><MdOutlineVideocam className="iconos" /><p>Video</p></div>
      <div className="icon-container"><MdSearch className="iconos" /><p>Buscar</p></div>
      </div>
      <div className="decorado">
        <div className="avanzada"><FaRegBell className="iconos" /><p>Notificaciones</p></div>
        <div className="avanzada"><AiOutlinePicture className="iconos" /><p>Visibilidad de archivos multimedia<span className="sub">Desactivada</span></p></div>
        <div className="avanzada"><FaRegBookmark className="iconos" /><p>Mensajes conservados</p></div>
        <div className="avanzada"><MdLock className="iconos"/><p>Cifrado<span>Los mensajes y las llamadas están cifrados de extremo a extremo. Toca para verificarlo</span></p></div>
        <div className="avanzada"><MdOutlineTimelapse className="iconos" /><p>Mensajes temporales <span>90 dias</span></p></div>
        <div className="avanzada"><PiLockLaminatedFill className="iconos" /><p>Restringir chat<span>Restringe y oculta este chat en este dispositivo</span></p> </div>

      </div>
    </div>
  );
}

export default ContactoInfo