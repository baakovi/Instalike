// Model - camada que faz a conexão da aplicação com o banco
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Obtém a conexão com o banco de dados 'imersao-instabyte'
    const db = conexao.db('imersao-instabyte');
    // Obtém a coleção 'posts' dentro do banco de dados
    const colecao = db.collection('posts');
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna um array com os resultados
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    
    const db = conexao.db('imersao-instabyte');
    const colecao = db.collection('posts');
    return colecao.insertOne(novoPost);
}