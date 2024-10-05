let documents = [];
let currentId = 1;

exports.createDocument = (req, res) => {
  const { name, status, userId } = req.body;
  const newDocument = { id: currentId++, name, status, userId };
  documents.push(newDocument);
  res.status(201).json(newDocument);
};

exports.getDocuments = (req, res) => {
  res.status(200).json(documents);
};

exports.getDocumentById = (req, res) => {
  const { id } = req.params;
  const document = documents.find((d) => d.id === parseInt(id));
  if (!document) {
    return res.status(404).json({ error: "Documento não encontrado." });
  }
  res.status(200).json(document);
};

exports.updateDocument = (req, res) => {
  const { id } = req.params;
  const documentIndex = documents.findIndex((d) => d.id === parseInt(id));
  if (documentIndex === -1) {
    return res.status(404).json({ error: "Documento não encontrado." });
  }
  const { name, status } = req.body;
  documents[documentIndex] = {
    id: parseInt(id),
    name,
    status,
    userId: documents[documentIndex].userId,
  };
  res.status(200).json(documents[documentIndex]);
};

exports.deleteDocument = (req, res) => {
  const { id } = req.params;
  const documentIndex = documents.findIndex((d) => d.id === parseInt(id));
  if (documentIndex === -1) {
    return res.status(404).json({ error: "Documento não encontrado." });
  }
  documents.splice(documentIndex, 1);
  res.status(204).send();
};

// Utilizando pelo Prisma

// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// exports.createDocument = async (req, res) => {
//   try {
//     const { name, status, userId } = req.body;
//     const newDocument = await prisma.document.create({
//       data: {
//         name,
//         status,
//         userId,
//       },
//     });
//     res.status(201).json(newDocument);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao criar documento." });
//   }
// };

// exports.getDocuments = async (req, res) => {
//   try {
//     const documents = await prisma.document.findMany();
//     res.status(200).json(documents);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao buscar documentos." });
//   }
// };

// exports.getDocumentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const document = await prisma.document.findUnique({
//       where: { id: parseInt(id) },
//     });
//     if (!document) {
//       return res.status(404).json({ error: "Documento não encontrado." });
//     }
//     res.status(200).json(document);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao buscar documento." });
//   }
// };

// exports.updateDocument = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, status } = req.body;
//     const updatedDocument = await prisma.document.update({
//       where: { id: parseInt(id) },
//       data: {
//         name,
//         status,
//       },
//     });
//     res.status(200).json(updatedDocument);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao atualizar documento." });
//   }
// };

// exports.deleteDocument = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.document.delete({
//       where: { id: parseInt(id) },
//     });
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao deletar documento." });
//   }
// };
