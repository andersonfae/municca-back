const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserModel {
  static async createUser(userData) {
    try {
      const user = await prisma.user.create({
        data: userData,
      });
      return user;
    } catch (error) {
      // Handle or throw error depending on your error handling strategy
      throw error;
    }
  }

  static async getAllUsers() {
    return await prisma.user.findMany();
  }

  static async getUserById(id) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  static async updateUser(id, userData) {
    return await prisma.user.update({
      where: { id },
      data: userData,
    });
  }

  static async deleteUser(id) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}

module.exports = UserModel;
