import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

class domainsExpansionController {

	constructor() {}
 
	// função para listar todos os domínios de expansão
	async listAllDomainsExpansion(req:Request, res:Response) {

		// lista todos os domínios de expansão
		const allDomainsExpansion = await prisma.domainExpansion.findMany({
			include: {
				// lista os personagens que possuem o domínio de expansão
				Character: {
					// seleciona apenas o nome do personagem
					select: {
						name: true,
					}
				}
			}
		});
    
		// retorna todos os domínios de expansão
		return res.status(200).json({allDomainsExpansion});
	}

	// função para listar um domínio de expansão
	async listDomainsExpansion(req:Request, res:Response){

		// verifica se o id é valido
		const paramsSchema = z.object({
			id: z.string().cuid(),
		});

		const {id} = paramsSchema.parse(req.params);

		// verifica se o domínio de expansão existe
		const domainsExpansion = await prisma.domainExpansion.findUnique({
			where: {
				id,
			},
			include: {
				Character: true,
			}
		});

		// retorna o domínio de expansão
		return res.status(200).json({domainsExpansion});
	}

	//função para criar um domínio de expansão
	async createDomainExpansion(res:Response, req:Request){
		
		// verifica se o corpo da requisição é valido
		const bodySchema = z.object({
			name: z.string().min(3).max(255),
			description: z.string().min(3).max(255),
		});

		// verifica se o corpo da requisição é valido
		const {name, description,} = bodySchema.parse(req.body);

		// cria o domínio de expansão
		const newDomainExpansion = await prisma.domainExpansion.create({
			data: {
				name,
				description,
			}
		});

		// retorna o domínio de expansão criado
		return res.status(201).json({newDomainExpansion});
	}
}


export default new domainsExpansionController();