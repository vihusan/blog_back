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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield prisma.user.findMany();
        res.json({
            msj: "API get - controller",
            data: resp
        });
    }
    catch (error) {
        res.status(500).json({
            msj: "Error en el servidor"
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        const newUser = yield prisma.user.create({ data });
        res.json({
            msj: "API post - controller",
            newUser
        });
    }
    catch (error) {
        res.status(500).json({
            msj: "Error en el servidor",
            error: error
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    res.json({
        msj: "API put - controller"
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    res.json({
        msj: "API delete - controller"
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map