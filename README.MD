# Municca Teste

API com CRUD de Usuario e Documentos para teste da empresa Municca.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas da API](#rotas-da-api)
- [Documentação da API](#documentação-da-api)

## Tecnologias Utilizadas

- Node.js
- Express
- JWT (JSON Web Tokens)
- Swagger (para documentação da API)
- Outras tecnologias que você usou

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/andersonfae/seu-repositorio.git
   ```

2. Instale NPM packages
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente em um arquivo.

```sh
PORT=3000
```

```sh
JWT_SECRET=seu_segredo_aqui
```

4. Inicie o servidor.

```bash
 npm start
```

## Uso

Por exemplo, para fazer login, você pode usar a seguinte requisição POST:

```bash
POST /api/users/login
Content-Type: application/json

{
    "email": "usuario@example.com"
}
```

## Rotas da API

/api/users/login
Método: POST

Descrição: Faz login de um usuário.

Corpo da Requisição:

```bash
{
    "email": "usuario@example.com"
}
```

Respostas:

200: Token de autenticação gerado com sucesso.
404: Usuário não encontrado.

## Documentação da API

A documentação da API está disponível em http://localhost:3000/api-docs. Aqui você pode explorar as rotas da API e testar as requisições diretamente.
