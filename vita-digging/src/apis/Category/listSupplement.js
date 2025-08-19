import axiosInstance from "../axiosInstance";

// 영양제 목록 
export const fetchListData = async (category) => {
    try {
      const response = await axiosInstance.get(`/api/products/category/${category}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };