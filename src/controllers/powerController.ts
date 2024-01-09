import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient();


class powerController {

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
}


export default new powerController;
