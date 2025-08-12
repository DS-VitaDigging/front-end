/** @jsxImportSource @emotion/react */
import * as styles from '../Chat/Chat.style';

const UserMessage = ({ message }) => {
    return (
        <span css={styles.userMessage}>
            {message}
        </span>
    );
};

export default UserMessage;
