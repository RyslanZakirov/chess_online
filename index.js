const express = require('express')

const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/client_static"))

io.on('connection', (client) => {
    
    client.on('join', (message) => {
        console.log(message, client.client.id)
    })

})

server.listen(port, () => {
    console.log("Server is working")
})