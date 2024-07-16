import React  from 'react';
import './FormBusquedaContactos.css';

function FormBusquedaContactos({ search, onSearchChange }) {
  const handleChange = (e) => {
    if (typeof onSearchChange === 'function') {
      onSearchChange(e.target.value);
    } else {
      console.error('onSearchChange no es una función');
    }
  }

  return (
    <>

    <form className="form-busqueda">
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
      />
    </form>
    </>
  );
}

export default FormBusquedaContactos;
