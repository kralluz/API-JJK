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
		const bodySimpleDomainExpansionSchema = z.object({
			id: z.string().uuid(),
		});

		const bodyDomainExpansionSchema = z.object({
			id: z.string().uuid(),
		});

		const bodyDomainExpansionsSchema = z.object({
			domainExpansion: bodyDomainExpansionSchema,
			simpleDomain:	bodySimpleDomainExpansionSchema,
		});

		const { simpleDomain,domainExpansion}= bodyDomainExpansionsSchema.parse(req.body);

		const domainsExpansion = await prisma.domainExpansions.create({
			data: {
				simpleDomain:{
					connect: simpleDomain
				},
				domainExpansion:{
					connect: domainExpansion
				},
			},
		});

		return res.status(200).json({domainsExpansion});
	}
}


export default new domainsExpansionController();