/** @jsxImportSource @emotion/react */
import * as styles from './resultPage.style';
import SupplementCard from './supplementCard';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SupplementDetailModal from './resultDetailModal';
import { getRecommendedResult } from '../../../apis/Survey/result';
import { getDetailSupplement } from '../../../apis/detailSupplement';
import { getUserProfile } from '../../../apis/Mypage/profile';
import { getAgeGroupFromString } from '../../../utils/ageUtils';  // 🔥 추가

const ResultPage = () => {
    const [selected, setSelected] = useState(null);
    const [supplements, setSupplements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);
    const [userProfile, setUserProfile] = useState({});  // 🔥 추가
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 사용자 프로필과 추천 결과 동시 로딩
                const [profileData, recommendationData] = await Promise.all([
                    getUserProfile(),
                    (async () => {
                        const { finalGptResponse } = location.state || {};
                        if (!finalGptResponse) {
                            throw new Error('GPT 응답 데이터가 없습니다.');
                        }
                        return await getRecommendedResult(finalGptResponse);
                    })()
                ]);

                setUserProfile(profileData);
                setSupplements(recommendationData.recommendations || recommendationData || []);
                
            } catch (err) {
                console.error('데이터 로딩 실패:', err);
                setError(err.message || '데이터를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        setLoading(true);
        fetchData();
    }, [location.state]);

    // 상세 정보 모달 
    const handleCardClick = async (item) => {
        setDetailLoading(true);
        try {
            // 사용자 나이에서 ageGroup 계산
            const ageGroup = getAgeGroupFromString(userProfile.age);
            
            const detailData = await getDetailSupplement(item.id, ageGroup);
            
            setSelected(detailData);

        } catch (error) {
            console.error('상세 정보 조회 실패:', error);
        } finally {
            setDetailLoading(false);
        }
    };

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
                {supplements.map((item) => (
                    <SupplementCard 
                        key={item.id} 
                        data={item}
                        onClick={() => handleCardClick(item)}  
                    />
                ))}
            </div>

            {selected && !detailLoading && (
                <SupplementDetailModal
                    data={selected} 
                    onClose={() => setSelected(null)} 
                />
            )}
        </div>
    );
};

export default ResultPage;
