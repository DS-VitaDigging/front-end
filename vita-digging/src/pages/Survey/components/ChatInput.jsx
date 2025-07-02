/** @jsxImportSource @emotion/react */
import * as styles from '../Chat/Chat.style';
import { useState } from 'react';

const ChatInput = ({ onSend }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
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
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button css={styles.sendButton} onClick={handleSend}>전송</button>
        </div>
    );
};

export default ChatInput;
