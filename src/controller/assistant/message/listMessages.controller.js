import listMessages from '../../../util/listMessages.js';
/**
 * @swagger
 * /assistant/message/list/{threadId}:
 *  get:
 *    tags:
 *      - Message
 *    description: Use to request all messages
 *    parameters:
 *      - in: path
 *        name: threadId
 *        required: true
 *        description: The ID of the thread
 *        schema:
 *          type: string
 *      - in: header
 *        name: x-key
 *        required: true
 *        description: The x-key value
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                messages:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      object:
 *                        type: string
 *                      created_at:
 *                        type: number
 *                      assistant_id:
 *                        type: string
 *                      thread_id:
 *                        type: string
 *                      run_id:
 *                        type: string
 *                      role:
 *                        type: string
 *                      content:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            type:
 *                              type: string
 *                            text:
 *                              type: object
 *                              properties:
 *                                value:
 *                                  type: string
 *                                annotations:
 *                                  type: array
 *                                  items:
 *                                    type: object
 *                      file_ids:
 *                        type: array
 *                        items:
 *                          type: string
 *                      metadata:
 *                        type: object
 * 
 */
export default async function listMessagesController(req, res) {
  try {
    const messageList = await listMessages(req.params.threadId);
    return res.status(200).json({ messages: messageList });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}