const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class DocumentModel {
  static async createDocument(documentData) {
    try {
      const document = await prisma.document.create({
        data: documentData,
      });
      return document;
    } catch (error) {
      // Handle or throw error depending on your error handling strategy
      throw error;
    }
  }

  static async getAllDocuments() {
    return await prisma.document.findMany();
  }

  static async getDocumentById(id) {
    return await prisma.document.findUnique({
      where: { id },
    });
  }

  static async updateDocument(id, documentData) {
    return await prisma.document.update({
      where: { id },
      data: documentData,
    });
  }

  static async deleteDocument(id) {
    return await prisma.document.delete({
      where: { id },
    });
  }
}

module.exports = DocumentModel;
