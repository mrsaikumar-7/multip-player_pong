const http = require('http')
const io = require('socket.io')
const PORT = 3000;
server = http.createServer()
server.listen(PORT)
console.log(`listening on ${PORT}`)

io.on('connection',(socket) =>{
    console.log('user connected')

  })