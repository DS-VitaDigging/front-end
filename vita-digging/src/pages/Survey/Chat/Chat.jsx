/** @jsxImportSource @emotion/react */
import * as styles from './Chat.style';
import ChatBotMessage from '../components/ChatBotMessage';
import UserMessage from '../components/UserMessage';
import ChatResultMessage from '../components/ChatResultMessage';
import ChatInput from '../components/ChatInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockMessages } from '../../../constants/chatData';
import CommonHeader from '../components/CommonHeader';

const Chat = () => {
    const [messages, setMessages] = useState(mockMessages);
    const navigate = useNavigate();

    const goResule = () => {
        navigate('/survey/chat')
    }

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
                    if (msg.type === 'result') return <ChatResultMessage key={idx} message={msg.text} onClick={goResule} />;
                return null;
            })}
            </div>

            <ChatInput onSend={handleSend} />
        </div>
    );
};

export default Chat;
