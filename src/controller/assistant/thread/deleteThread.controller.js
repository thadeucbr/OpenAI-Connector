import deleteThread from '../../../util/deleteThread.js';
/**
 * @swagger
 * /assistant/thread/delete/{threadId}:
 *   delete:
 *     tags:
 *       - Thread
 *     summary: Delete a thread by ID
 *     description: Delete a thread by its ID.
 *     parameters:
 *       - in: path
 *         name: threadId
 *         required: true
 *         description: ID of the thread to delete
 *         schema:
 *           type: string
 *       - in: header
 *         name: x-key
 *         required: true
 *         schema:
 *           type: string
 *         description: API key for authentication
 *     responses:
 *       200:
 *         description: Thread successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deleted:
 *                   type: boolean
 *                   description: Indicates if the thread was deleted successfully
 *                   example: true
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Internal Server Error
 *                 message:
 *                   type: string
 *                   description: Additional error message
 *                   example: Something went wrong while deleting the thread
 */

export default async function deleteThreadController (req, res) {
  try {
    const deletedThread = await deleteThread(req.params.threadId);
    return res.status(200).json({ deleted: deletedThread });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}