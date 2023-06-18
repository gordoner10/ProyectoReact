import React, { useReducer } from 'react';

import ClienteForm from './components/ClienteForm';
import VehiculoForm from './components/VehiculoForm';
import Servicios from './components/Servicios';
import OrdenTrabajo from './components/OrdenTrabajo';
import Menu from './components/Menu';
import Footer from './components/Footer';

const initialState = {
  step: 1,
  cliente: {
    nombre: '',
    email: '',
    numeroContacto: '',
    identificacionFiscal: '',
    tipoIdentificacion: '',
  },
  vehiculo: {
    marca: '',
    modelo: '',
    placa: '',
    nivelGasolina: '',
    estadoExterior: '',
  },
  servicios: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };
    case 'SET_CLIENTE':
      return { ...state, cliente: { ...state.cliente, ...action.payload } };
    case 'SET_VEHICULO':
      return { ...state, vehiculo: { ...state.vehiculo, ...action.payload } };
    case 'SET_SERVICIOS':
      return { ...state, servicios: action.payload };
    case 'ACEPTAR':
      return initialState;
    default:
      throw new Error('Unexpected action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, cliente, vehiculo, servicios } = state;

  const handleClienteSubmit = (clienteData) => {
    //console.log("Hola");
    //console.log(clienteData);
    dispatch({ type: 'SET_CLIENTE', payload: clienteData });
    //console.log(clienteData);
    dispatch({ type: 'NEXT_STEP' });
  };

  const handleVehiculoSubmit = (vehiculoData) => {
    dispatch({ type: 'SET_VEHICULO', payload: vehiculoData });
    dispatch({ type: 'NEXT_STEP' });
  };

  const handleServiciosSubmit = (serviciosData) => {
    dispatch({ type: 'SET_SERVICIOS', payload: serviciosData });
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePrevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const handleAceptar = () => {
    dispatch({ type: 'ACEPTAR' });
  };

  return ( 
  <div >
  <Menu activeStep={step} ></Menu>
  <br></br>
  <div id="about" className="about-area area-padding">
  <div className="container">
  
    <div className="row">
      
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="well-middle">
          <div className="single-well">
          <div className="App">
    {step === 1 && <ClienteForm  clienteData={cliente} onSubmit={handleClienteSubmit} />}
      {step === 2 && <VehiculoForm vehiculoData={vehiculo} onSubmit={handleVehiculoSubmit} />}
      {step === 3 && <Servicios  serviciosData={servicios} onSubmit={handleServiciosSubmit} />}
      {step === 4 && (
        <OrdenTrabajo cliente={cliente} vehiculo={vehiculo} servicios={servicios} onClick={handleAceptar} />
      )}
      {step > 1 && (
          <button onClick={() => handlePrevStep()} className='btn btn-warning'>
          Atrás
        </button>
      )}

    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 <Footer></Footer>
   
    </div>
  );
}

export default App;