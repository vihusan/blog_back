import express, {Application} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { apiPaths } from '../interfaces/apiPaths.interface';
import userRoutes from '../routes/usuarios';
import postRoutes from '../routes/posts';

dotenv.config();

class Server {
    private app: Application;
    private port: string;
    private apiPaths: apiPaths;

    constructor(){
        this.app = express(); 
        this.port = process.env.PORT || '8000';
        this.apiPaths = {
            usuarios : "/api/usuarios",
            posts: "/api/posts"
        }

        // Middlewares
        this.middlewares();
        
        // Rutas app
        this.routes(); 
    }

    middlewares(){
        this.app.use( express.static('public') ); // directorio publico
        this.app.use( express.json() ); // lectura y parseo del body
        this.app.use( cors() ); 
        this.app.use( morgan('tiny') ); // impresion de las solicitudes
    }

    routes(){
        this.app.use(this.apiPaths.posts, postRoutes);
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log("corriendo en el puerto: " + this.port);
        });
    }
}

export default Server;