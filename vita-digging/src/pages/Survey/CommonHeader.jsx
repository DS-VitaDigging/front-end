/** @jsxImportSource @emotion/react */
import * as styles from './Survey.style';

const CommonHeader = () => {

    return (
        <div css={styles.header}>
            건강 설문
            <img src="/icons/history.svg" alt="history" css={styles.historyIcon} />
        </div>
    );
};

export default CommonHeader;
