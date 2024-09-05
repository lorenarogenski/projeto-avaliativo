const express = require("express");
const aluguelController = require("../controllers/aluguel.js");
const router = express.Router();

// Obter os aluguéis.
router.get("/", (req, res) => {
    try {
        const aluguéis = aluguelController.index();
        res.json(aluguéis);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter aluguéis" });
    }
});

// Obter um aluguel por ID. 
router.get("/:id", (req, res) => {
    try {
        const aluguel = aluguelController.show(req.params.id);
        if (aluguel) {
            res.json(aluguel);
        } else {
            res.status(404).json({ message: "Aluguel não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter aluguel" });
    }
});

// Criar um novo aluguel. 
router.post("/", (req, res) => {
    try {
        const code = aluguelController.store(req.body);
        if (code === 201) {
            res.status(201).json({ message: "Aluguel criado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao criar aluguel" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar aluguel" });
    }
});

// Atualizar um aluguel existente. 
router.put("/:id", (req, res) => {
    try {
        const code = aluguelController.update(req.body, req.params.id);
        if (code === 200) {
            res.status(200).json({ message: "Aluguel atualizado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao atualizar aluguel" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar aluguel" });
    }
});

// Deletar um aluguel pelo ID. 
router.delete("/:id", (req, res) => {
    try {
        const code = aluguelController.destroy(req.params.id);
        if (code === 200) {
            res.status(200).json({ message: "Aluguel deletado com sucesso" });
        } else {
            res.status(code).json({ message: "Erro ao deletar aluguel" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar aluguel" });
    }
});

module.exports = router;