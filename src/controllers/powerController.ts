import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient();


class powerController {
	
	// funcao para listar todos os poderes
	async listPowers(req:Request, res:Response) {
		const allPowers = await prisma.powers.findMany({
			include: {
				Character: true,
			},
		});

		return res.status(200).json({allPowers});
	}

	// funcao para listar um poder
	async listPower(req:Request, res:Response) {
		
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const { id } = paramsSchema.parse(req.params);

		const power = await prisma.powers.findUnique({
			where: {
				id,
			},
		});

		return res.status(200).json({power});
	}

	// funcao para atualizar um poder
	async updatePower(req:Request, res:Response) {

		const paramsSchema = z.object({
			id: z.string().uuid()
		});

		const {id} = paramsSchema.parse(req.params);

		const bodySchema = z.object({
			name: z.string().min(3).max(255),
			description: z.string().min(3).max(255)
		});


		const {name, description}= bodySchema.parse(req.body);
		
		const power = await prisma.powers.update({
			where: {
				id
			},
			data: {
				name, 
				description
			}
		});

		return res.status(200).json({power});
	}

	// funcao para criar um poder
	async createPower(req:Request,res: Response){
		const bodyPowerSchema = z.object({
			name: z.string().min(3).max(255),
			description: z.string().min(3).max(255),
		});

		const { name, description } = bodyPowerSchema.parse(req.body);

		const power = await prisma.powers.create({
			data: {
				name,
				description,
			}
		});

		return res.status(201).json({power});
	}


	// funcao para deletar um poder	
	async deletePower (req:Request, res:Response) {
		const paramsPowerSchema = z.object({
			id: z.string().uuid(),
		});

		const { id } = paramsPowerSchema.parse(req.params);


		const power = await prisma.powers.delete({
			where: {
				id
			}
		});

		return res.status(200).json({power});
	}
}


export default new powerController;
