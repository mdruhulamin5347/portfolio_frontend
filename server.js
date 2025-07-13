const next = require('next')
const express = require('express')

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, () => {
    console.log('Server running on port 3000')
  })
})