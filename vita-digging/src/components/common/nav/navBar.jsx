/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as styles from './navBar.style';
import { NAV_ITEMS } from '../../../constants/navItems';

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = localStorage.getItem('accessToken');
        return !!token;
    });

    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem('accessToken');
            setIsLoggedIn(!!token);
        };

        // 초기 로그인 상태 체크 (혹시 모를 변경사항 감지용)
        checkLoginStatus();

        // localStorage 변경 감지 (다른 탭에서 로그인/로그아웃 시)
        window.addEventListener('storage', checkLoginStatus);

        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    // 동적 경로 처리 
    const getNavPath = (item) => {
        if (item.id === 'my') {
            const path = isLoggedIn ? '/mypage' : '/before-login';
            return path;
        }
        return item.path;
    };

    return (
        <nav css={styles.navContainer}>
            {NAV_ITEMS.map((item) => (
                <Link 
                    to={getNavPath(item)}
                    key={item.id} 
                    css={styles.navItem} 
                    style={{ textDecoration: "none"}}
                >
                    <div css={styles.navItem}>
                        <img
                            src={item.icon}
                            alt={item.name}
                            css={[
                                styles.iconStyle,
                                item.id === 'commu' || item.id === 'ques' ? styles.largeIcon : null,
                            ]}
                        />
                        <span css={styles.labelStyle}>{item.name}</span>
                    </div>
                </Link>
            ))}
        </nav>
    );
}
