/** @jsxImportSource @emotion/react */
import * as styles from '../Mypage.style';
import axiosInstance from '../../../apis/axiosInstance';

const NicknamePopup = ({ nickname, onChange, onClose, userId }) => {
  const handleConfirm = async () => {
    try {
      await axiosInstance.patch(`/api/users/${userId}/nickname`, {
        nickname,
      });
      onClose();
    } catch (error) {
      console.error('닉네임 변경 실패:', error);
    }
  };

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
        <button css={styles.popupButton} onClick={handleConfirm}>확인</button>
      </div>
    </div>
  );
};

export default NicknamePopup;
