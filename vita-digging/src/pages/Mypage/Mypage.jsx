/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as styles from './Mypage.style';
import NicknamePopup from './components/NicknamePopup';
import PasswordPopup from './components/PasswordPopup';
import { getUserProfile } from '../../apis/Mypage/profile';
import BeforeLogin from './BeforeLogin';

const Mypage = () => {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [nicknamePopupVisible, setNicknamePopupVisible] = useState(false);
  const [passwordPopupVisible, setPasswordPopupVisible] = useState(false);

  const token = localStorage.getItem('accessToken');

  const fetchUserProfile = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const profile = await getUserProfile();
      setUserProfile(profile);
    } catch (err) {
      console.error('프로필 조회 실패:', err);
      setError('프로필 정보를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchUserProfile();
  }, [token]);

  if (!token) return <BeforeLogin />;
  if (loading) return <div css={styles.wrapper}>로딩 중...</div>;
  if (error) return <div css={styles.wrapper}>{error}</div>;

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