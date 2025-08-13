/** @jsxImportSource @emotion/react */
import * as styles from './Chat.style';
import ChatBotMessage from '../components/ChatBotMessage';
import UserMessage from '../components/UserMessage';
import ChatResultMessage from '../components/ChatResultMessage';
import ChatInput from '../components/ChatInput';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { INITIAL_CHAT_MESSAGE } from '../../../constants/chatData';
import CommonHeader from '../components/CommonHeader';
import { sendChatMessage, extractMessageFromResponse } from '../../../api/chat';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Survey에서 전달받은 초기 데이터 처리
    useEffect(() => {
        const { initialResponse, chatHistory } = location.state || {};
        
        if (initialResponse && chatHistory) {
            // 실제 API 응답이 있는 경우
            const initialUserMessage = {
                role: 'user',
                content: INITIAL_CHAT_MESSAGE
            };
            const botResponse = extractMessageFromResponse(initialResponse);
            setMessages([initialUserMessage, botResponse]);
        } else {
            alert('채팅 시작에 실패했습니다. 잠시 후 다시 시도해주세요.');
        }
    }, [location.state]);

    const goResult = () => {
        navigate('/survey/results');
    }

    const handleSend = async (text) => {
        // 사용자 메시지 즉시 추가
        const newUserMessage = { role: 'user', content: text };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        
        setLoading(true);
        try {
            // 전체 메시지 히스토리를 API로 전송 (이미 API 형식)
            const response = await sendChatMessage(updatedMessages);
            
            // 봇 응답 추가
            const botMessage = extractMessageFromResponse(response);
            setMessages(prev => [...prev, botMessage]);
            
        } catch (error) {
            console.error('메시지 전송 실패:', error);
            // 에러 시 임시 응답
            const errorMessage = {
                role: 'assistant',
                content: '죄송합니다. 일시적인 오류가 발생했습니다. 다시 시도해주세요.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div css={styles.wrapper}>
            <CommonHeader />

            <div css={styles.chatContainer}>
                {messages.map((msg, idx) => {
                    if (msg.role === 'assistant') return <ChatBotMessage key={idx} message={msg.content} />;
                    if (msg.role === 'user') return <UserMessage key={idx} message={msg.content} />;
                    if (msg.role === 'result') return <ChatResultMessage key={idx} message={msg.content} onClick={goResult} />;
                return null;
            })}
            </div>

            <ChatInput onSend={handleSend} disabled={loading} />
        </div>
    );
};

export default Chat;
