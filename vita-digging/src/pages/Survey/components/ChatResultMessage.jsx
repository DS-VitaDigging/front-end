/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import * as styles from '../Chat/Chat.style';

const ChatResultMessage = ({ message, onClick }) => {

    const navigate = useNavigate();
    const goToResult = () => {
        navigate('/survey/results');
    }

    return (
        <div css={styles.resultMessage}>
            <span css={styles.boldText}>{message.title}</span>
            <p>{message.desc}</p>

            <button css={styles.resultButton} onClick={goToResult}>
                확인하러 가기
            </button>
        </div>
    );
};

export default ChatResultMessage;
