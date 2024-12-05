import React, { useState } from 'react';
    
function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };

    const removeMessage = (index) => {
        const newMessages = messages.filter((_, i) => i !== index);
        setMessages(newMessages);
    };

    return (
        <div>
            <h1>Chat</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        {message}
                        <button onClick={() => removeMessage(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chat;


