const modelo = require("../models/aluguel");

const bancoDeDados = [];

// Função para obter todos os registros.
const listar = () => bancoDeDados;

// Função para obter um registro pelo ID.
const mostrar = id => bancoDeDados.find(el => el.id == id);

// Função para criar um novo registro. 
const criar = (body) => {
    const novoRegistro = modelo(body); 

    if (novoRegistro) {
        bancoDeDados.push(novoRegistro);
        return 201; // Retorna status de sucesso (Criado).
    }
    return 400; // Retorna status de erro (solicitação inválida).
};

// Função para atualizar um registro existente. 
const atualizar = (body, id) => {
    const registroAtualizado = modelo(body, parseInt(id));
    const indice = bancoDeDados.findIndex(el => el.id == id);

    if (registroAtualizado && indice !== -1) {
        bancoDeDados[indice] = registroAtualizado;
        return 200; // Retorna status de sucesso (OK).
    }

    return 400; // Retorna status de erro (solicitação inválida).
};

// Função para deletar um registro pelo ID. 
const deletar = id => {
    const indice = bancoDeDados.findIndex(el => el.id == id);
    if (indice !== -1) {
        bancoDeDados.splice(indice, 1);
        return 200; // Retorna status de sucesso (OK).
    }
    return 404; // Retorna status de erro (Não encontrado).
};

module.exports = {
    listar,
    mostrar,
    criar, 
    atualizar, 
    deletar
};