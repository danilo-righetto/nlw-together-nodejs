import express, { response } from "express";

const app = express();

/**
 * GET     => Buscando informações
 * POST    => Inserir (Criar) uma informação
 * PUT     => Alterar uma informação
 * DELETE  => Excluir uma informação
 * PATCH   => Alterar uma informação especifica
 */

app.get("/test", (request, response) => {
    return response.send("Ola NLW!")
});

app.post("/test-post", (request, response) => {
    return response.send("POST - NLW")
});


app.listen(3000, () => console.log("Server is running right now."));