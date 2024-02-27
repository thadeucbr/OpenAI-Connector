import openAIConnector from '../config/openAI.js';

export default async function retrieveAssistant(assistantId) {
  const assistant = await openAIConnector.beta.assistants.retrieve(assistantId)
  return assistant
}