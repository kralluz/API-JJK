import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

class charController {
	constructor() {}

	// função para listar os personagens
	async listChars(req:Request, res:Response) {
		const allChars = await prisma.character.findMany({
			include: {
				powers: true,
				domainExpansions: true,
			},
		});
	
		return res.status(200).json({allChars});
	}

	// função para listar um personagem
	async listChar(req:Request, res:Response){
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const {id} = paramsSchema.parse(req.params);


		const char = await prisma.character.findUnique({
			where: {
				id
			},
			include: {
				powers: true,
			},
		});

		return res.status(200).json({char});
	}


	//função para atualizar um personagem
	async updateChar(req:Request, res:Response) {
		
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const {id} = paramsSchema.parse(req.params);

		const bodySchema = z.object({
			name: z.string().min(3).max(255),
			age: z.number().min(0),
			image: z.string().min(3).max(255),
			bio: z.string().min(3).max(255),
		});


		const {name, age, bio, image} = bodySchema.parse(req.body);

		const char = await prisma.character.update({
			where: {id},
			data: {
				name, 
				age, 
				bio,
				image,
			},
		});

		return res.status(200).json({char});
	}


	// função para criar um personagem
	async createChar(req:Request, res:Response){

		const domainExpansionsSchema = z.object({
			id: z.string().uuid(),
		});

		const powersSchema = z.object({
			id: z.string().uuid(),
		});

		const bodySchema = z.object({
			name: z.string().min(3).max(255),
			age: z.number().min(0),
			image: z.string().min(3).max(255),
			bio: z.string().min(3).max(255),
			powers:z.array(powersSchema),
			domainExpansions: z.array(domainExpansionsSchema),
		});

		if (!req.body) {
			return res.status(400).json({ error: 'Corpo da solicitação ausente ou inválido.' });
		}

		try {
			const {name, age, bio, image, powers, domainExpansions} = bodySchema.parse(req.body);

			const char = await prisma.character.create({
				data: { 
					name,
					age,
					bio,
					image,
					powers: {
						connect: powers,
					},
					domainExpansions:{
						connect: domainExpansions,
					}
				}
			});

			return res.status(200).json({ 
				name: char.name,
				age: char.age,
				bio: char.bio,
				image: char.image,
				powers: powers,
				domainExpansions: domainExpansions,
			});
			
		}catch (error) {
			console.error(error);
			return res.status(400).json({ error: 'Erro ao processar a solicitação.' });
		}
	}

	async deleteChar(req:Request, res:Response){ 
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const {id} = paramsSchema.parse(req.params);

		const char = await prisma.character.delete({
			where: {id},
		});

		return res.status(200).json({char});
	}
}

export default new charController();