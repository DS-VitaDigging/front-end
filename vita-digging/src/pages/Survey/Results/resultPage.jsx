/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';
import { supplements } from '../../../constants/supplementData';
import SupplementCard from './supplementCard';

const ResultPage = () => {
    return (
        <div css={styles.wrapper}>
            <h2 css={styles.title}>추천 영양제</h2>
            <span css={styles.plainText}>설문 결과를 바탕으로 추천된 영양제입니다!</span>
            <div css={styles.cardList}>
                {supplements.map((item) => (
                    <SupplementCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ResultPage;
