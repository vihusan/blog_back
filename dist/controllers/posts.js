"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPost = exports.getPost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tb: tipoBusqueda, cb: cadenaDeBusqueda } = req.query;
        const { id } = req.body;
        let query = {};
        let result = [];
        if (tipoBusqueda && cadenaDeBusqueda && !id) {
            query = {
                where: {
                    [`${tipoBusqueda}`]: {
                        contains: `${cadenaDeBusqueda}`
                    }
                }
            };
            const arrayPost = yield prisma.post.findMany(query);
            result = arrayPost.map((post) => {
                const contenido = post.contenido;
                post.contenido = contenido.substring(0, 70);
                return post;
            });
        }
        if (!tipoBusqueda && !cadenaDeBusqueda && id) {
            result = yield prisma.post.findUnique({ where: { id: id } });
        }
        if (!tipoBusqueda && !cadenaDeBusqueda && !id) {
            const arrayPost = yield prisma.post.findMany();
            result = arrayPost.map((post) => {
                const contenido = post.contenido;
                post.contenido = contenido.substring(0, 70);
                return post;
            });
        }
        res.json({
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            msj: "Error en el servidor",
            error
        });
    }
});
exports.getPost = getPost;
const postPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = req.body;
        const newPost = yield prisma.post.create({ data: post });
        res.json({
            data: newPost
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msj: "Error en el servidor",
            error
        });
    }
});
exports.postPost = postPost;
//# sourceMappingURL=posts.js.map