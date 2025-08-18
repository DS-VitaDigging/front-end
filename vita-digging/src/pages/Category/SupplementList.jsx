/** @jsxImportSource @emotion/react */
import { useParams, useNavigate } from 'react-router-dom';
import * as styles from './SupplementList.style';
import axios from 'axios';
import { useState, useEffect } from 'react';

const categoryInfo = {
  eyes: {
    label: '눈 건강',
    icon: '/images/icon_eyes.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
  stemina: {
    label: '체력 증진',
    icon: '/images/icon_stemina.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    liver: {
    label: '간 건강',
    icon: '/images/icon_liver.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    bones: {
    label: '뼈 강화', 
    icon: '/images/icon_bones.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    skin: {
    label: '피부 건강',
    icon: '/images/icon_skin.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    blood: {
    label: '혈액순환',
    icon: '/images/icon_blood.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  }
};

const SupplementList = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [supplements, setSupplements] = useState([]);

  const current = categoryInfo[categoryId];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/products/category/${current.label}`);
        setSupplements(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [categoryId]);

  return (
    <div css={styles.wrapper}>
      <div css={styles.headerSection}>
        <img src={current.icon} alt={current.label} css={styles.icon} />
        <h2 css={styles.title}>{current.label}</h2>
      </div>
      <div css={styles.descriptionBox}>
        {current.description}
      </div>
      <div css={styles.listWrapper}>
        {supplements.map((item) => (
          <div
            key={item.id}
            css={styles.itemBox}
            onClick={() => navigate(`/supplement/${item.id}`)}
          >
            <div css={styles.imageWrapper}>
              <img src={item.imageUrl || '../../images/image_pills.png'} alt={item.name} css={styles.image} />
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
        ))}
      </div>
    </div>
  );
};

export default SupplementList;
