/** @jsxImportSource @emotion/react */
import * as styles from './Chat.style';

const ChatResultMessage = ({ message, onClick }) => {
    return (
        <div css={styles.resultMessage}>
            <span css={styles.boldText}>{message.title}</span>
            <p>{message.desc}</p>

            <button css={styles.resultButton} onClick={onClick}>
                확인하러 가기
            </button>
        </div>
    );
};

export default ChatResultMessage;
