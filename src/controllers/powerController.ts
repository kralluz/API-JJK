import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient();


class powerController {
	
	// funcao para listar todos os poderes
	async listPowers(req:Request, res:Response) {

		const allPowers = await prisma.power.findMany({
			include: {
				character: {
					select:{
						name:true
					}
				},
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

		const power = await prisma.power.findUnique({
			where: {
				id,
			},
			include: {
				character: {
					select: {
						name: true
					}
				},
			}
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

		const power = await prisma.power.update({
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
}


export default new powerController;
