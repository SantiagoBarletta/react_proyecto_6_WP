const obtenerContactos = async () => {
    const response = await fetch(
      '/mensajeria.json',
       { 
        method: "GET" 
      }
    );
    return response.json();
    
  };

  export default obtenerContactos