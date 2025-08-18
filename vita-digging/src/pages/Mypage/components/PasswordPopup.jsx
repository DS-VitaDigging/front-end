/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as styles from '../Mypage.style';
import { modifyPassword } from '../../../apis/Mypage/userInfoModify';

const PasswordPopup = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleConfirm = async () => {
    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await modifyPassword(password, confirm);
      alert('비밀번호 변경 성공');
      onClose();
    } catch (error) {
      console.error('비밀번호 변경 실패:', error);
      alert('비밀번호 변경에 실패했습니다.');
    }

  };

  return (
    <div css={styles.popupOverlay}>
      <div css={styles.popup}>
        <span css={styles.closeIcon} onClick={onClose}>×</span>

        <h3 css={styles.popupTitle}>비밀번호 변경하기</h3>

        <div css={styles.popupInputContainer}>
          <label css={styles.popupLabel}>비밀번호 입력</label>
          <input
            type="password"
            placeholder="변경할 비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            css={styles.popupInput}
          />

          <label css={styles.popupLabel}>비밀번호 확인</label>
          <input
            type="password"
            placeholder="변경할 비밀번호를 다시 입력해 주세요."
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            css={styles.popupInput}
          />
        </div>

        <button css={styles.popupButton} onClick={handleConfirm}>확인</button>
      </div>
    </div>
  );
};

export default PasswordPopup;
