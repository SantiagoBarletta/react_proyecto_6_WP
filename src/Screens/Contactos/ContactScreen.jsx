import React, { useState } from 'react';
import './ContactScreen.css';
import { ContactosHeader, ListaContactos, ContactosFooter } from '../../Componets';


function ContactScreen() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (value) => {
      setSearch(value);
    }
    return (
        <div className="contact-screens">
            <ContactosHeader search={search} onSearchChange={handleSearchChange} />
            <ListaContactos search={search} />
            <ContactosFooter />
      </div>
    );
}

export default ContactScreen;
