import express from 'express';
import { charRoute } from './routes/charRoute';

const app = express();

app.use(express.json());  // Permite que o express entenda requisições com o corpo em JSON
app.use(charRoute);  // Adiciona as rotas de characters ao servidor

const port = 3333;  // Porta que o servidor vai ouvir

app.listen(port, () => console.log(`Server is running on port ${port}`));  // Inicia o servidor na porta 3333