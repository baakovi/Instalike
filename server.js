// Servidor
import express from 'express';

// Base de dados: local onde pode puxar os dados que quer devolver
// Array: estrutura que guarda um monte de dados de uma vez só
const posts = [ // Mock - array em memória
    // Objetos: conjuntos de chave e valor
    {
      id : 1,
      descricao: 'Uma foto teste',
      imagem: 'https://placecats.com/millie/300/150'
    },
    {
      id : 2,
      descricao: 'Gato brincando com um novelo de lã',
      imagem: 'https://placekitten.com/400/300'
    },
    {
      id : 3,
      descricao: 'Paisagem de um pôr do sol',
      imagem: 'https://picsum.photos/seed/picsum/600/400'
    },
    {
      id : 4,
      descricao: 'Cachorro correndo na praia',
      imagem: 'https://random.dog/woof.jpg'
    },
    {
      id : 5,
      descricao: 'Montanha nevando',
      imagem: 'https://source.unsplash.com/random/600x400/?mountain,snow'
    },
    {
      id : 6,
      descricao: 'Comida deliciosa',
      imagem: 'https://loremflickr.com/640/480/food'
    },
    {
      id : 7,
      descricao: 'Cidade à noite',
      imagem: 'https://unsplash.com/photos/city-night'
    }
];

// Estrutura para guardar os dados - Banco de dados: MongoDB, tipo de banco de objetos usados em API

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

// Escrever uma rota para devolver os dados deste objeto
app.get('/posts', (req, res) => {
    // 200 - um dos status HTTP, uma série de códigos numéricos associados a um texto, que indica tudo que pode acontecer entre o cliente e o servidor.
    // Os status 500 é comumente usados para erros do servidor
    // res.status(200).send();
    res.status(200).json(posts);
});

function buscaPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get('/posts/:id', (req, res) => {
    const index = buscaPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});