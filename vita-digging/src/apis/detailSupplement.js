import axiosInstance from "./axiosInstance";

// 영양제 상세 정보 조회
export const getDetailSupplement = async (id, ageGroup) => {
    try {
        const response = await axiosInstance.get(`/api/products/${id}`, {
            params: { 
                ageGroup: ageGroup
            }
        });
        return response.data;
    } catch (error) {
        console.error('영양제 상세정보 조회 실패:', error);
        throw error;
    }
}; 