import './config/openAI.js'
import express from 'express'
import router from './routes/index.routes.js'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OpenAI Connector API',
      description: 'This API is designed to simplify and enhance the usage of the OpenAPI Assistant for sending messages and creating threads.',
      version: '1.0.0',
    },
  },
  apis: ['./src/controller/**/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use(express.json())
app.use(router)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`)
})