import axiosInstance from "../axiosInstance";

export const modifyName = async (name) => {
    try {
        // 토큰 가져오기
        const token = localStorage.getItem('accessToken');
    
        const response = await axiosInstance.put('/api/member/profiles/name', 
            { name },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
        );
        return response.data.data;
      } catch (error) {
        console.error('닉네임 변경 실패:', error);
        throw error;
      }
  }; 

export const modifyPassword = async (password, passwordConfirm) => {
    try {
        // 토큰 가져오기
        const token = localStorage.getItem('accessToken');
    
        const response = await axiosInstance.put('/api/member/profiles/password', 
            { password, passwordConfirm },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
        );
        return response.data.data;
      } catch (error) {
        console.error('비밀번호 변경 실패:', error);
        throw error;
      }
}
