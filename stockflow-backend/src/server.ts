// dotenv para carregar as variáveis de ambiente do .env
import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

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

// Uso das Rotas de autenticação
app.use('/api/auth', authRoutes);

// Uso das Rotas de Usuários (Protegidas)
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

