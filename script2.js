document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.getElementsByClassName('chat-box');
    // const toggleButton = document.getElementById('chatbot-toggle');

    toggleButton.addEventListener('click', function() {
        chatbox.style.display = chatbox.style.display === 'block' ? 'none' : 'block';
    });

    // sendButton.addEventListener('click', function() {
    //     const message = userMessageInput.value;
    //     if (message) {
    //         const newMessage = document.createElement('div');
    //         newMessage.textContent = `You: ${message}`;
    //         messagesContainer.appendChild(newMessage);

    //         // Add a simulated bot response (can be customized)
    //         setTimeout(function() {
    //             const botMessage = document.createElement('div');
    //             botMessage.textContent = 'Bot: How can I help you?';
    //             messagesContainer.appendChild(botMessage);
    //             messagesContainer.scrollTop = messagesContainer.scrollHeight;  // Scroll to the bottom
    //         }, 1000);
    //     }
    //     userMessageInput.value = '';
    // });
});
