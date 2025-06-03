
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");

function sendMessage() {
    const message = chatInput.value;
    if (message.trim()) {
        const p = document.createElement("p");
        p.textContent = "You: " + message;
        chatBox.appendChild(p);
        chatInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Placeholder for call features
function startVoiceCall() {
    alert("Voice call feature coming soon...");
}

function startVideoCall() {
    alert("Video call feature coming soon...");
}
