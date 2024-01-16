import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

class domainsExpansionController {

	constructor() {}
 
	// função para listar todos os domínios de expansão
	async listAllDomainsExpansion(req:Request, res:Response) {
		const allDomainsExpansion = await prisma.domainExpansion.findMany({
			include: {
				Character: {
					select: {
						name: true,
					}
				}
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

		const domainsExpansion = await prisma.domainExpansion.findUnique({
			where: {
				id,
			},
			include: {
				Character: true,
			}
		});

		return res.status(200).json({domainsExpansion});
	}

	//função para criar um domínio de expansão
	async createDomainExpansion(res:Response, req:Request){
		const bodySchema = z.object({
			name: z.string().min(3).max(255),
			description: z.string().min(3).max(255),

		});

		const {name, description,} = bodySchema.parse(req.body);

		const newDomainExpansion = await prisma.domainExpansion.create({
			data: {
				name,
				description,
			}
		});

		return res.status(201).json({newDomainExpansion});
	}
}


export default new domainsExpansionController();