import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
        </Routes>
    );
};

export default AppRouter;