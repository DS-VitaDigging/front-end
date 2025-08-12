/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export default function Header() {
    return (
        <header css={headerWrapper}>
            <img
                src={"/icons/headerLogo.svg"}
                alt="헤더 로고"
                css={logoImg}
            />
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