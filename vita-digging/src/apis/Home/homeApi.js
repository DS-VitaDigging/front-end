import axiosInstance from '../axiosInstance';

/**
 * @param {string} ageGroup - 연령대
 * @returns {Promise} API 응답 데이터
 */

// 연령대별 인기 제품 조회
export const getPopularProductsByAge = async (ageGroup) => {
  try {
    const response = await axiosInstance.get('/api/products/popular', {
      params: { ageGroup }
    });
    return response.data;
  } catch (error) {
    console.error('연령대별 인기 제품 조회 실패:', error);
    throw error;
  }
}; 