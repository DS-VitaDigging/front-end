/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';

const SupplementCard = ({ data }) => {
  return (
    <div css={styles.cardWrapper}>
      <div css={styles.imageBox}>
        <img src={data.image} alt={data.name} css={styles.supplementImage} />
      </div>
      <div css={styles.infoBox}>
        <div css={styles.name}>{data.name}</div>
        {data.brand && <div css={styles.brand}>{data.brand}</div>}
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
