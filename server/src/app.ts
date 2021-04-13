import * as dotenv from 'dotenv'
import express, {Request, Response} from 'express'
import path from 'path'
import logger from './middlewares/logger'
import {errorHandler} from './middlewares/error'
import {router} from './routes'

dotenv.config()

const app = express()

app.use(logger)
app.use(express.json())
app.use('/api', router)

// if (process.env.NODE_ENV === 'production') {
// Serve up production assets
// app.use(express.static('../../client/build'))
// app.use(express.static(path.resolve(__dirname, '../react-app/dist')))
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')))
// Serve up the index.html
app.get('*', (req: Request, res: Response) => {
  // res.sendFile('../../client/build/index.html')
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html'),
  )
})

// }

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`)
})
