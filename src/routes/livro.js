const express = require("express");
const controllerLivro = require("../controllers/livro.js");
const router = express.Router();

// Obter todos os livros. 
router.get("/", (req, res) => {
    try {
        const livros = controllerLivro.index();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter livros" });
    }
});

// Obter um livro específico pelo ID. 
router.get("/:id", (req, res) => {
    try {
        const livro = controllerLivro.show(req.params.id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).json({ message: "Livro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter livro" });
    }
});

// Criar um novo livro. 
router.post("/", (req, res) => {
    try {
        const code = controllerLivro.store(req.body);
        if (code === 201) {
            res.status(201).json({ message: "Livro criado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao criar livro" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar livro" });
    }
});

// Atualizar um livro existente. 
router.put("/:id", (req, res) => {
    try {
        const code = controllerLivro.update(req.body, req.params.id);
        if (code === 200) {
            res.status(200).json({ message: "Livro atualizado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao atualizar livro" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar livro" });
    }
});

// Deletar um livro. 
router.delete("/:id", (req, res) => {
    try {
        const code = controllerLivro.destroy(req.params.id);
        if (code === 200) {
            res.status(200).json({ message: "Livro deletado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao deletar livro" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar livro" });
    }
});

module.exports = router;