/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import * as styles from './Survey.style';

const CommonHeader = () => {

    const navigate = useNavigate();

    const goToHistory = () => {
        navigate('/survey/chat/list')
    }

    return (
        <div css={styles.header}>
            건강 설문
            <img 
                src="/icons/history.svg" 
                alt="history" 
                css={styles.historyIcon} 
                onClick={goToHistory}
            />
        </div>
    );
};

export default CommonHeader;
