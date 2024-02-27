import deleteThread from '../../../util/deleteThread.js';

export default async function deleteThreadController (req, res) {
  try {
    const deletedThread = await deleteThread(req.params.threadId);
    return res.status(200).json({ deleted: deletedThread });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}