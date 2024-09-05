const express = require('express');
const estudanteRoutes = require('./routes/estudante');
const livroRoutes = require('./routes/livro');
const aluguelRoutes = require('./routes/aluguel');
const app = express();
const port = process.env.PORT || 7000; // Permite configuração da porta via variável de ambiente

app.use(express.json());

// Rotas
app.use('/estudante', estudanteRoutes);
app.use('/livro', livroRoutes);
app.use('/aluguel', aluguelRoutes);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Ajuste a mensagem para uma formatação mais clara
});