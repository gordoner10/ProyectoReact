import React, { useState } from 'react';

const VehiculoForm = ({ vehiculoData, onSubmit }) => {
  const [marca, setMarca] = useState(vehiculoData.marca || '');
  const [modelo, setModelo] = useState(vehiculoData.modelo || '');
  const [placa, setPlaca] = useState(vehiculoData.placa || '');
  const [nivelGasolina, setNivelGasolina] = useState(vehiculoData.nivelGasolina || '');
  const [estadoExterior, setEstadoExterior] = useState(vehiculoData.estadoExterior || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const vehiculoData = {
      marca,
      modelo,
      placa,
      nivelGasolina,
      estadoExterior,
    };
    onSubmit(vehiculoData);
  };

  const isFormValid = marca && modelo && placa && nivelGasolina && estadoExterior;

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <h2>Datos del vehículo</h2>
     
        <label className='form-label'>
          Marca:
          <input type="text" value={marca} className='form-control' onChange={(e) => setMarca(e.target.value)} />
        </label>
        <br />

        <label className='form-label'> 
          Modelo:
          <input type="text" value={modelo} className='form-control' onChange={(e) => setModelo(e.target.value)} />
        </label>
        <br />

        <label className='form-label'>
          Placa:
          <input type="text" value={placa} className='form-control' onChange={(e) => setPlaca(e.target.value)} />
        </label>
        <br />

        <label className='form-label'>
          Nivel de gasolina:
          <input
            type="text"
            value={nivelGasolina} className='form-control'
            onChange={(e) => setNivelGasolina(e.target.value)}
          />
        </label>
        <br />

        <label className='form-label'>
          Estado exterior:
          <textarea value={estadoExterior} className='form-control' onChange={(e) => setEstadoExterior(e.target.value)} />
        </label>
        <br />

        <button type="submit" className='btn btn-warning' disabled={!isFormValid}>Siguiente</button>
      
    </div>
    </form>
  );
};

export default VehiculoForm;