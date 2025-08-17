import axiosInstance from "../axiosInstance";

// 프로필 조회
export const getUserProfile = async () => {
    try {
        // 토큰 가져오기
        const token = localStorage.getItem('accessToken');
    
        const response = await axiosInstance.get('/api/member/profiles', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data.data;
      } catch (error) {
        console.error('신체 정보 전송 실패:', error);
        throw error;
      }
  }; 
