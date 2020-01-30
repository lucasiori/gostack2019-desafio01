# Bootcamp GoStack - Módulo 01 / Desafio 01

Node.js / Express - Aplicação API REST Full, usada pra criar projetos e definir suas determinadas tarefas.

**OBS:** Por se tratar de um projeto com finalidade de aplicar conhecimentos sobre APIs e Middlewares, não possui conexão com banco de 
dados e suas informações são resetadas toda vez que a aplicação for iniciada.

## Começando

Instalar as dependências:

```sh
npm install
#ou
#yarn install
```
Executar a aplicação:

```sh
npm start
#ou
#yarn start
```

### Endereço

A aplicação por padrão será executada na porta 3333: **http://localhost:3333**

### Rotas

```sh
---------------------- Projetos ----------------------
GET    - '/projects'     - exibir todos os projetos
            # retorno: retorn uma lista com todos os projetos cadastrados (json)

POST   - '/projects'     - salvar novo projeto
            # corpo da requisição: { id: "id do projeto", title: "título do projeto" } (json)
            # retorno: retorna os dados do projeto cadastrado (json)
            
PUT    - '/projects/:id' - atualizar projeto, requer id do projeto como parâmetro
            # corpo da requisição: { title: "título do projeto" } (json)
            # retorno: retorna os dados do projeto atualizado (json)
            
DELETE - '/projects/:id' - deletar projeto, requer id do projeto como parâmetro

----------------------- Tarefas ----------------------

POST   - '/projects/:id/tasks' - salvar nova tarefa para o projeto, requer id do projeto como parâmetro
            # corpo da requisição: { title: "título da tarefa" } (json)
            # retorno: retorna os dados do projeto para o qual a tarefa foi cadastrada (json)
```
