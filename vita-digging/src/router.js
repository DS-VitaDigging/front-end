import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Chat from './pages/Survey/Chat/Chat';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/survey/chat" element={<Chat />} />
        </Routes>
    );
};

export default AppRouter;