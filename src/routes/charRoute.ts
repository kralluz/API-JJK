import {Request, Response, Router} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const charRoute = Router();

charRoute.get('/characters', async(req: Request, res: Response) => {
	const characters = await prisma.character.findMany();
  
	res.json({characters});
});

charRoute.post('/character', (req: Request, res: Response) => {
	return res.send('requisicao post de character');
});

charRoute.put('/character', (req: Request, res: Response) => {
	return res.send('requisicao put de character');
});

charRoute.delete('/character', (req: Request, res: Response) => {
	return res.send('requisicao delete de character');
});