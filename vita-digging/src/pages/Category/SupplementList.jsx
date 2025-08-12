/** @jsxImportSource @emotion/react */
import { useParams, useNavigate } from 'react-router-dom';
import * as styles from './SupplementList.style';
import { supplements } from '../../api/supplements';

const categoryInfo = {
  eyes: {
    label: '눈 건강',
    icon: '/images/icon_eyes.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
  eyes: {
    label: '체력 증진',
    icon: '/images/icon_stemina.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    eyes: {
    label: '간 건강',
    icon: '/images/icon_liver.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    eyes: {
    label: '뼈 강화',
    icon: '/images/icon_bones.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    eyes: {
    label: '피부 건강',
    icon: '/images/icon_skin.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  },
    eyes: {
    label: '혈액순환',
    icon: '/images/icon_blood.svg',
    description: '눈의 건강을 유지해 주고, 눈의 피로개선에 도움을 줘요',
  }
};

const SupplementList = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const current = categoryInfo[categoryId];
  const filtered = supplements.filter(s => s.category === current.label);

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
        {filtered.map((item) => (
          <div
            key={item.id}
            css={styles.itemBox}
            onClick={() => navigate(`/supplement/${item.id}`)}
          >
            <div css={styles.imageWrapper}>
              <img src={item.image} alt={item.name} css={styles.image} />
            </div>
            <div css={styles.info}>
              <div css={styles.name}>{item.name}</div>
              <div css={styles.brand}>{item.brand}</div>
              <div css={styles.tags}>
                {item.tags.map(tag => (
                  <span key={tag} css={styles.tag}>{tag}</span>
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
