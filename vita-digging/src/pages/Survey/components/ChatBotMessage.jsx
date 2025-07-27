/** @jsxImportSource @emotion/react */
import * as styles from '../Chat/Chat.style';

const ChatBotMessage = ({ message }) => {
    return (
        <span css={styles.botMessage}>
            {message}
        </span>
    );
};

export default ChatBotMessage;
