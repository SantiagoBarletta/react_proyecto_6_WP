import React, { useState } from "react";
import './NuevoMensajeForm.css';
import { SendFill } from "react-bootstrap-icons";

function NuevoMensajeForm({ handleSubmitNuevoMsj }) {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitNuevoMsj(mensaje);
    setMensaje("");  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
      <input type="text" placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} 
        />
        <button type="submit"><SendFill /></button>
      </div>
    </form>
  );
}

export default NuevoMensajeForm;
