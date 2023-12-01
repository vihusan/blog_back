"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const posts_1 = __importDefault(require("../routes/posts"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.apiPaths = {
            usuarios: "/api/usuarios",
            posts: "/api/posts"
        };
        // Middlewares
        this.middlewares();
        // Rutas app
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.static('public')); // directorio publico
        this.app.use(express_1.default.json()); // lectura y parseo del body
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('tiny')); // impresion de las solicitudes
    }
    routes() {
        this.app.use(this.apiPaths.posts, posts_1.default);
        this.app.use(this.apiPaths.usuarios, usuarios_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo en el puerto: " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map