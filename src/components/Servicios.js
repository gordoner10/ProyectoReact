import React, { useState } from 'react';

const Servicios = ({ serviciosData, onSubmit }) => {
  const [servicios, setServicios] = useState(serviciosData || []);

  const handleCheckboxChange = (e, servicio) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setServicios((prevServicios) => [...prevServicios, servicio]);
    } else {
      setServicios((prevServicios) => prevServicios.filter((s) => s !== servicio));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(servicios);
  };

  const isFormValid = servicios.length > 0;

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <h2>Selección de servicios</h2>
      <br />
           <input
            type="checkbox" 
            checked={servicios.includes('cambioAceite')}
            onChange={(e) => handleCheckboxChange(e, 'cambioAceite')}
          />
        <label  >
          Cambio de aceite: </label>
        <br />
        
          <input
            type="checkbox" 
            checked={servicios.includes('cambioFrenos')}
            onChange={(e) => handleCheckboxChange(e, 'cambioFrenos')}
          />
        <label  >
          Cambio de frenos:</label>
        <br />
        
          <input
            type="checkbox" 
            checked={servicios.includes('alineacionBalanceo')}
            onChange={(e) => handleCheckboxChange(e, 'alineacionBalanceo')}
          />
       <label  >
          Alineación y balanceo: </label>
        <br />
       
          <input
            type="checkbox" 
            checked={servicios.includes('diagnosticoGeneral')}
            onChange={(e) => handleCheckboxChange(e, 'diagnosticoGeneral')}
          />
         <label  >
          Diagnóstico general:</label>
        <br />
       
          <input
            type="checkbox" 
            checked={servicios.includes('revisionElectrica')}
            onChange={(e) => handleCheckboxChange(e, 'revisionElectrica')}
          />
         <label  >
          Revisión sistema eléctrico:</label>
        <br />
       
          <input
            type="checkbox" 
            checked={servicios.includes('revisionSuspension')}
            onChange={(e) => handleCheckboxChange(e, 'revisionSuspension')}
          />
         <label  >
          Revisión de la suspensión:</label>
        <br />
        <button type="submit" className='btn btn-warning' disabled={!isFormValid}>Generar Orden de Trabajo</button>
    </div>
    </form>
  );
};

export default Servicios;