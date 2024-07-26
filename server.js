// importando bibliotecas
/*forma antiga 
const express = require("express") */

// forma nova
import express from "express"; //importando express
import cors from "cors"; // importando o cors 
import { PrismaClient } from "@prisma/client"; //importando a biblioteca prisma e trazendo apenas as inf que queremos

const prisma = new PrismaClient();

const app = express();
app.use(express.json()); //essa linha ajuda o express compreender que estamos nos comunicando por json no body
app.use(cors()); // aqui pedimos ao express para habilitar  o cors - em produção teriamos que especificar qual caminho do servidor, pois dessa forma todos conseguem

//criando uma rota para listar os usuarios
app.get("/usuarios", async (req, res) => {
  const listUser = await prisma.user.findMany(); //lista todos os usuarios e atribui a variavel listUser

  res.status(200).json(listUser); //retorno o usuario em formato json
});

//criando a rota para inserir usuario - envia informações para o banco de dados via body
//utilizando funcao assincrona para aguardar o BD responder
app.post("/usuarios", async (req, res) => {
  const user = await prisma.user.create({
    //criar
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });

  res.status(201).json({ user }); //json vai retornar o usuario criado
});

//rota para editar um usuario especifico pelo ID
app.put("/usuarios/:id", async (req, res) => {
  const user = await prisma.user.update({
    //editar
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });

  res.status(200).json({ user }); //json vai retornar o usuario criado
});

// rota para deletar um usuario especifico pelo ID
app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário deletado com sucesso!" });
});

//onde meu back sera ouvido / acessado / porta
app.listen(5000);

//http://localhost:5000
// req - requisição
//res - resposta
