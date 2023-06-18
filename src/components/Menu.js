import React, { useState } from 'react';

const Menu = ({ activeStep }) => {

return(<header id="header" className="fixed-top d-flex align-items-center">
<div className="container d-flex justify-content-between">
    <div className="logo">
        
        <h1><a href="index.html"><span>C</span>ar <span>S</span>hop</a></h1>
        <img src='https://img.freepik.com/psd-premium/coche-ciudad-sobre-fondo-transparente-representacion-3d-ilustracion_494250-34780.jpg?w=740'></img>
    </div>

    <nav id="navbar" className="navbar">
        <ul>
            <li><a className={`nav-link scrollto ${activeStep === 1 ? 'active' : ''}`} href="#">Registrar Cliente</a></li>
            <li><a className={`nav-link scrollto ${activeStep === 2 ? 'active' : ''}`} href="#">Registrar Vehiculo</a></li>
            <li><a className={`nav-link scrollto ${activeStep === 3 ? 'active' : ''}`} href="#">Seleccionar Servicios</a></li>
            <li><a className={`nav-link scrollto ${activeStep === 4 ? 'active' : ''}`} href="#">Orden de Trabajo</a></li>
        </ul>
    </nav>
</div>
</header>);
}
export default Menu