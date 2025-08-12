/** @jsxImportSource @emotion/react */
import * as styles from '../Mypage.style';

const NicknamePopup = ({ nickname, onChange, onClose }) => {
  return (
    <div css={styles.popupOverlay}>
      <div css={styles.popup}>
        <h3 css={styles.popupTitle}>닉네임 변경하기</h3>
        <input
          type="text"
          name="nickname"
          placeholder="변경하고 싶은 닉네임을 입력해 주세요"
          value={nickname}
          onChange={onChange}
          css={styles.popupInput}
        />
        <button css={styles.popupButton} onClick={onClose}>확인</button>
      </div>
    </div>
  );
};

export default NicknamePopup;
