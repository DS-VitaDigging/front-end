/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as styles from './Mypage.style';
import NicknamePopup from './components/NicknamePopup';
import PasswordPopup from './components/PasswordPopup';
import axiosInstance from '../../apis/axiosInstance';
import BeforeLogin from './BeforeLogin';

const Mypage = () => {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [nicknamePopupVisible, setNicknamePopupVisible] = useState(false);
  const [passwordPopupVisible, setPasswordPopupVisible] = useState(false);

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await axiosInstance.get(
          `http://localhost:8080/api/member/profiles`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setForm(res.data.data);
      } catch (err) {
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  if (!token) {
    return <BeforeLogin />;
  }

  if (loading) return <div css={styles.wrapper}>로딩 중...</div>;
  if (error) return <div css={styles.wrapper}>{error}</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div css={styles.wrapper}>
      <section css={styles.profileSection}>
        <div css={styles.profileInfo}>
          <img src="/icons/profile.svg" alt="프로필" css={styles.profileIcon} />
          <span css={styles.nickname}>{form.name}</span>
          <button css={styles.editButton} onClick={() => setNicknamePopupVisible(true)}>
            <img src="/icons/change_nickname.svg" alt="닉네임 수정" />
          </button>
        </div>
      </section>

      <section css={styles.infoSection}>
        <h2 css={styles.sectionTitle}>내 정보</h2>
        <div css={styles.infoTable}>
          <div>나이</div><div>{form.age}</div>
          <div>아이디</div><div>{form.id}</div>
          <div>이메일</div><div>{form.email}</div>
        </div>
        <button css={styles.changePassword} onClick={() => setPasswordPopupVisible(true)}>
          비밀번호 변경하기
        </button>
      </section>

      {nicknamePopupVisible && (
        <NicknamePopup
          nickname={form.name}
          onChange={handleChange}
          onClose={() => setNicknamePopupVisible(false)}
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
