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
                        <img src={data.imageUrl} alt={data.name} css={styles.supplementImage} />
                    </div>
                    <div css={infoBox}>
                        <p css={styles.name}>{data.name}</p>
                        {data.manufacturer && <p css={styles.manufacturer}>{data.manufacturer}</p>}
                        
                        <button onClick={() => window.open(data.purchaseLink, '_blank')} css={purchaseBtn}>
                            최저가 구매
                        </button>
                    </div>
                </div>

                <div css={contentBox}>
                    <p css={sectionTitle}>성분</p>
                    <p css={text}>{data.ingredients}</p>

                    <p css={sectionTitle}>효능</p>
                    <div css={tagList}>
                        <span css={tag}>{data.efficacy}</span>
                    </div>

                    <p css={sectionTitle}>복용법</p>
                    <p css={text}>{data.instructions}</p>

                    <p css={sectionTitle}>주의사항</p>
                    <p css={text}>{data.precautions}</p>
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
    padding: 2rem 3.5rem 3rem 3.5rem;
    width: 35rem;
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

const infoBox = css`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
`;

const headerRow = css`
    display: flex;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3.5rem;
`;

const purchaseBtn = css`
    margin-top: 1.8rem;
    background-color: #FFCF50;
    color: white;
    width: 13rem;
    height: 3.8rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: #A4B465CC;
    }
`;

const contentBox = css`

`;

const sectionTitle = css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
`;

const text = css`
    font-size: 1.3rem;
    line-height: 1.5;
`;

const tagList = css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 
    margin-top: 1.7rem;
    width: 100%;
`;

const tag = css`
    font-size: 1.2rem;
    background-color: #A4B465CC;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    border-radius: 2rem;
    width: 100%;
`;