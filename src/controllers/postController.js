// Arquitetura da API - responsabilidade de lidar com as requisições e as respostas

import { getTodosPosts, criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts
    const posts = await getTodosPosts();
    // Envia uma resposta com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    }
    catch(erro) {
        console.error(erro.message);
        res.status(500).json({'Erro' : 'Falha na requisição'});
    }
}