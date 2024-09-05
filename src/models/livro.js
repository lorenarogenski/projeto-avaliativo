let proximoId = 1;

const modelo = (body, id = proximoId++) => {
    console.log(body);

    // Verificar se todos os campos obrigatórios estão presentes e não são vazios.
    if (
        body.titulo !== undefined &&
        body.autor !== undefined &&
        body.genero !== undefined &&
        body.titulo !== "" &&
        body.autor !== "" &&
        body.genero !== ""
    ) {
        return {
            id, 
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano, // Assume que ano é opcional
            genero: body.genero
        };
    }
    // Retorna null se os dados não forem válidos
    return null;
};

module.exports = modelo;