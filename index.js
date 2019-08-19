const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const chalk = require('chalk').default

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Root endpoint is functional.' })
  } catch (err) {
    res.status(500).json({ errorMessage: err.message })
  }
})

server.listen(process.env.PORT || 5000, () => {
  const serverRunMsg = 'Server is active and listening on http://127.0.0.1:5000'
  console.log(chalk.green(serverRunMsg))
})
