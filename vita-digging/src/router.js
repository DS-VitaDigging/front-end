import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage/Mypage';
import BeforeLogin from './pages/Mypage/BeforeLogin';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/before-login" element={<BeforeLogin />} />
    </Routes>
  );
};

export default AppRouter;
