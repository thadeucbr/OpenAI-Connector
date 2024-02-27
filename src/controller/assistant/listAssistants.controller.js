import listAssistants from '../../util/listAssistants.js';
export default async function listAssistantsController(_req, res) {
  try {
    const assistantList = await listAssistants();
    return res.status(200).json({ assistants: assistantList });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}