import { Router } from 'express';
import { getJoyasPorFiltro, getOrderAndLimitJoyas } from '../controllers/controller.js';


const router = Router();


router.get('/joyas', getOrderAndLimitJoyas );
router.get('/joyas/filtros', getJoyasPorFiltro );
//router.get('/joyas/:id', getAllJoyasConHateoas);

export default router;