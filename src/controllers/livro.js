const models = require("../models/livro");

const db = [];

// Função para obter todos os registros.
const listarLivros = () => db;

// Função para obter um registro pelo ID.
const mostrar = id => db.find(el => el.id == id);

// Função para criar um novo livro.
const criarLivro = (body) => {
    const novoLivro = models(body);
    console.log(novoLivro);

    if (novoLivro) {
        db.push(novoLivro);
        return 201; // Status de sucesso (Criado).
    }
    return 400; // Status de erro (solicitação inválida).
};

// Função para atualizar um livro existente.
const atualizarLivro = (body, id) => {
    const novoLivro = models(body, parseInt(id));
    const indice = db.findIndex(el => el.id == id);

    if (novoLivro && indice != -1) {
        db[indice] = novoLivro;
        return 200; // Status de sucesso (OK).
    }
    return 400; // Status de erro (solicitação inválida).
};

// Função para deletar um livro pelo ID.
const deletarLivro = id => {
    const indice = db.findIndex(el => el.id == id);

    if (indice != -1) {
        db.splice(indice, 1);
        return 200; // Status de sucesso (OK).
    }
    return 404; // Status de erro (Não encontrado).
};

module.exports = {
    listarLivros,
    mostrar,
    criarLivro,
    atualizarLivro,
    deletarLivro,
};