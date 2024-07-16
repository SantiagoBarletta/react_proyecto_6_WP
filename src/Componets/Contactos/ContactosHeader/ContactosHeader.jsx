import React, { useState } from 'react';
import { CiCamera } from 'react-icons/ci';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import './ContactosHeader.css';
import FormBusquedaContactos from '../FormBusquedaContactos/FormBusquedaContactos';

const ContactosHeader = ({ search, onSearchChange }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);  
  };

  return (
    <div className={`contact-header ${searchVisible ? 'search-visible' : ''}`}>
      {searchVisible && (
        <FormBusquedaContactos
          search={search}
          onSearchChange={onSearchChange}
        />
      )}
      <div className='logo'>WhatsApp</div>
      <div className='iconos'>
        <CiCamera />
        <IoMdSearch onClick={handleSearchClick} />  
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default ContactosHeader;
