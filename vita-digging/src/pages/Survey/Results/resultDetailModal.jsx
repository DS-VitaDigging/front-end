/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';
import { css } from '@emotion/react';

const SupplementDetailModal = ({ data, onClose }) => {
    return (
        <div css={overlay}>
            <div css={modalBox}>
                <span css={closeIcon} onClick={onClose}>×</span>

                <div css={headerRow}>
                    <div css={styles.imageBox}>
                        <img src={data.image} alt={data.name} css={styles.supplementImage} />
                    </div>
                    <div css={styles.infoBox}>
                        <p css={styles.name}>{data.name}</p>
                        {data.manufacturer && <p css={styles.manufacturer}>{data.manufacturer}</p>}
                        
                        <button css={purchaseBtn}>최저가 구매</button>
                    </div>
                </div>

                <div>
                    <p css={sectionTitle}>성분</p>
                    <p css={text}>{data.ingredients}</p>

                    <p css={sectionTitle}>효능</p>
                    <div css={styles.tagList}>
                        {data.tags.map((tagItem, idx) => (
                        <span key={idx} css={styles.tag}>{tagItem}</span>
                        ))}
                    </div>

                    <p css={sectionTitle}>복용법</p>
                    <p css={text}>{data.intake}</p>

                    <p css={sectionTitle}>주의사항</p>
                    <p css={text}>{data.caution}</p>
                </div>
            </div>
        </div>
    );
};

export default SupplementDetailModal;


const overlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #D9D9D98C;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const modalBox = css`
    background-color: #FEFAE0;
    border-radius: 2rem;
    padding: 2rem;
    width: 34rem;
    position: relative;

    overflow-y: auto;
    height: 70vh;
`;

const closeIcon = css`
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    font-size: 2.5rem;
    cursor: pointer;
`;

const headerRow = css`
    display: flex;
    align-items: center;
    margin-top: 1.4rem;
    margin-bottom: 3.5rem;
`;

const purchaseBtn = css`
    margin-top: 1.8rem;
    background-color: #FFCF50;
    color: white;
    width: 13rem;
    padding: 1em 3rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #A4B465CC;
    }
`;

const sectionTitle = css`
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
`;

const text = css`
    font-size: 1.3rem;
    line-height: 1.5;
`;