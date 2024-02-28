import sendMessageService from '../../../service/assistant/message/sendMessage.service.js';

/**
 * @swagger
 * /assistant/message/send:
 *   post:
 *     tags:
 *       - Message
 *     summary: Send a message to the assistant
 *     description: Send a message to the specified assistant.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               threadId:
 *                 type: string
 *                 description: The ID of the conversation/thread.
 *               context:
 *                 type: object
 *                 description: The context of the message.
 *               assistantId:
 *                 type: string
 *                 description: The ID of the assistant.
 *             example:
 *               threadId: "string"
 *               context: "string"
 *               assistantId: "string"
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   description: The type of the message.
 *                 text:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: string
 *                       description: The value of the message.
 *                     annotations:
 *                       type: array
 *                       items:
 *                         type: object
 *               example:
 *                 type: "text"
 *                 text:
 *                   value: "string"
 *                   annotations: []
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: The error occurred.
 *                 message:
 *                   type: string
 *                   description: The error message.
 *             example:
 *               error: "Internal Server Error"
 *               message: "Internal Server Error"
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

export default async function sendMessageController (req, res) {
  try {
    const { threadId, context, assistantId } = req.body;
    const response = await sendMessageService({ threadId, context, assistantId })
    return res.status(200).json(response[0]);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
}