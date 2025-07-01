import { Routes, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import Home from './pages/Home';
=======
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
>>>>>>> Stashed changes

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default AppRouter;