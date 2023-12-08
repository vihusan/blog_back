"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../controllers/posts");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', posts_1.getPost);
router.post('/', [
    (0, express_validator_1.check)('titulo', 'El titulo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('autor', 'El autor es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('contenido', 'El contenido es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], posts_1.postPost);
exports.default = router;
//# sourceMappingURL=posts.js.map