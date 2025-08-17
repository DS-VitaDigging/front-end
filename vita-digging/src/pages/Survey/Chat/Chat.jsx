/** @jsxImportSource @emotion/react */
import * as styles from './Chat.style';
import ChatBotMessage from '../components/ChatBotMessage';
import UserMessage from '../components/UserMessage';
import ChatResultMessage from '../components/ChatResultMessage';
import ChatInput from '../components/ChatInput';
import { useState, useEffect, useRef } from 'react';  
import { useNavigate, useLocation } from 'react-router-dom';
import { INITIAL_CHAT_MESSAGE } from '../../../constants/chatData';
import CommonHeader from '../components/CommonHeader';
import { sendChatMessage, extractMessageFromResponse } from '../../../apis/Survey/chat';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [finalGptResponse, setFinalGptResponse] = useState(null); 
    const navigate = useNavigate();
    const location = useLocation();
    const chatContainerRef = useRef(null);  

    // vitamins JSON 형태인지 확인 (마지막 채팅인지)
    const isVitaminsResponse = (content) => {
        try {
            const parsed = JSON.parse(content);
            return parsed.vitamins && Array.isArray(parsed.vitamins);
        } catch {
            return false;
        }
    };

    // 채팅 자동 스크롤 
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Survey에서 전달받은 초기 데이터 처리
    useEffect(() => {
        const { initialResponse, chatHistory } = location.state || {};
        
        if (initialResponse && chatHistory) {
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
        navigate('/survey/results', { 
            state: { 
                chatMessages: messages,
                finalGptResponse: finalGptResponse 
            }
        });
    }

    const handleSend = async (text) => {
        if (isProcessing || loading) {
            return;
        }

        setIsProcessing(true);
        const newUserMessage = { role: 'user', content: text };
        
        setMessages(prev => [...prev, newUserMessage]);

        await new Promise(resolve => setTimeout(resolve, 600));
        
        setLoading(true);
        
        try {
            const messagesForAPI = [...messages, newUserMessage];
            
            const response = await sendChatMessage(messagesForAPI);
            const botMessage = extractMessageFromResponse(response);
            
            // 마지막 채팅인지 확인
            if (isVitaminsResponse(botMessage.content)) {
                // 원문 저장
                setFinalGptResponse(response);
                
                // result 메시지로 
                const resultMessage = {
                    role: 'result'
                };
                
                setMessages(prev => [...prev, resultMessage]);
                setIsProcessing(true);  // 더 이상 입력 불가
            } else {
                // 일반 챗봇 메시지
                setMessages(prev => [...prev, botMessage]);
            }
            
        } catch (error) {
            console.error('메시지 전송 실패:', error);
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const errorMessage = {
                role: 'assistant',
                content: '죄송합니다. 일시적인 오류가 발생했습니다. 다시 시도해주세요.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
            setIsProcessing(false);
        }
    };

    return (
        <div css={styles.wrapper}>
            <CommonHeader />

            <div 
                css={styles.chatContainer} 
                ref={chatContainerRef} 
            >
                {messages.map((msg, idx) => {
                    if (msg.role === 'assistant') return <ChatBotMessage key={idx} message={msg.content} />;
                    if (msg.role === 'user') return <UserMessage key={idx} message={msg.content} />;
                    if (msg.role === 'result') return <ChatResultMessage key={idx} onClick={goResult} />;
                return null;
            })}
                
                {/* 로딩 중 표시 */}
                {loading && (
                    <div css={styles.loadingMessage}>
                        <div css={styles.typingIndicator}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}
            </div>

            <ChatInput onSend={handleSend} disabled={loading || isProcessing} />
        </div>
    );
};

export default Chat;
