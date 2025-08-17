/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import CommonHeader from './components/CommonHeader';
import * as styles from './Survey.style';
import { useState, useEffect } from 'react';
import { sendChatMessage, sendBodyInfo } from '../../apis/Survey/chat';
import { INITIAL_CHAT_MESSAGE } from '../../constants/chatData';
import { getUserProfile } from '../../apis/Mypage/profileApi';

const Survey = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [loading, setLoading] = useState(false);
    const [userProfile, setUserProfile] = useState([]);
    const navigate = useNavigate();

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

    const goChat = async () => {
        if(!height || !weight) {
            alert('모든 항목을 입력해주세요.');
            return;
        }

        setLoading(true);
        try {
            // 신체 정보 전송
            const bodyInfo = {
                height,
                weight
            };

            await sendBodyInfo(bodyInfo);

            // 초기 메시지로 채팅 시작
            const initialMessages = [{
                role: 'user',
                content: INITIAL_CHAT_MESSAGE
            }];
            
            const response = await sendChatMessage(initialMessages);
            
            // 응답과 함께 채팅 페이지로 이동
            navigate('/survey/chat', { 
                state: { 
                    initialResponse: response,
                    chatHistory: initialMessages
                }
            });
        } catch (error) {
            console.error('채팅 시작 실패:', error);
            alert('서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div css={styles.wrapper}>
            <CommonHeader />

            <div css={styles.card}>
                <div css={styles.title}>{userProfile.name} 님의 신체정보</div>

                <div css={styles.row}>
                    <span css={styles.label}>나이</span>
                    <span css={styles.value}>{userProfile.age}</span> 
                </div>

                <div css={styles.row}>
                    <span css={styles.label}>성별</span>
                    {/* <span css={styles.value}>{userProfile.gender}</span>  */}
                </div>

                <div css={styles.row}>
                    <span css={styles.label}>신장</span>
                    <input
                        css={styles.input}
                        type="text"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <span css={styles.inputText}>cm</span>
                </div>

                <div css={styles.row}>
                    <span css={styles.label}>몸무게</span>
                    <input
                        css={styles.input}
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <span css={styles.inputText}>kg</span>
                </div>

                <button onClick={goChat} css={styles.button} disabled={loading}>
                    {loading ? '채팅 준비 중...' : '설문하기'}
                </button>
            </div>
        </div>
    );
};

export default Survey;
