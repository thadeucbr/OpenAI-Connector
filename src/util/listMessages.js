import openAIConnector from '../config/openAI.js';

export default async function listMessages(threadId) {
  const threadMessages = await openAIConnector.beta.threads.messages.list(
    threadId
  );

  return threadMessages.data
}
