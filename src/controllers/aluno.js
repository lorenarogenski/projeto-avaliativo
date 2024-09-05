const modelo = require("../models/aluno");

const bancoDeDados = [];

// Função para obter todos os registros.
const listar = () => bancoDeDados;

// Função para obter um registro pelo ID. 
const mostrar = id => bancoDeDados.find(el => el.id == id);

// Função para criar um novo registro. 
const criarAluno = (body) => {
    const novoRegistro = modelo(body);

    if (novoRegistro) {
        bancoDeDados.push(novoRegistro);
        return 201; // Status de sucesso (Criado).
    }
    return 400; // Status de erro (solicitação inválida).
};

// Função para atualizar um registro existente. 
const atualizarAluno = (body, id) => {
    const atualizarRegistro = modelo(body, parseInt(id));
    const indice = bancoDeDados.findIndex(el => el.id == id);

    if (atualizarRegistro && indice != -1) {
        bancoDeDados[indice] = atualizarRegistro;
        return 200; // Status de sucesso (OK).
    }
    return 400; // Status de erro (solicitação inválida).
};

// Função para deletar um registro pelo ID. 
const deletarRegistro = id => {
    const indice = bancoDeDados.findIndex(el => el.id == id);
    if (indice != -1) {
        bancoDeDados.splice(indice, 1);
        return 200; // Status de sucesso (OK).
    }
    return 404; // Status de erro (Não encontrado).
};

module.exports = {
    listar, 
    mostrar, 
    criarAluno,
    atualizarAluno,
    deletarRegistro
};