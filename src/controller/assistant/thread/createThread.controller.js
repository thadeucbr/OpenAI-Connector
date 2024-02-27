import createThread from '../../../util/createNewThread.js';

export default async function createThreadController(_req, res) { 
  try {
    const threadId = await createThread()
    return res.status(201).json({ thread: threadId });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
}