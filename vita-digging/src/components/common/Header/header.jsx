/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = localStorage.getItem('accessToken');
        return !!token;
    });
    const location = useLocation();

    const handleLogout = () => {
        alert('로그아웃 되었습니다.');
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('accessToken'));
    }, [location.pathname]);

    return (
        <header css={headerWrapper}>
            <img
                src={"/icons/headerLogo.svg"}
                alt="헤더 로고"
                css={logoImg}
            />
            {isLoggedIn && (
                <button css={logoutButton} onClick={handleLogout}>
                    <img src="/icons/logout.svg" alt="로그아웃" />
                </button>
            )}
        </header>
    );
}

const headerWrapper = css`
    display: flex;
    padding: 1.3rem 0 1.3rem 0;
    width: 40.2rem;
    height: 5rem;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    z-index: 20;
    background-color: ${theme.colors['color-sub1']};
`

const logoImg = css`
    width: 22rem;
    height: 2.4rem;
`
const logoutButton = css`
    position: absolute;
    right: 10px;
    top: 12px;
    background: none;
    border: none;
    cursor: pointer;
`