import express from 'express';
import routes from './src/routes/postsRoutes.js';

// Cria uma instância do Express, que será o núcleo da nossa aplicação
const app = express();

// Linkar as rotas no servidor
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver ouvindo
app.listen(3000, () => {
    console.log('Servidor escutando...');
});