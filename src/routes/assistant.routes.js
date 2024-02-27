import { Router } from 'express';
import sendMessageController from '../controller/assistant/message/sendMessage.controller.js';
import listMessagesController from '../controller/assistant/message/listMessages.controller.js';
import createThreadController from '../controller/assistant/thread/createThread.controller.js';
import deleteThreadController from '../controller/assistant/thread/deleteThread.controller.js';
import listAssistantsController from '../controller/assistant/listAssistants.controller.js';

const assistantRouter = Router()

assistantRouter.get('/list', listAssistantsController)

assistantRouter.post('/message/send', sendMessageController)
assistantRouter.get('/message/list/:threadId', listMessagesController)

assistantRouter.post('/thread/create', createThreadController)
assistantRouter.delete('/thread/delete/:threadId', deleteThreadController)

export default assistantRouter;