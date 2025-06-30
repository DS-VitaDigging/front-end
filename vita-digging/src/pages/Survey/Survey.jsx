/** @jsxImportSource @emotion/react */
import * as styles from './Survey.style';
import { useState } from 'react';


const Survey = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    return (
        <div css={styles.wrapper}>
            <div css={styles.header}>
                건강 설문
                <img src="/icons/history.svg" alt="history" css={styles.historyIcon} />
            </div>

            <div css={styles.card}>
                <div css={styles.title}>OOO 님의 신체정보</div>

                <div css={styles.row}>
                    <span css={styles.label}>나이</span>
                    <span css={styles.value}>23세 (만 21세)</span>
                </div>

                <div css={styles.row}>
                    <span css={styles.label}>성별</span>
                    <span css={styles.value}>여성</span>
                </div>

                <div css={styles.row}>
                    <span css={styles.label}>신장</span>
                    <input
                        css={styles.input}
                        type="text"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <span css={styles.inputText}>cm</span>
                </div>

                <div css={styles.row}>
                    <span css={styles.label}>몸무게</span>
                    <input
                        css={styles.input}
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <span css={styles.inputText}>kg</span>
                </div>

                <button css={styles.button}>설문하기</button>
            </div>
        </div>
    );
};

export default Survey;
