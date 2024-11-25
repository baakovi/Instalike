import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postController.js';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccess: 200
}

// Windows
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ dest : './uploads', storage });

// Linux ou Mac
const upload = multer({ dest : './uploads' });

// 4 verbos HTTP principais - POST, GET, DELETE e PUT

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());

    app.use(cors(corsOptions));

    // Rota GET para obter todos os posts
    app.get('/posts', listarPosts);

    // Rota POST para criar um post
    app.post('/posts', postarNovoPost);

    // Rota POST para upload de imagens
    app.post('/upload', upload.single('imagem'), uploadImagem);

    app.put('/upload/:id', atualizarNovoPost)
}

export default routes;