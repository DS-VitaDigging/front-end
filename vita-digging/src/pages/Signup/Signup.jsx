/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as styles from './Signup.style';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
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

    if (name === 'passwordConfirm') {
      setErrors((prev) => ({
        ...prev,
        passwordMatch: value !== form.password,
      }));
    }
  };

  const handleSignup = async () => {
    if (errors.passwordFormat || errors.passwordMatch) {
      alert('비밀번호를 확인해주세요.');
      return;
    }

    try {
      const signupData = {
        id: form.id,
        name: form.name,
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordConfirm,
        birth: form.birth,
        gender: 
          form.gender === 'female' ? '여자' 
          : form.gender === 'male' ? '남자' : '기타',
      };

      console.log('🔍 전송 데이터:', signupData);

      const res = await axiosInstance.post('/api/member/signup', signupData);
      console.log(res.data);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
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
        <input type="text" name="name" value={form.name} onChange={handleChange} css={styles.input} />
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>이메일</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} css={styles.input} />
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>비밀번호</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          css={styles.input}
          placeholder="6자 이상의 영문자와 숫자 조합"
        />
        {errors.passwordFormat && <p css={styles.warning}>비밀번호 형식이 일치하지 않습니다.</p>}
      </div>

      <div css={styles.fieldGroup}>
        <label css={styles.label}>비밀번호 확인</label>
        <input
          type="password"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleChange}
          css={styles.input}
          placeholder="비밀번호를 다시 입력해 주세요"
        />
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
