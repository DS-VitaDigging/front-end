/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const container = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 0 1rem;
`;

const iconStyle = css`
  width: 180px;
  height: 180px;
`;

const message = css`
  font-weight: bold;
  font-size: 1.25rem;
  white-space: pre-line;
  margin-top:1.5rem;
`;

const button = css`
  background-color: #FFCF50;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top:0.5rem;

  &:hover {
    background-color: #f5b800;
  }
`;

const BeforeLogin = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login'); // 로그인페이지로 이동!!
  };

  return (
    <div css={container}>
      <img src="/images/icon_pills.svg" alt="아이콘" css={iconStyle} />
      <p css={message}>
        {`아직 로그인 전입니다.
        로그인을 진행해 주세요!`}
      </p>
      <button css={button} onClick={goToLogin}>
        로그인하러 가기
      </button>
    </div>
  );
};

export default BeforeLogin;
