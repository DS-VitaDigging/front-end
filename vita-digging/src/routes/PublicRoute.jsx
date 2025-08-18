// 로그인 상태일 때 메인페이지로 리다이렉트
import { Navigate } from 'react-router-dom';

const isLoggedIn = () => !!localStorage.getItem('accessToken');

export default function PublicRoute({ children }) {
  return isLoggedIn() ? <Navigate to="/" replace /> : children;
}