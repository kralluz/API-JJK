import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient();

class simpleDomainExpansionController {
	constructor() {}
	async listAllSimpleDomainExpansion(req:Request, res:Response) {
		const allAllSimpleDomainExpansion = await prisma.simpleDomainExpansion.findMany();

		return res.status(200).json({allAllSimpleDomainExpansion});
	}

	// função para listar um domínio de expansão simples
	async listSimpleDomainExpansion(req:Request, res:Response) {
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const {id}= paramsSchema.parse(req.params);

		const simpleDomainExpansion = await prisma.simpleDomainExpansion.findUnique({
			where: {
				id
			}
		});

		return res.status(200).json({simpleDomainExpansion});
	}

	// função para criar um domínio de expansão simples
	async createSimpleDomainExpansion(req:Request, res:Response) {
		const bodySimpleDomainExpansionSchema = z.object({
			name: z.string(),
			description: z.string(),
		});

		const {name,description}= bodySimpleDomainExpansionSchema.parse(req.body);


		const simpleDomainExpansion = await prisma.simpleDomainExpansion.create({
			data: {
				name,
				description,
			}
		});

		return res.status(200).json({simpleDomainExpansion});
	}

	// função para atualizar um domínio de expansão simples
	async updateSimpleDomainExpansion(req:Request, res:Response) {
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const {id} = paramsSchema.parse(req.params);

		const bodySimpleDomainExpansionSchema = z.object({
			name: z.string(),
			description: z.string(),
		});
	
		const {name,description}= bodySimpleDomainExpansionSchema.parse(req.body);

		const simpleDomainExpansion = await prisma.simpleDomainExpansion.update({
			where: {id},
			data: {
				name,
				description,
			},
		});

		return  res.status(200).json({simpleDomainExpansion});
	}

	// função para deletar um domínio de expansão simples
	async deleteSimpleDomainExpansion(req:Request, res:Response) {
		const paramsSchema = z.object({ 
			id: z.string().uuid(),
		});

		const {id} = paramsSchema.parse(req.params);

		const simpleDomainExpansion = await prisma.simpleDomainExpansion.delete({
			where: {id},
		});

		return res.status(200).json({simpleDomainExpansion});
	}
}

export default new simpleDomainExpansionController();

