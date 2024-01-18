import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient();


class powerController {
	
	// funcao para listar todos os poderes
	async listPowers(req:Request, res:Response) {

		// lista todos os poderes
		const allPowers = await prisma.powers.findMany({
			// lista os personagens que possuem o poder
			include: {
				Character: true,
			},
		});

		// retorna todos os poderes
		return res.status(200).json({allPowers});
	}

	// funcao para listar um poder
	async listPower(req:Request, res:Response) {
		
		// verifica se o id é valido
		const paramsSchema = z.object({
			id: z.string().cuid(),
		});

		// verifica se o id é valido
		const { id } = paramsSchema.parse(req.params);

		// verifica se o poder existe
		const power = await prisma.powers.findUnique({
			where: {
				id,
			},
		});

		// retorna o poder
		return res.status(200).json({power});
	}

	// funcao para atualizar um poder
	async updatePower(req:Request, res:Response) {

		// verifica se o id é valido
		const paramsSchema = z.object({
			id: z.string().cuid()
		});

		// verifica se o id é valido
		const {id} = paramsSchema.parse(req.params);

		// verifica se o corpo da requisição é valido
		const bodySchema = z.object({
			name: z.string().min(3).max(255),
			description: z.string().min(3).max(255)
		});


		//verifica se o corpo da requisição é valido
		const {name, description}= bodySchema.parse(req.body);
		
		// verifica se o poder existe
		const power = await prisma.powers.update({
			where: {
				id
			},
			data: {
				name, 
				description
			}
		});

		// retorna o poder atualizado
		return res.status(200).json({power});
	}

	// funcao para criar um poder
	async createPower(req:Request,res: Response){
		// verifica se o corpo da requisição é valido
		const bodyPowerSchema = z.object({
			name: z.string().min(3).max(255),
			description: z.string().min(3).max(255),
		});

		// verifica se o corpo da requisição é valido
		const { name, description } = bodyPowerSchema.parse(req.body);

		// cria o poder
		const power = await prisma.powers.create({
			data: {
				name,
				description,
			}
		});

		// retorna o poder criado
		return res.status(201).json({power});
	}


	// funcao para deletar um poder	
	async deletePower (req:Request, res:Response) {
		const paramsPowerSchema = z.object({
			id: z.string().cuid(),
		});

		// verifica se o id é valido
		const { id } = paramsPowerSchema.parse(req.params);


		// verifica se o poder existe
		const power = await prisma.powers.delete({
			where: {
				id
			}
		});

		// retorna o poder deletado
		return res.status(200).json({power});
	}
}


export default new powerController;
