import { Router } from 'express';
import { getPost, postPost} from '../controllers/posts';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/', getPost);

router.post('/', [ 
    check('titulo', 'El titulo es obligatorio').not().isEmpty(),
    check('autor', 'El autor es obligatorio').not().isEmpty(),
    check('contenido', 'El contenido es obligatorio').not().isEmpty(),
    validarCampos
],postPost);


export default router;