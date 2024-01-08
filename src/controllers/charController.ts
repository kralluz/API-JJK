import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

class charController {
	constructor() {}

	async listChars(req:Request, res:Response) {
		const allChars = await prisma.character.findMany();
		return res.json({allChars});	
	}

	async updateChar(req:Request, res:Response) {
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const {id} = paramsSchema.parse(req.params);

		const bodySchema = z.object({
			name: z.string().min(3).max(255),
			age: z.number().min(0),
			bio: z.string().min(3).max(255),
		});


		const {name, age, bio} = bodySchema.parse(req.body);

		const char = await prisma.character.update({
			where: {id},
			data: {name, age, bio},
		});

		return res.json({char});
	}

	async createChar(req:Request, res:Response){
		const bodySchema = z.object({})
}
}
export default new charController();