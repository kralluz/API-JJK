import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

class domainsExpansionController {

	constructor() {}
 
	// função para listar todos os domínios de expansão
	async listAllDomainsExpansion(req:Request, res:Response) {
		const allDomainsExpansion = await prisma.domainExpansions.findMany({
			include: {
				Character: true,
			}
		});
    
		return res.status(200).json({allDomainsExpansion});
	}

	// função para listar um domínio de expansão
	async listDomainsExpansion(req:Request, res:Response){
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const {id} = paramsSchema.parse(req.params);

		const domainsExpansion = await prisma.domainExpansions.findUnique({
			where: {
				id,
			},
			include: {
				Character: true,
			}
		});

		return res.status(200).json({domainsExpansion});
	}

	// função para criar um domínio de expansão
	async createDomainExpansion(res:Response, req:Request){
		const bodyDomainExpansionSchema = z.object({
			name: z.string(),
			description: z.string(),
		});

		const {name, description}= bodyDomainExpansionSchema.parse(req.body);

		const domainExpansion = await prisma.domainExpansions.create({
			data: {
				name,
				description,
			},
		});

		return res.status(200).json({domainExpansion});
	}
}


export default new domainsExpansionController();