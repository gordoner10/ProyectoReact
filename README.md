Decripción del Proyecto
Car Shop, Es una aplicación para recepción de autos en un taller automotriz. Luego de tomar todos los datos necesarios la aplicación generará una orden de trabajo.

El proceso de recepción de un auto consiste de los siguientes pasos:

## Datos del cliente:
En la primera ventana de la aplicación, deberá mostrarse un formulario para solicitar los datos del cliente.
Deberá contener los siguientes campos obligatorios: nombre del cliente, email, número de contacto, identificación fiscal y tipo de identificación (cédula, RUC, pasaporte).

![image](https://github.com/gordoner10/ProyectoReact/assets/79759560/95f7b264-4a83-43cf-8e0e-18f4fa822994)

## Datos del vehículo:
Una vez completados los datos del cliente, se mostrará un formulario adicional para solicitar los datos del vehículo.
Proporcionar la información del vehículo, como la marca, modelo, placa, nivel del tanque de gasolina, y un campo de texto donde se podrán detallar abolladuras, rayones o cualquier dato relevante sobre el estado exterior del vehículo.

![image](https://github.com/gordoner10/ProyectoReact/assets/79759560/e962115c-41a8-4b23-ab7c-19a98c629d55)

## Selección de servicios:
Después de ingresar los datos del vehículo, se presentará una lista de servicios disponibles que se pueden realizar en el taller automotriz.
Se deberá poder seleccionar los servicios que el cliente desea realizar en su vehículo. Menú de servicios: cambio de aceite, cambio de frenos, alineación y balanceo, diagnóstico general, revisión sistema eléctrica, revisión de la suspensión (son libres para agregar otros servicios que conozcan si quieren mostrar un menú más largo)
El cliente podrá seleccionar varios servicios marcando las casillas correspondientes junto a cada servicio.

![image](https://github.com/gordoner10/ProyectoReact/assets/79759560/953f0065-0965-4a04-87f0-f42b13554fb0)

## Orden de trabajo:
Esta sección final mostrará toda la información ingresada para mostrarle al cliente y solicitar su aprobación final.
Se deberá mostrar una fecha y hora estimada de entrega.

![image](https://github.com/gordoner10/ProyectoReact/assets/79759560/f9e569c1-a490-4bb5-a8dc-6c84f82947cb)

## Desarrollo
Este proyecto fue desarrollado en REACT y se lo desplego en un bucket de AWS

![image](https://github.com/gordoner10/ProyectoReact/assets/79759560/1dfff2ee-a5ab-4b4e-8b74-4d9536bacb40)


## Despliegue
1.- Descargar el proyecto, debido a que se cargaron imagenes y hojas de stilos CSS.
2.- Clonar el proyecto
3.- Instalar las dependencias 
4.- Iniciar el proyecto

Si desea desplegar la solucion en su propio bucket de AWS debera:
1.- Crear un bucket en S3
2.- En su proyecto local ejecutar el comando ## npm run build y copiar todos los archivos al bucket.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
