export const clienteReducer = (state, action) => {
  console.log("Hola Gonzalo");
    switch (action.type) {
      case 'SET_CLIENTE':
        return { ...action.payload };
      case 'RESET_CLIENTE':
        return {};
      default:
        return state;
    }
  };
  
  export const vehiculoReducer = (state, action) => {
    switch (action.type) {
      case 'SET_VEHICULO':
        return { ...action.payload };
      case 'RESET_VEHICULO':
        return {};
      default:
        return state;
    }
  };
  
  export const serviciosReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SERVICIOS':
        return [...action.payload];
      default:
        return state;
    }
  };