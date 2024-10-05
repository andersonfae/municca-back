const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController");
const authenticateToken = require("../middleware/authenticateToken");

/**
 * @swagger
 * components:
 *  schemas:
 *    Document:
 *      type: object
 *      required:
 *        - name
 *        - status
 *        - userId
 *      properties:
 *        id:
 *          type: integer
 *          description: O ID do documento, gerado automaticamente.
 *        name:
 *          type: string
 *          description: O nome do documento.
 *        status:
 *          type: string
 *          description: O status atual do documento.
 *        userId:
 *          type: integer
 *          description: ID do usuário associado ao documento.
 *      example:
 *        id: 1
 *        name: Contrato de Locação
 *        status: Pendente
 *        userId: 1
 */

/**
 * @swagger
 * /api/documents:
 *   post:
 *     summary: Cria um novo documento
 *     tags: [Documents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Document'
 *     responses:
 *       201:
 *         description: Documento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 */
router.post("/", authenticateToken, documentController.createDocument);

/**
 * @swagger
 * /api/documents:
 *   get:
 *     summary: Lista todos os documentos
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: Uma lista de documentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Document'
 */
router.get("/", authenticateToken, documentController.getDocuments);

/**
 * @swagger
 * /api/documents/{id}:
 *   get:
 *     summary: Busca um documento pelo ID
 *     tags: [Documents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do documento
 *     responses:
 *       200:
 *         description: Detalhes do documento
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       404:
 *         description: Documento não encontrado
 */
router.get("/:id", authenticateToken, documentController.getDocumentById);

/**
 * @swagger
 * /api/documents/{id}:
 *   put:
 *     summary: Atualiza um documento pelo ID
 *     tags: [Documents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do documento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Document'
 *     responses:
 *       200:
 *         description: Documento atualizado com sucesso
 *       404:
 *         description: Documento não encontrado
 */
router.put("/:id", authenticateToken, documentController.updateDocument);

/**
 * @swagger
 * /api/documents/{id}:
 *   delete:
 *     summary: Remove um documento pelo ID
 *     tags: [Documents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do documento
 *     responses:
 *       200:
 *         description: Documento removido com sucesso
 *       404:
 *         description: Documento não encontrado
 */
router.delete("/:id", authenticateToken, documentController.deleteDocument);

module.exports = router;
