import { Router } from 'express';
import domainsExpansionController from '../controllers/domainExpansionsController';

export const domainExpansionsRoutes = Router();

domainExpansionsRoutes.get('/domainsExpansion', domainsExpansionController.listAllDomainsExpansion);
domainExpansionsRoutes.get('/domainsExpansion/:id', domainsExpansionController.listAllDomainsExpansion);
domainExpansionsRoutes.post('/domainsExpansion', domainsExpansionController.createDomainExpansion);