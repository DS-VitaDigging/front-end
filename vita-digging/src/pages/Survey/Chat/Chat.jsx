/** @jsxImportSource @emotion/react */
import * as styles from './Chat.style';
import ChatBotMessage from './ChatBotMessage';
import UserMessage from './UserMessage';
import ChatResultMessage from './ChatResultMessage';
import ChatInput from './ChatInput';
import { useState } from 'react';
import { mockMessages } from '../../../constants/chatData';
import CommonHeader from '../CommonHeader';

const Chat = () => {
    const [messages, setMessages] = useState(mockMessages);

    const handleSend = (text) => {
        setMessages([...messages, { type: 'user', text }]);
    };

    return (
        <div css={styles.wrapper}>
            <CommonHeader />

            <div css={styles.chatContainer}>
                {messages.map((msg, idx) => {
                    if (msg.type === 'bot') return <ChatBotMessage key={idx} message={msg.text} />;
                    if (msg.type === 'user') return <UserMessage key={idx} message={msg.text} />;
                    if (msg.type === 'result') return <ChatResultMessage key={idx} message={msg.text} onClick={() => alert('이동!')} />;
                return null;
            })}
            </div>

            <ChatInput onSend={handleSend} />
        </div>
    );
};

export default Chat;
