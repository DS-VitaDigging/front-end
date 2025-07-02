/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';
import { supplements } from '../../../constants/supplementData';
import SupplementCard from './supplementCard';

const ResultPage = () => {
  return (
    <div css={styles.wrapper}>
      <h2 css={styles.title}>추천 영양제</h2>
      <div css={styles.cardList}>
        {supplements.map((item) => (
          <SupplementCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
