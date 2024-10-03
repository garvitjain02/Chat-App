const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const path = require('path');

const { Server } = require('socket.io');
const io = new Server(server);

const PORT = 8000;

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('New client connected');

    // Listen to msg from client and emit for each user
    socket.on('chat message', (msg) => {
        console.log(`Message received: ${msg}`);
        io.emit('chat message', msg); // Broadcast message to all clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Serve static files
app.use(express.static(path.resolve("./public")));

// Routing app
app.get("/", (req, res) => {
    return res.sendFile("/public/index.html");
})

// Starting the server
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));


