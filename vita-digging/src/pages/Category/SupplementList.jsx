/** @jsxImportSource @emotion/react */
import { useParams, useNavigate } from 'react-router-dom';
import * as styles from './SupplementList.style';
import { useState, useEffect } from 'react';
import { fetchListData } from '../../apis/Category/listSupplement';

const categoryInfo = {
  eyes: {
    label: '눈 건강',
    icon: '/images/icon_eyes.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
  stemina: {
    label: '체력 증진',
    icon: '/images/icon_stemina.svg',
    description: '체력을 높여주고, 피로 회복에 도움을 줘요',
  },
  intestines: {
    label: '장 건강',
    icon: '/images/icon_intestines.svg',
    description: '간의 기능을 보호하고, 해독 작용에 도움을 줘요',
  },
  bones: {
    label: '뼈 강화', 
    icon: '/images/icon_bones.svg',
    description: '뼈를 튼튼하게 하고, 골밀도 유지에 도움을 줘요',
  },
  skin: {
    label: '피부 건강',
    icon: '/images/icon_skin.svg',
    description: '피부를 촉촉하게 하고, 탄력 개선에 도움을 줘요',
  },
  blood: {
    label: '혈액순환',
    icon: '/images/icon_blood.svg',
    description: '혈액순환을 원활하게 하고, 활력 유지에 도움을 줘요',
  }
};

const SupplementList = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [supplements, setSupplements] = useState([]);

  const current = categoryInfo[categoryId];

  useEffect(() => {
    const loadSupplements = async () => {

      if (!current) {
        console.error('current가 없음');
        return;
      }
      
      try {
        let data = await fetchListData(current.label);
        setSupplements(data || []);
      } catch (err) {
        console.error('영양제 목록 조회 실패:', err);
      }
    };

    loadSupplements();
  }, [categoryId, current]);

  return (
    <div css={styles.wrapper}>
      <div css={styles.headerSection}>
        <img src={current?.icon} alt={current?.label} css={styles.icon} />
        <h2 css={styles.title}>{current?.label}</h2>
      </div>
      <div css={styles.descriptionBox}>
        {current?.description}
      </div>
      <div css={styles.listWrapper}>
        {supplements.length > 0 ? (
          supplements.map((item) => (
            <div
              key={item.id}
              css={styles.itemBox}
              onClick={() => navigate(`/supplement/${item.id}`)}
            >
              <div css={styles.imageWrapper}>
                <img src={item.imageUrl || '/images/image_pills.png'} alt={item.name} css={styles.image} />
              </div>
              <div css={styles.info}>
                <div css={styles.name}>{item.name}</div>
                <div css={styles.brand}>{item.manufacturer || '제조사 정보 없음'}</div>
                <div css={styles.tags}>
                  {item.efficacy?.split('/').map((tag, i) => (
                    <span key={i} css={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div css={styles.emptyMessage}>해당 카테고리에 영양제가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default SupplementList;
