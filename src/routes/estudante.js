const express = require("express");
const alunoController = require("../controllers/aluno.js");
const router = express.Router();

// Obter todos os estudantes. 
router.get("/", (req, res) => {
    try {
        const alunos = alunoController.index();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter alunos" });
    }
});

// Obter um estudante pelo ID. 
router.get("/:id", (req, res) => {
    try {
        const aluno = alunoController.show(req.params.id);
        if (aluno) {
            res.json(aluno);
        } else {
            res.status(404).json({ message: "Aluno não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter aluno" });
    }
});

// Criar um novo estudante. 
router.post("/", (req, res) => {
    try {
        const code = alunoController.store(req.body);
        if (code === 201) {
            res.status(201).json({ message: "Aluno criado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao criar aluno" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar aluno" });
    }
});

// Atualizar um estudante pelo ID. 
router.put("/:id", (req, res) => {
    try {
        const code = alunoController.update(req.body, req.params.id);
        if (code === 200) {
            res.status(200).json({ message: "Aluno atualizado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao atualizar aluno" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar aluno" });
    }
});

// Deletar um estudante pelo ID. 
router.delete("/:id", (req, res) => {
    try {
        const code = alunoController.destroy(req.params.id);
        if (code === 200) {
            res.status(200).json({ message: "Aluno deletado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao deletar aluno" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar aluno" });
    }
});

module.exports = router;