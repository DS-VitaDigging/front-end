/** @jsxImportSource @emotion/react */
import * as styles from '../Chat/Chat.style';
import { useState, useEffect } from 'react';
import { getUserProfile } from '../../../apis/Mypage/profile';

const ChatResultMessage = ({ onClick }) => {
    const [userProfile, setUserProfile] = useState({});

    const fetchUserProfile = async () => {
        try {
            const userProfile = await getUserProfile();
            setUserProfile(userProfile);
        } catch (error) {
            console.error('프로필 조회 실패:', error);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const handleClick = () => {
        if (onClick) {
            onClick(); 
        }
    }

    return (
        <div css={styles.resultContainer}>
            <div css={styles.firstResultMessage}>
                <span css={styles.resultTitle}>
                    {userProfile.name || '사용자'}님을 위한 영양제를 찾아드렸어요.
                </span>
                <p css={styles.resultDesc}>
                    답변하신 내용을 바탕으로 영양제를 찾고 있습니다. 잠시만 기다려주세요.
                </p>
            </div>

            <div css={styles.secondResultMessage}>
                <span css={styles.resultTitle}>
                    {userProfile.name || '사용자'}님에게 이 영양제를 추천합니다.
                </span>
                <p css={styles.resultDesc}>
                    진행한 설문을 기반으로 추천된 영양제입니다.
                </p>
                
                <div css={styles.resultButtonContainer}>
                    <button css={styles.resultButton} onClick={handleClick}>
                        확인하러 가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatResultMessage;
