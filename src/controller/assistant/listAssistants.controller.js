import listAssistants from '../../util/listAssistants.js';
/**
 * @swagger
 * /assistant/list:
 *   get:
 *     summary: Get the list of assistants
 *     description: Returns a list of assistants.
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 assistants:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       object:
 *                         type: string
 *                       created_at:
 *                         type: number
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                       model:
 *                         type: string
 *                       instructions:
 *                         type: string
 *                       tools:
 *                         type: array
 *                         items:
 *                           type: string
 *                       file_ids:
 *                         type: array
 *                         items:
 *                           type: string
 *                       metadata:
 *                         type: object
 *     tags:
 *       - Assistant
 *     security:
 *       - x-key: []
 *     parameters:
 *       - in: header
 *         name: x-key
 *         required: true
 *         schema:
 *           type: string
 *         description: API key for authentication
 */
export default async function listAssistantsController(_req, res) {
  try {
    const assistantList = await listAssistants();
    return res.status(200).json({ assistants: assistantList });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}