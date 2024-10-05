const jwt = require("jsonwebtoken");

let users = [];
let currentId = 1;

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: currentId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.loginUser = (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user) return res.status(404).json({ error: "Usuário não encontrado." });

  const token = jwt.sign(
    { id: user.id, name: user.name },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
};

exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }
  res.status(200).json(user);
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }
  const { name, email } = req.body;
  users[userIndex] = { id: parseInt(id), name, email };
  res.status(200).json(users[userIndex]);
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
};

// Utilizando pelo Prisma

// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// exports.createUser = async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         email,
//       },
//     });
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error("Erro ao criar usuário:", error);
//     res.status(500).json({ error: "Erro ao criar usuário." });
//   }
// };

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao buscar usuários." });
//   }
// };

// exports.getUserById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await prisma.user.findUnique({
//       where: { id: parseInt(id) },
//     });
//     if (!user) {
//       return res.status(404).json({ error: "Usuário não encontrado." });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao buscar usuário." });
//   }
// };

// exports.updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     const updatedUser = await prisma.user.update({
//       where: { id: parseInt(id) },
//       data: {
//         name,
//         email,
//       },
//     });
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao atualizar usuário." });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.user.delete({
//       where: { id: parseInt(id) },
//     });
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao deletar usuário." });
//   }
// };
