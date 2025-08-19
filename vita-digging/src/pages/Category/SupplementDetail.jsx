/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetailSupplement } from '../../apis/detailSupplement';
import { getAgeGroupFromString } from '../../utils/ageUtils';
import { getUserProfile } from '../../apis/Mypage/profile';
import * as styles from './SupplementDetail.style';

const SupplementDetail = () => {
  const { supplementId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!supplementId) throw new Error('supplementId가 없습니다.');

        let userAge;

        // 로그인 상태라면 사용자 나이 가져오기
        const token = localStorage.getItem('accessToken');
        if (token) {
          try {
            const profile = await getUserProfile();
            userAge = profile.age;
          } catch (profileError) {
            console.warn('프로필 조회 실패, 기본 연령대 사용');
          }
        }

        const ageGroup = getAgeGroupFromString(userAge);
        
        const detailData = await getDetailSupplement(supplementId, ageGroup);
        setItem(detailData);
        
      } catch (err) {
        console.error('상세 정보 로딩 실패:', err);
        setError('영양제 상세정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [supplementId]);

  if (loading) return <div css={styles.wrapper}>로딩 중...</div>;
  if (error) return <div css={styles.wrapper}>{error}</div>;
  if (!item) return null;

  return (
    <div css={styles.wrapper}>
      <div css={styles.topSection}>
        <div css={styles.imageWrapper}>
          <img src={item.imageUrl || '/default-image.png'} alt={item.name} css={styles.image} />
        </div>
        <div css={styles.info}>
          <div css={styles.name}>{item.name}</div>
          <div css={styles.brand}>{item.manufacturer || '제조사 정보 없음'}</div>
          <a href={item.purchaseLink} target="_blank" rel="noopener noreferrer" css={styles.buyButton}>
            최저가 구매
          </a>
        </div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>성분</div>
        <div css={styles.sectionContent}>{item.ingredients}</div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>효능</div>
        <div css={styles.sectionContent}>{item.efficacy}</div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>복용법</div>
        <div css={styles.sectionContent}>{item.instructions}</div>
      </div>

      <div css={styles.section}>
        <div css={styles.sectionTitle}>주의사항</div>
        <div css={styles.sectionContent}>{item.precautions}</div>
      </div>
    </div>
  );
};

export default SupplementDetail;
