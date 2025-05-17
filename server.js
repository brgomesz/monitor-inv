import express from "express";
import cors from "cors";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
//alterar aqui quais paginas podem acessar meu back-end
app.use(cors());

app.post("/calcular-cdi", (req, res) => {
    const { saldoInicial, aporteMensal, tempoMeses } = req.body;
    const taxaCDI = 0.009;

    let saldo = saldoInicial;
    const resultado = [];

    //loop for que calcula até a quantidade de meses que o usuário pediu
    for (let mes = 1; mes <= tempoMeses; mes++) {
      saldo = saldo * (1 + taxaCDI) + aporteMensal;
      resultado.push({ mes, saldo: saldo.toFixed(2) });
    }
    res.json(resultado);
  });

app.post("/usuario", async (req, res) => {
  await prisma.user.create({
    data: {
      nome: req.body.nome,
      email: req.body.email,
      createdAt: req.body.createdAt,
    },
  });
  res.status(201).json(req.body);
});

app.get("/usuario", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

// app.put('/usuarios/:id', async (req, res) =>{

//     await prisma.user.update({
//         where:{
//             id:req.params.id
//         },

//           data:{
//               email: req.body.email,
//               name: req.body.name,
//               age: req.body.age,
//               city: req.body.city,
//               fav: req.body.fav
//           }
//       })

//       res.status(201).json(req.body)
//   })

//   app.delete('/usuarios/:id', async (req, res)=>{
//     await prisma.user.delete({
//         where: {
//             id: req.params.id
//         }
//     })

//     res.status(200).json({message: 'Usuário deletado com sucesso'})
//   })

app.listen(4000);

// As rotas precisam de 2 coisas:
// 1- o Tipo da Rota (Metodo HTTTP )
// 2- o endereço da rota

// Meu objetivo: Criar uma API de usuários,
// -Criar um usuário
// -Listar todos os usuários
// -Editar um usuario
// -Deletar um usuário
