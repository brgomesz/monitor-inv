### Como adicionar um novo campo no sistema:

Para adicionar um novo campo no sistema, siga estes passos:

- Atualize o arquivo schema.prisma, incluindo o novo campo no modelo correspondente.
- No backend (server.js), adicione o campo nas rotas relevantes, como POST, PUT e consultas do Prisma.
- Execute o comando npx prisma db push para sincronizar o esquema com o banco de dados.
- Atualize o frontend, garantindo que o novo campo seja incluído nos formulários, requisições e exibições.
- Teste completamente para validar o fluxo do novo campo no sistema.

Próximos passos
Os próximos passos para evolução do projeto incluem:

- Conversão para uma lista de contatos completa.
- Implementação de autenticação para os usuários.
- Criação de filtros avançados (ex.: por idade, nome ou e-mail).
- Integração com front-end para visualização e interação.

### Como fazer o básico para rodar o banco e fazer uma requisição:
1- npm init
2- npm install express
3- node server.js
4- node --watch server.js (para nao precisar ficar reiniciando o servidor)
5- install prisma --save-dev
6- npx prisma init
7- npx prisma db push (Com o prisma.schema com a model feita!)
8- npm install @prisma/client
9- npx prisma studio 

### No código: 
package.json: 
{
  "name": "monitor-inv",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
}

## no server.js:
colocar o 
import express from 'express'
const app = express()
app.listen(3000)