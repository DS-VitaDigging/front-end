/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const container = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const iconStyle = css`
  width: 156px;
  height: 156px;
  margin-top: 206px; /* 화면 최상단 기준 */
`;

const message = css`
  font-weight: bold;
  font-size: 22px;
  white-space: pre-line;
  text-align: center;
  margin-top: 46px; /* 아이콘 아래 간격 */
`;

const button = css`
  width: 218px;
  height: 57px;
  background-color: #FFCF50;
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  margin-top: 31px; /* 문구 아래 간격 */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5b800;
  }
`;

const BeforeLogin = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
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
