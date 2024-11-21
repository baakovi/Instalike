import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost } from '../controllers/postController.js';

// 4 verbos HTTP principais - POST, GET, DELETE e PUT

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());

    // Rota GET para obter todos os posts
    app.get('/posts', listarPosts);
    // Rota POST para criar um post
    app.post('/posts', postarNovoPost);
    app.post('/upload');
}

export default routes;