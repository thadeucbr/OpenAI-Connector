import openAIConnector from '../config/openAI.js';
export default async function retrieveMessage(threadId, runId) {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return await openAIConnector.beta.threads.runs.retrieve(threadId, runId);
}
