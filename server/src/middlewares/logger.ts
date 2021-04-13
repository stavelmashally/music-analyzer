import morgan from 'morgan'

const logger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
)

export default logger
