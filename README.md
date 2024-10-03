# Chat-App
Simple Chat Application

## Overview
A simple chat application using Node.js, Express, and WebSockets for real-time communication.

## How to Run
1. Install Dependencies:
    Use command: npm install

2. Start the Server:
    Use command: node index.js
   
3. Access the Client:
   - Open a web browser and navigate to `http://localhost:8000/`.
   - You can open multiple tabs to simulate multiple clients.

### Prerequisites
- Node.js installed on your machine.

### Architecture Overview
The application consists of a client-server architecture:
1. Server: The server is built with Express to handle HTTP requests and Socket.IO to manage WebSocket connections. When a client sends a message, the server broadcasts it to all connected clients.

2. Client: The client is a simple HTML page that connects to the Socket.IO server. It includes an input field for sending messages and a display area for showing messages from other users.

### Concurrency Handling
Server manages client connections concurrently. Each client connection is handled in a non-blocking manner, allowing multiple clients to send and receive messages simultaneously without impacting performance.

#### Design Choices
1. Use of Socket.IO: Chosen for its simplicity in handling WebSocket connections and real-time messaging. 

2. Separation of Concerns: The application is structured to separate server-side logic from client-side UI,    enhancing maintainability and readability.

3. Simple UI: The front-end is kept minimalistic to focus on functionality rather than design, making it easy for users to understand and use.