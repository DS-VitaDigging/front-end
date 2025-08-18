import axiosInstance from "../axiosInstance";

/**
 * 추천 결과
 * @param {Array} messages 
 * @returns {Promise}
 */
export const getRecommendedResult = async (messages) => {
    try {
      console.log('전송할 메시지:', messages);

      // 토큰 가져오기
      const token = localStorage.getItem('accessToken');
      
      const response = await axiosInstance.post('/api/chat/recommend', messages,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('API 응답:', response.data);
      return response.data;
    } catch (error) {
      console.error('결과 조회 실패:', error);
      console.error('에러 상세:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        url: error.config?.url
      });
      throw error;
    }
  };