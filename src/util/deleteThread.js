import openAIConnector from '../config/openAI.js';

export default async function deleteThread(threadId) {
  const response = await openAIConnector.beta.threads.del(threadId);
  return response.deleted;
}