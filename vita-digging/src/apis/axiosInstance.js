import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // 401 Unauthorized 시 세션 만료 처리
        if (error.response && error.response.status === 401) {
            const token = localStorage.getItem('accessToken');
            
            // 토큰이 있는데 401이면 세션 만료
            if (token) {
                alert('세션이 만료되었습니다. 다시 로그인해주세요.');
                localStorage.removeItem('accessToken');
                window.location.reload(); 
            }
        }
        
        return Promise.reject(error);
    }
);

export default axiosInstance;