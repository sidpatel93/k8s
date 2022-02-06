const express = require('express')
const os = require('os')

const app = express()
const PORT = 3000

app.get("/",(req, res)=> {
  const helloMessage = `V2: Hello from the ${os.hostname()} 😊. I am running on a container !!!`
  console.log(helloMessage)
  res.send(helloMessage)
})

app.listen(PORT, () => {
  console.log(`Web server is running on port ${PORT}`)
})