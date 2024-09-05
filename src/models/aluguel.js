let proximoId = 1;

const modelo = (body, id = proximoId++) => {
    console.log(body);

    // Verifica se os dados não estão vazios. 
    if (
        body.dataAluguel &&
        body.dataDevolucao
    ) {
        return {
            id, 
            id_livro: body.id_livro,
            id_aluno: body.id_aluno,
            dataAluguel: body.dataAluguel,
            dataDevolucao: body.dataDevolucao
        };
    }
    // Retorna null ou um valor adequado se os dados não forem válidos
    return null;
};

module.exports = modelo;