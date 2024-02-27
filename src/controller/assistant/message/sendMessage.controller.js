import sendMessageService from '../../../service/assistant/message/sendMessage.service.js';

export default async function sendMessageController (req, res) {
  try {
    const { threadId, context, assistantId } = req.body;
    const response = await sendMessageService({ threadId, context, assistantId })
    return res.status(200).json(response);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
}