import { Router } from 'express';
import simpleDomainExpansionController from '../controllers/simpleDomainExpansionController';

export const simpleDomainExpansionRoutes = Router();

simpleDomainExpansionRoutes.get('/simpleDomainExpansion', simpleDomainExpansionController.listAllSimpleDomainExpansion); // Rota para listar todos os simpleDomainExpansions
simpleDomainExpansionRoutes.get('/simpleDomainExpansion/:id', simpleDomainExpansionController.listSimpleDomainExpansion); // Rota para listar todos os simpleDomainExpansions
simpleDomainExpansionRoutes.post('/simpleDomainExpansion', simpleDomainExpansionController.createSimpleDomainExpansion); // Rota para criar um simpleDomainExpansion
simpleDomainExpansionRoutes.put('/simpleDomainExpansion/:id', simpleDomainExpansionController.updateSimpleDomainExpansion); // Rota para atualizar um simpleDomainExpansion
simpleDomainExpansionRoutes.delete('/simpleDomainExpansion/:id', simpleDomainExpansionController.deleteSimpleDomainExpansion); // Rota para deletar um simpleDomainExpansion