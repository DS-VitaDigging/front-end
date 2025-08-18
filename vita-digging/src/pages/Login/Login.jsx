/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as styles from './Login.style';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const Login = () => {
  const [form, setForm] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post('/api/member/login', {
        id: form.id,
        password: form.password,
      });

      const { token } = res.data.data;
      localStorage.setItem('accessToken', token);
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <div css={styles.wrapper}>
      <img src="/images/login_banner.svg" alt="Login_Banner" css={styles.logo} />

      <div css={styles.fieldGroup}>
        <label htmlFor="id" css={styles.label}>아이디</label>
        <input
          id="id"
          name="id"
          type="text"
          value={form.id}
          onChange={handleChange}
          css={styles.input}
        />
      </div>

      <div css={styles.fieldGroup}>
        <label htmlFor="password" css={styles.label}>비밀번호</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          css={styles.input}
        />
      </div>

      <div css={styles.buttonGroup}>
        <button css={styles.loginButton} onClick={handleLogin}>로그인</button>
        <button css={styles.signupButton} onClick={() => navigate('/signup')}>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
