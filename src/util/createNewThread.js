import openAIConnector from '../config/openAI.js';

export default async function createThread() {
  const thread = await openAIConnector.beta.threads.create()
  return thread.id
}