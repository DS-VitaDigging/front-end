/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export default function Header() {
    return (
        <header css={headerWrapper}>
            <p css={headerText}>비타디깅</p>
            <img
                src={"/icons/logo.svg"}
                alt="로고이미지"
                css={logoImg}
            />
        </header>
    );
}

const headerWrapper = css`
    display: flex;
    padding: 1.3rem 1.5rem;
    width: 40.2rem;
    height: 5rem;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    z-index: 20;
    background-color: ${theme.colors['color-sub1']};
`

const headerText = css`
    color: white;
    font-size: 2rem;
    font-weight: 700;
`

const logoImg = css`
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 0.3rem;
`