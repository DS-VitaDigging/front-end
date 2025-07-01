import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Survey from './pages/Survey/Survey';
import Chat from './pages/Survey/Chat/Chat';
import ChatList from './pages/Survey/ChatList/ChatList';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/survey/chat" element={<Chat />} />
            <Route path="/survey/chat/list" element={<ChatList />} />
        </Routes>
    );
};

export default AppRouter;