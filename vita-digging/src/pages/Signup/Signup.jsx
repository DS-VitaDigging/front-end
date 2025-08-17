/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as styles from './Signup.style';
import { useNavigate } from 'react-router-dom';

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
    const { id, name, email, password, passwordConfirm, birth, gender } = form;

    if (errors.passwordFormat || errors.passwordMatch) {
      alert('비밀번호를 확인해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/member/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          password,
          passwordConfirm,
          email,
          birth,
          gender,
        }),
      });

      if (!response.ok) {
        throw new Error('회원가입 요청 실패');
      }

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
          <input type="radio" id="female" name="gender" value="F" onChange={handleChange} checked={form.gender === 'F'} />
          <label htmlFor="female">여자</label>

          <input type="radio" id="male" name="gender" value="M" onChange={handleChange} checked={form.gender === 'M'} />
          <label htmlFor="male">남자</label>

          <input type="radio" id="other" name="gender" value="O" onChange={handleChange} checked={form.gender === 'O'} />
          <label htmlFor="other">기타</label>
        </div>
      </div>

      <button css={styles.signupButton} onClick={handleSignup}>회원가입</button>
    </div>
  );
};

export default Signup;
