/** @jsxImportSource @emotion/react */
import * as styles from '../Mypage.style';

const PasswordPopup = ({ onClose }) => {
  return (
    <div css={styles.popupOverlay}>
      <div css={styles.popup}>
        <h3 css={styles.popupTitle}>비밀번호 변경하기</h3>

        <label css={styles.popupLabel}>비밀번호 입력</label>
        <input
          type="password"
          placeholder="변경할 비밀번호를 입력해 주세요"
          css={styles.popupInput}
        />

        <label css={styles.popupLabel}>비밀번호 확인</label>
        <input
          type="password"
          placeholder="변경할 비밀번호를 다시 입력해 주세요."
          css={styles.popupInput}
        />

        <button css={styles.popupButton} onClick={onClose}>확인</button>
      </div>
    </div>
  );
};

export default PasswordPopup;
