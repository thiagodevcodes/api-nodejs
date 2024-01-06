const express = require("express");
const cpfValidator = require("../services/cpfValidator")


const router = express.Router()

//Rota do tipo GET para validação de CPF
router.get("/validator/:cpf", (req, res) => {
    //Pega o parâmetro da url cpf
    const cpf = req.params.cpf;

    //Chamada da função para validar o cpf
    const valid = cpfValidator(cpf)

    //Retorna um JSON com o cpf e se ele é válido ou não
    res.json({
        cpf: cpf,
        valid: valid
    })
})

module.exports = router;