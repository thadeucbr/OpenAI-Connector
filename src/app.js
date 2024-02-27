import './config/openAI.js'
import express from 'express'
import router from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`)
})