import { Router } from 'express';
import { Prisma } from '@prisma/client';
import { getUsuario, postUsuario, putUsuario, deleteUsuario} from '../controllers/usuarios';



const router = Router();

router.get('/', getUsuario);

router.post('/', postUsuario);

router.put('/', putUsuario);

router.delete('/', deleteUsuario);

export default router;