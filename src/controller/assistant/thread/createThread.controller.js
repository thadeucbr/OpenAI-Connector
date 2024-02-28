import createThread from '../../../util/createNewThread.js';
/**
 * @swagger
 * /assistant/thread/create:
 *   post:
 *     summary: Create a new thread
 *     description: Endpoint to create a new thread.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 thread:
 *                   type: string
 *                   description: The ID of the created thread.
 *     tags:
 *       - Thread
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

export default async function createThreadController(_req, res) { 
  try {
    const threadId = await createThread()
    return res.status(201).json({ thread: threadId });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
}