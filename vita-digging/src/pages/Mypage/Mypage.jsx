/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as styles from './Mypage.style';
import NicknamePopup from './components/NicknamePopup';
import PasswordPopup from './components/PasswordPopup';
import axiosInstance from '../../apis/axiosInstance';

const Mypage = () => {
  const [form, setForm] = useState(null);
  const [pills, setPills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [nicknamePopupVisible, setNicknamePopupVisible] = useState(false);
  const [passwordPopupVisible, setPasswordPopupVisible] = useState(false);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await axiosInstance.get(`/api/users/${userId}`);
        const pillsRes = await axiosInstance.get(`/api/my-supplements?userId=${userId}`);

        setForm(userRes.data);
        setPills(pillsRes.data);
      } catch (err) {
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

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

      <section css={styles.infoSection}>
        <h2 css={styles.sectionTitle}>내 정보</h2>
        <div css={styles.infoTable}>
          <div>나이</div><div>{koreanAge}세 (만 {intlAge}세)</div>
          <div>아이디</div><div>{form.username}</div>
          <div>이메일</div><div>{form.email}</div>
        </div>
        <button css={styles.changePassword} onClick={() => setPasswordPopupVisible(true)}>
          비밀번호 변경하기
        </button>
      </section>

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

      {nicknamePopupVisible && (
        <NicknamePopup
          nickname={form.nickname}
          onChange={handleChange}
          onClose={() => setNicknamePopupVisible(false)}
          userId={userId}
        />
      )}

      {passwordPopupVisible && (
        <PasswordPopup
          onClose={() => setPasswordPopupVisible(false)}
          userId={userId}
        />
      )}
    </div>
  );
};

export default Mypage;
