/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as styles from './Mypage.style';
import NicknamePopup from './components/NicknamePopup';
import PasswordPopup from './components/PasswordPopup';

const Mypage = () => {
  const [form, setForm] = useState(null);
  const [pills, setPills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [nicknamePopupVisible, setNicknamePopupVisible] = useState(false);
  const [passwordPopupVisible, setPasswordPopupVisible] = useState(false);

  useEffect(() => {
    const dummyUser = {
      id: 'duksung123',
      nickname: '김덕성',
      email: 'duskung@duksung.com',
      birth: '2003-07-08',
    };

    const dummyPills = [
      {
        id: 1,
        name: '비타민C 1000',
        manufacturer: '고려은단',
        image: '/images/dummy_pill.png',
      },
      {
        id: 2,
        name: '오메가3 골드',
        manufacturer: '비타랩',
        image: '/images/dummy_pill.png',
      },
    ];

    setForm(dummyUser);
    setPills(dummyPills);
    setLoading(false);
  }, []);

  if (loading) return <div css={styles.wrapper}>로딩 중...</div>;
  if (error) return <div css={styles.wrapper}>{error}</div>;

  const koreanAge = 2025 - parseInt(form.birth?.slice(0, 4)) + 1;
  const intlAge = 2025 - parseInt(form.birth?.slice(0, 4));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div css={styles.wrapper}>
      {/* 상단 프로필 섹션 */}
      <section css={styles.profileSection}>
        <div css={styles.profileInfo}>
          <img src="/icons/profile.svg" alt="프로필" css={styles.profileIcon} />
          <span css={styles.nickname}>{form.nickname}</span>
          <button css={styles.editButton} onClick={() => setNicknamePopupVisible(true)}>
            <img src="/icons/change_nickname.svg" alt="닉네임 수정" />
          </button>
        </div>
        <button css={styles.logoutButton}>
          <img src="/icons/logout.svg" alt="로그아웃" />
        </button>
      </section>

      {/* 내 정보 섹션 */}
      <section css={styles.infoSection}>
        <h2 css={styles.sectionTitle}>내 정보</h2>
        <div css={styles.infoTable}>
          <div>나이</div><div>{koreanAge}세 (만 {intlAge}세)</div>
          <div>아이디</div><div>{form.id}</div>
          <div>이메일</div><div>{form.email}</div>
        </div>
        <button css={styles.changePassword} onClick={() => setPasswordPopupVisible(true)}>
          비밀번호 변경하기
        </button>
      </section>

      {/* 나의 영양제 섹션 */}
      <section css={styles.pillSection}>
        <div css={styles.pillHeader}>
          <h2 css={styles.sectionTitle}>나의 영양제</h2>
          <button css={styles.moreButton}>
            <img src="/icons/hyperlink_mypills.svg" alt="더 보기" />
          </button>
        </div>
        <div css={styles.pillList}>
          {pills.map((pill) => (
            <div key={pill.id} css={styles.pillItem}>
              <img src={pill.image} alt={pill.name} css={styles.pillImage} />
              <div>
                <p css={styles.pillManufacturer}>{pill.manufacturer}</p>
                <p css={styles.pillName}>{pill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 닉네임 팝업 */}
      {nicknamePopupVisible && (
        <NicknamePopup
          nickname={form.nickname}
          onChange={handleChange}
          onClose={() => setNicknamePopupVisible(false)}
        />
      )}

      {/* 비밀번호 팝업 */}
      {passwordPopupVisible && (
        <PasswordPopup
          onClose={() => setPasswordPopupVisible(false)}
        />
      )}
    </div>
  );
};

export default Mypage;
