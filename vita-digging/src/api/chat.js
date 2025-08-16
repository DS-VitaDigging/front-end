import axiosInstance from '../apis/axiosInstance';

/* 신체 정보 전송 */
export const sendBodyInfo = async (bodyInfo) => {
  try {
    // 토큰 가져오기
    const token = localStorage.getItem('accessToken');

    const response = await axiosInstance.post('/api/surveys/body', bodyInfo, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('신체 정보 전송 실패:', error);
    throw error;
  }
};

/**
 * 채팅 메시지를 백엔드로 전송
 * @param {Array} messages 
 * @returns {Promise}
 */
export const sendChatMessage = async (messages) => {
  try {
    console.log('전송할 메시지:', messages);
    console.log('JSON 형태:', JSON.stringify({ messages }, null, 2));
    
    // 토큰 가져오기
    const token = localStorage.getItem('accessToken');
    
    const response = await axiosInstance.post('/api/chat', 
      { messages },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    console.log('API 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('채팅 메시지 전송 실패:', error);
    console.error('에러 상세:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url
    });
    throw error;
  }
};

/**
 * ChatGPT API 응답에서 메시지를 추출
 * @param {Object} apiResponse - ChatGPT API 응답
 * @returns {Object} 메시지 객체 { role: 'assistant', content: '내용' }
 */
export const extractMessageFromResponse = (apiResponse) => {
    // 응답 구조 확인
  if (apiResponse.choices && apiResponse.choices[0]) {
    const message = apiResponse.choices[0].message;

    // 메시지 추출
    return {
      role: 'assistant',
      content: message.content
    };
  }
  throw new Error('잘못된 API 응답 형식');
};
