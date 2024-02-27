import listMessages from '../../../util/listMessages.js';

export default async function listMessagesController(req, res) {
  try {
    const messageList = await listMessages(req.params.threadId);
    return res.status(200).json({ messages: messageList });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}