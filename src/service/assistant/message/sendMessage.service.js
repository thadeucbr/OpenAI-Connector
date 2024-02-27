import createMessage from '../../../util/createMessage.js';

export default async function sendMessageService ({ threadId, context, assistantId }) {
  try {
    const response = await createMessage({ threadId, context: JSON.stringify(context), assistantId });
    return response;
  } catch (error) {
    console.error(error.message);
    return { error: 'Internal Server Error', message: error.message };
  }
}