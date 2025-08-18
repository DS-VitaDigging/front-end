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

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/beforeLogin" element={<BeforeLogin />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/survey/chat" element={<Chat />} />
      <Route path="/survey/chat/list" element={<ChatList />} />
      <Route path="/survey/results" element={<ResultPage />} />
      <Route path="/category" element={<CategorySelect />} />
      <Route path="/category/:categoryId" element={<SupplementList />} />
      <Route path="/supplement/:supplementId" element={<SupplementDetail />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
};

export default AppRouter;
