import { Router} from 'express';
import powerController from '../controllers/powerController';


export const powerRoutes = Router();


powerRoutes.get('/powers', powerController.listPowers);  // Rota para listar todos os poderes