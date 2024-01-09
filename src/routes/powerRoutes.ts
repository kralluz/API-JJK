import { Router} from 'express';
import powerController from '../controllers/powerController';


export const powerRoutes = Router();


powerRoutes.get('/powers', powerController.listPowers);  // Rota para listar todos os poderes
powerRoutes.get('/power/:id', powerController.listPower);  // Rota para listar um poder