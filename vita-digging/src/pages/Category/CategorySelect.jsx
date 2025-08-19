/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './CategorySelect.style';

const categories = [
  { key: 'eyes', label: '눈 건강', icon: '/images/icon_eyes.svg' },
  { key: 'stemina', label: '체력 증진', icon: '/images/icon_stemina.svg' },
  { key: 'intestines', label: '장 건강', icon: '/images/icon_intestines.svg' },
  { key: 'bones', label: '뼈 강화', icon: '/images/icon_bones.svg' },
  { key: 'skin', label: '피부 건강', icon: '/images/icon_skin.svg' },
  { key: 'blood', label: '혈액순환', icon: '/images/icon_blood.svg' },
];

const CategorySelect = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const handleSelect = (key) => {
    if (selected.includes(key)) {
      setSelected([]); // 선택해제시
    } else {
      setSelected([key]); // 단일선택
    }
  };

  const handleComplete = () => {
    if (selected.length > 0) {
      navigate(`/category/${selected[0]}`);
    }
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.textGroup}>
        <div css={styles.title}>원하는 건강 카테고리를 선택해주세요</div>
      </div>
      <div css={styles.grid}>
        {categories.map(({ key, label, icon }) => (
          <div key={key} css={styles.categoryItem}> 
            <div
              css={styles.categoryBox(selected.includes(key))}
              onClick={() => handleSelect(key)}
            >
              <img src={icon} alt={label} css={styles.icon} />
            </div>
            <div css={styles.label}>{label}</div> 
          </div>
        ))}
      </div>
      <button
        css={styles.completeButton}
        onClick={handleComplete}
        disabled={selected.length === 0}
      >
        완료
      </button>
    </div>
  );
};

export default CategorySelect;
