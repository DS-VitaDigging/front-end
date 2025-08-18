/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as styles from '../Mypage.style';
import { modifyName } from '../../../apis/Mypage/userInfoModify';

const NicknamePopup = ({ onClose, onSuccess }) => {
  const [newNickname, setNewNickname] = useState('');
  
  const handleConfirm = async () => {
    if (!newNickname.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    try {
      await modifyName(newNickname);
      alert('닉네임 변경 성공');
      
      // 부모 컴포넌트에 새 닉네임 전달
      if (onSuccess) {
        onSuccess(newNickname);
      } else {
        onClose();
      }
    }
    catch (error) {
      console.error('닉네임 변경 실패:', error);
      alert('닉네임 변경에 실패했습니다.');
    }
  };

  return (
    <div css={styles.popupOverlay}>
      <div css={styles.popup}>
        <span css={styles.closeIcon} onClick={onClose}>×</span>
      
        <h3 css={styles.popupTitle}>닉네임 변경하기</h3>
        <input
          type="text"
          name="nickname"
          placeholder="변경하고 싶은 닉네임을 입력해 주세요"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
          css={styles.popupInput}
        />
        <button css={styles.popupButton} onClick={handleConfirm}>확인</button>
      </div>
    </div>
  );
};

export default NicknamePopup;
