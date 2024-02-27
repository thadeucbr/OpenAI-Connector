import openAIConnector from '../config/openAI.js';
import retrieveMessage from './retrieveMessage.js';

export default async function createMessage({ threadId, context, assistantId }) {
  await openAIConnector.beta.threads.messages.create(threadId, { 
    role: 'user',
    content: context
  });

  const run = await openAIConnector.beta.threads.runs.create(threadId, {
    assistant_id: assistantId
  });
  
  let response = await openAIConnector.beta.threads.runs.retrieve(threadId, run.id);
  while (response.status !== 'completed') {
    await new Promise(resolve => setTimeout(resolve, 3000));
    response = await retrieveMessage(threadId, run.id);
  }

  const messages = await openAIConnector.beta.threads.messages.list(threadId);

  return messages.body.data[0].content;
}