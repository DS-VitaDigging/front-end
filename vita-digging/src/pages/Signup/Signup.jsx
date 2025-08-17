/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as styles from './Signup.style';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birth: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    passwordFormat: false,
    passwordMatch: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'password') {
      setErrors((prev) => ({
        ...prev,
        passwordFormat: !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      }));
    }

    if (name === 'confirmPassword') {
      setErrors((prev) => ({
        ...prev,
        passwordMatch: value !== form.password,
      }));
    }
  };

  const handleSignup = async () => {
    try {
      const signupData = {
        username: form.id,
        nickname: form.nickname,
        email: form.email,
        password: form.password,
        birthYear: form.birth ? new Date(form.birth).getFullYear() : null,
        gender: form.gender === 'female' ? 'F' : form.gender === 'male' ? 'M' : 'O',
      };

      const res = await axiosInstance.post('/api/users/signup', signupData);
      console.log(res.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div css={styles.wrapper}>
      <button css={styles.backButton} onClick={() => navigate('/login')}>
        <img src="/icons/back.svg" alt="뒤로가기" />
      </button>

      <h1 css={styles.title}>회원가입</h1>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>아이디</label>
        <input type="text" name="id" value={form.id} onChange={handleChange} css={styles.input} />
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>닉네임</label>
        <input type="text" name="nickname" value={form.nickname} onChange={handleChange} css={styles.input} />
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>이메일</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} css={styles.input} />
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>비밀번호</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} css={styles.input} placeholder="비밀번호 형식에 대한 안내" />
        {errors.passwordFormat && <p css={styles.warning}>비밀번호 형식이 일치하지 않습니다.</p>}
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>비밀번호 확인</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} css={styles.input} placeholder="비밀번호를 다시 입력해 주세요" />
        {errors.passwordMatch && <p css={styles.warning}>비밀번호가 일치하지 않습니다.</p>}
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>생년월일</label>
        <p css={styles.description}>더 알맞는 영양제 추천을 위해서 생년월일을 입력해 주세요!</p>
        <input type="date" name="birth" value={form.birth} onChange={handleChange} css={styles.input} />
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>성별</label>
        <p css={styles.description}>더 알맞는 영양제 추천을 위해서 성별을 입력해 주세요!</p>
        <div css={styles.genderGroup}>
          <input type="radio" id="female" name="gender" value="female" onChange={handleChange} checked={form.gender === 'female'} />
          <label htmlFor="female">여자</label>

          <input type="radio" id="male" name="gender" value="male" onChange={handleChange} checked={form.gender === 'male'} />
          <label htmlFor="male">남자</label>

          <input type="radio" id="other" name="gender" value="other" onChange={handleChange} checked={form.gender === 'other'} />
          <label htmlFor="other">기타</label>
        </div>
      </div>

      <button css={styles.signupButton} onClick={handleSignup}>회원가입</button>
    </div>
  );
};

export default Signup;
