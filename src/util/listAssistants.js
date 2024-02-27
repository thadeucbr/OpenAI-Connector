import openAIConnector from '../config/openAI.js';

export default async function listAssistants() {
  const myAssistants = await openAIConnector.beta.assistants.list({
    order: "desc",
    limit: "20",
  });

  return myAssistants.data;
}