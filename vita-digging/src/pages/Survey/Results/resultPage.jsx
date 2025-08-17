/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';
import SupplementCard from './supplementCard';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SupplementDetailModal from './resultDetailModal';
import { getRecommendedResult } from '../../../apis/Survey/result';

const ResultPage = () => {
    const [selected, setSelected] = useState(null);
    const [supplements, setSupplements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const { finalGptResponse } = location.state || {};
                
                if (!finalGptResponse) {
                    setError('GPT 응답 데이터가 없습니다.');
                    return;
                }

                setLoading(true);

                const result = await getRecommendedResult(finalGptResponse);
                
                setSupplements(result.recommendations || result || []);
                
            } catch (err) {
                console.error('추천 결과 조회 실패:', err);
                setError('추천 결과를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, [location.state]);

    if (loading) {
        return (
            <div css={styles.wrapper}>
                <div css={styles.loadingContainer}>
                    추천 결과를 분석 중입니다...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div css={styles.wrapper}>
                <div css={styles.errorContainer}>
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div css={styles.wrapper}>
            <h2 css={styles.title}>추천 영양제</h2>
            <span css={styles.plainText}>설문 결과를 바탕으로 추천된 영양제입니다!</span>
            <div css={styles.cardList}>
                {supplements.map((item, name) => (
                    <SupplementCard 
                        key={name} 
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
