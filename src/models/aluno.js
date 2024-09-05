let proximoId = 1;

const modelo = (body, id = proximoId++) => {
    if (
        body.nome !== undefined &&
        body.matricula !== undefined &&
        body.curso !== undefined &&
        !isNaN(Number(body.ano)) && // Garante que `ano` seja um número
        body.nome !== "" &&
        body.matricula !== "" &&
        body.curso !== "" &&
        body.ano !== ""
    ) {
        return {
            id, 
            nome: body.nome,
            matricula: body.matricula, 
            curso: body.curso, 
            ano: body.ano
        };
    }
    // Retorna null ou um valor adequado se os dados não forem válidos
    return null;
};

module.exports = modelo;