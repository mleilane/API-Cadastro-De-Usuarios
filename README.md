
# Gerenciamento de Usuários com Node.js, Express, Cors e Prisma
Este projeto é uma aplicação backend para gerenciar usuários utilizando Node.js, Express, Cors e Prisma. Ele permite listar, criar, editar e excluir usuários em um banco de dados MongoDB.

## Tecnologias Utilizadas
* Node.js
* Express
* Cors
* Prisma
* MongoDB

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Naveque até a pasta do projeto: 
    ```sh
    cd seu-repositorio

3. Instale as dependências 
    ```sh
    npm install

4. Configure a variável de ambiente DATABASE_URL no arquivo .env com a URL de conexão do seu MongoDB. 


## Uso

1. Inicie o servidor:
   ```sh
   npm start

2. O servidor estará disponível em http://localhost:5000.

## Rotas
### Listar Usuários
* Rota: GET /usuarios
* Descrição: Retorna a lista de todos os usuários.
* Resposta: 200 OK com a lista de usuários em formato JSON.

### Criar Usuário
* Rota: POST /usuarios
* Descrição: Cria um novo usuário.
* Requisição:
  ```sh
    {
  "email": "email@example.com",
  "age": 25,
  "name": "Nome do Usuário"
    }

### Editar Usuário
* Rota: PUT /usuarios/:id
* Descrição: Edita um usuário existente pelo ID.
* Requisição:
  ```sh
    {
  "email": "email@example.com",
  "age": 25,
  "name": "Nome Atualizado"
    }

### Deletar Usuário
* Rota: DELETE /usuarios/:id
* Descrição: Deleta um usuário existente pelo ID.
* Resposta: 200 OK com uma mensagem de sucesso.

  
## Esquema do Prisma
* O esquema do Prisma define o modelo do banco de dados:
  ```sh
   generator client {
  provider = "prisma-client-js"
  }
  
  datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
  }
  
  model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   Int
  }

## Estrutura do Projeto
 ```sh
/
├── prisma/
│   └── schema.prisma  # Esquema do Prisma
├── src/
│   └── index.js       # Código principal do servidor
├── .env               # Variáveis de ambiente
├── package.json       # Dependências e scripts do npm
└── README.md          # Documentação do projeto

