import * as dotenv from 'dotenv'
import express, {Request, Response} from 'express'
import logger from './middlewares/logger'
import {errorHandler} from './middlewares/error'
import {router} from './routes'

dotenv.config()

const app = express()

app.use(logger)
app.use(express.json())
app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
  // Serve up production assets
  app.use(express.static('../../client/build'))

  // Serve up the index.html
  const path = require('path')
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve("..","..", 'client', 'build', 'index.html'))
  })
}

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`)
})
