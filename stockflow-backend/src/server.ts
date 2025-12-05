// dotenv para carregar as variáveis de ambiente do .env
import * as dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import connectDB from './config/db';

// Conecta ao MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware: Permitem que o Express receba JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas para Teste Simples
app.get('/', (req: Request, res: Response) => {
    res.send('API StockFlow: Servidor Rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

