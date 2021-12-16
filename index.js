const express = require('express')

const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static(__dirname + "/client_static"))

io.on('connection', (client) => {
    
    client.on('join', (message) => {
        console.log(message, client.client.id)
    })

})

server.listen(3000, () => {
    console.log("Server is working")
})