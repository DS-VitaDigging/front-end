/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';

const SupplementCard = ({ data, onClick }) => {
    return (
        <div css={styles.cardWrapper} onClick={onClick}>
            <div css={styles.imageBox}>
                <img src={data.image} alt={data.name} css={styles.supplementImage} />
            </div>
            <div css={styles.infoBox}>
                <p css={styles.name}>{data.name}</p>

                {data.brand && <p css={styles.brand}>{data.brand}</p>}

                <div css={styles.tagList}>
                    {data.tags.map((tag, index) => (
                        <span key={index} css={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplementCard;
