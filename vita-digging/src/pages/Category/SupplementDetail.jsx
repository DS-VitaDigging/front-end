/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import { supplements } from '../../api/supplements';
import * as styles from './SupplementDetail.style';

const SupplementDetail = () => {
  const { supplementId } = useParams();
  const item = supplements.find(s => s.id === parseInt(supplementId));

  return (
    <div css={styles.wrapper}>
      <div css={styles.topSection}>
        <div css={styles.imageWrapper}>
          <img src={item.image} alt={item.name} css={styles.image} />
        </div>
        <div css={styles.info}>
          <div css={styles.name}>{item.name}</div>
          <div css={styles.brand}>{item.brand}</div>
          <a href={item.purchaseUrl} target="_blank" rel="noopener noreferrer" css={styles.buyButton}>
            최저가 구매
          </a>
        </div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>성분</div>
        <div>{item.ingredients}</div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>효능</div>
        <div css={styles.tags}>
          {item.tags.map(tag => (
            <span key={tag} css={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>복용법</div>
        <div>{item.usage}</div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>주의사항</div>
        <div>{item.caution}</div>
      </div>
    </div>
  );
};

export default SupplementDetail;
