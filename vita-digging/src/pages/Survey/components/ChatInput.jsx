/** @jsxImportSource @emotion/react */
import * as styles from '../Chat/Chat.style';
import { useState } from 'react';

const ChatInput = ({ onSend, disabled }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim() && !disabled) { 
            onSend(text);
            setText('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !disabled) { 
            handleSend();
        }
    };

    return (
        <div css={styles.inputWrapper}>
            <input
                css={styles.inputField}
                type="text"
                value={text}
                placeholder="메시지를 입력하세요..."
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={disabled} 
            />
            <button 
                css={styles.sendButton} 
                onClick={handleSend}
                disabled={disabled}  
            >
                전송
            </button>
        </div>
    );
};

export default ChatInput;
