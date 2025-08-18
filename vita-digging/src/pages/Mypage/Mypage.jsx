/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as styles from './Mypage.style';
import NicknamePopup from './components/NicknamePopup';
import PasswordPopup from './components/PasswordPopup';
import { getUserProfile } from '../../apis/Mypage/profile';

const Mypage = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [nicknamePopupVisible, setNicknamePopupVisible] = useState(false);
  const [passwordPopupVisible, setPasswordPopupVisible] = useState(false);

  const fetchUserProfile = async () => {
    try {
        setLoading(true);
        const userProfile = await getUserProfile();
        setUserProfile(userProfile);
    } catch (error) {
        console.error('프로필 조회 실패:', error);
        setError(true);
    }
    finally {
        setLoading(false);
    }
  };

  useEffect(() => {
      fetchUserProfile();
  }, []);

  if (loading) return <div css={styles.wrapper}>로딩 중...</div>;
  if (error) return <div css={styles.wrapper}>{error}</div>;

  // 닉네임 변경 성공 후 
  const handleNicknameChangeSuccess = (newNickname) => {
    setUserProfile(prev => ({
      ...prev,
      name: newNickname
    }));
    setNicknamePopupVisible(false);
  };

  return (
    <div css={styles.wrapper}>
      <section css={styles.profileSection}>
        <div css={styles.profileInfo}>
          <img src="/icons/profile.svg" alt="프로필" css={styles.profileIcon} />
          <div css={styles.nicknameContainer}>
            <span css={styles.nickname}>{userProfile.name}</span>
            <button css={styles.editButton} onClick={() => setNicknamePopupVisible(true)}>
              <img src="/icons/change_nickname.svg" alt="닉네임 수정" />
            </button>
          </div>
        </div>
      </section>

      <section css={styles.infoSection}>
        <h2 css={styles.sectionTitle}>내 정보</h2>
        <div css={styles.infoTable}>
          <div>나이</div><div>{userProfile.age}</div>
          <div>아이디</div><div>{userProfile.username}</div>
          <div>이메일</div><div>{userProfile.email}</div>
        </div>
        <button css={styles.changePassword} onClick={() => setPasswordPopupVisible(true)}>
          비밀번호 변경하기
        </button>
      </section>

      {/* 복용 중 영양제 개발 x */}
      {/* <section css={styles.pillSection}>
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
      </section> */}

      {nicknamePopupVisible && (
        <NicknamePopup
          onClose={() => setNicknamePopupVisible(false)}
          onSuccess={handleNicknameChangeSuccess}
        />
      )}

      {passwordPopupVisible && (
        <PasswordPopup
          onClose={() => setPasswordPopupVisible(false)}
        />
      )}
    </div>
  );
};

export default Mypage;
