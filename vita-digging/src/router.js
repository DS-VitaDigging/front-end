import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import BeforeLogin from './pages/Mypage/BeforeLogin';
import CategorySelect from './pages/Category/CategorySelect';
import SupplementList from './pages/Category/SupplementList';
import SupplementDetail from './pages/Category/SupplementDetail';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/before-login" element={<BeforeLogin />} />
      <Route path="/category" element={<CategorySelect />} />
      <Route path="/category/:categoryId" element={<SupplementList />} />
      <Route path="/supplement/:supplementId" element={<SupplementDetail />} />
    </Routes>
  );
};

export default AppRouter;
