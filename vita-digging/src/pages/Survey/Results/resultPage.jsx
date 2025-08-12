/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';
import { supplements } from '../../../constants/supplementData';
import SupplementCard from './supplementCard';
import { useState } from 'react';
import SupplementDetailModal from './resultDetailModal';

const ResultPage = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div css={styles.wrapper}>
            <h2 css={styles.title}>추천 영양제</h2>
            <span css={styles.plainText}>설문 결과를 바탕으로 추천된 영양제입니다!</span>
            <div css={styles.cardList}>
                {supplements.map((item) => (
                    <SupplementCard 
                        key={item.id} 
                        data={item}
                        onClick={() => setSelected(item)}
                    />
                ))}
            </div>

            {selected && (
                <SupplementDetailModal
                    data={selected} 
                    onClose={() => setSelected(null)} 
                />
            )}
        </div>
    );
};

export default ResultPage;
