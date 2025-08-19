import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Survey from './pages/Survey/Survey';
import Chat from './pages/Survey/Chat/Chat';
import ChatList from './pages/Survey/ChatList/ChatList';
import ResultPage from './pages/Survey/Results/resultPage';
import BeforeLogin from './pages/Mypage/BeforeLogin';
import CategorySelect from './pages/Category/CategorySelect';
import SupplementList from './pages/Category/SupplementList';
import SupplementDetail from './pages/Category/SupplementDetail';
import Mypage from './pages/Mypage/Mypage';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
import Community from './pages/Community/Community';

export const AppRouter = () => {
  return (
    <Routes>
      {/* 공개 페이지 */}
      <Route path="/" element={<Home />} />
      <Route path="/before-login" element={<BeforeLogin />} />
      <Route path="/community" element={<Community />} />

      {/* 비로그인 전용 */}
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

      {/* 카테고리 관련 */}
      <Route path="/category" element={<CategorySelect />} />
      <Route path="/category/:categoryId" element={<SupplementList />} />
      <Route path="/supplement/:supplementId" element={<SupplementDetail />} />

      {/* 보호 라우트: 로그인 필요 */}
      <Route element={<ProtectedRoute />}>
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey/chat" element={<Chat />} />
        <Route path="/survey/chat/list" element={<ChatList />} />
        <Route path="/survey/results" element={<ResultPage />} />
        <Route path="/mypage" element={<Mypage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
