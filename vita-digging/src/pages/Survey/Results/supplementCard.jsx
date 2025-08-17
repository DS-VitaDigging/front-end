/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';

const SupplementCard = ({ data, onClick }) => {
    return (
        <div css={styles.cardWrapper} onClick={onClick}>
            <div css={styles.imageBox}>
                <img src={data.imageUrl} alt={data.name} css={styles.supplementImage} />
            </div>
            <div css={styles.infoBox}>
                <p css={styles.name}>{data.name}</p>
                {data.manufacturer && <p css={styles.manufacturer}>{data.manufacturer}</p>}
                <div css={styles.tagList}>
                    <span css={styles.tag}>{data.category}</span>
                </div>
            </div>
        </div>
    );
};

export default SupplementCard;
