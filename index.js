const express = require("express");
const routes = require("./src/routes/route")
const cors = require('cors');

//Chamando o express para rodar o server node e definido a porta
const app = express();
const port = 8080;

//Habilita o middleware para lidar com solicitações e respostas no formato JSON
app.use(express.json());
// Habilita o middleware para analisar dados de formulários codificados em URL
app.use(express.urlencoded({ extended: false }));
// Habilita o middleware para permitir solicitações de diferentes origens (CORS)
app.use(cors());

// Associa as rotas definidas no arquivo "routes" à raiz do servidor
app.use("/", routes);

//Inicia o server na porta especificada (8080)
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
