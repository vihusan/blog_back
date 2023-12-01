En esta carpeta esta el frontend de nuesta app, aqui se puede utilizar cualquier framework 
para realizar la interfaz.

Ejemplo: 
    Angular
    React
    Vue

Para exponer esta carpeta public y poder ver nuestro FRONT, ubicamos el archivo server.js en la carpeta de models dentro de el archivo buscamos el metodo de middlewares, y escribimimos la siguiente linea;

this.app.use( express.static('public') );
    