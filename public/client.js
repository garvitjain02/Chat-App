const socket = io(); // Initialize Socket.IO

// Accessing data from UI by their id
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const usernameInput = document.getElementById('usernameInput');
const sendButton = document.getElementById('sendButton');

let username = '';

// Prompt for username
usernameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && usernameInput.value.trim()) {
        username = usernameInput.value.trim();
        usernameInput.disabled = true;
        messageInput.disabled = false;
        sendButton.disabled = false;
        messageInput.focus();
        socket.emit('chat message', `${username} has joined the chat.`);
    }
});

// Listen for messages from the server
socket.on('chat message', (msg) => {
    const message = document.createElement('div');
    message.textContent = msg;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
});

// Send a message when the button is clicked
sendButton.addEventListener('click', () => {
    if (messageInput.value.trim()) {
        socket.emit('chat message', `${username}: ${messageInput.value}`);
        messageInput.value = ''; // Clear input after sending
    }
});

// Also send a message when Enter key is pressed
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
