import { css } from '@emotion/react';

export const wrapper = css`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-top: 5rem;
`;

export const chatContainer = css`
    display: flex;
    flex-direction: column;
    max-height: 53rem;
    padding: 2rem;
    padding-bottom: 8rem;
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth; 
    margin-top: 2.5rem;
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #CCCCCC;
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: #AAAAAA;
    }
`;

// 메시지 애니메이션
const slideUpAnimation = css`
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(2rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const messageBox = css`
    ${slideUpAnimation}
    width: 28.9rem;
    padding: 1.9rem 2.1rem;
    border-radius: 2rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;
    font-size: 1.3rem;
    position: relative;
`;

// 새 메시지용 애니메이션 스타일
export const newMessageBox = css`
    ${messageBox}
    animation: slideUp 0.3s ease-out;
`;

export const botMessage = css`
    ${newMessageBox};
    background-color: #FFECBA;
    align-self: flex-start;

    &::before {
        content: '';
        position: absolute;
        top: 1rem;
        left: -1rem;
        width: 0;
        height: 0;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-right: 1.5rem solid #FFECBA;
    }
`;

export const userMessage = css`
    ${newMessageBox};
    background-color: #FEFAE0;
    align-self: flex-end;

    &::before {
        content: '';
        position: absolute;
        top: 1rem;
        right: -1rem;
        width: 0;
        height: 0;
        border-top: 1.5em solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-left: 1.5rem solid #FEFAE0;
    }
`;

export const resultMessage = css`
    ${newMessageBox};
    background-color: #FFECBA;
    align-self: flex-start;
    font-size: 1.5rem;
    margin-bottom: 0;

    &::before {
        content: '';
        position: absolute;
        top: 1.5rem;
        left: -1rem;
        width: 0;
        height: 0;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-right: 1.5rem solid #FFECBA;
    }
`;

export const resultButton = css`
    margin-top: 1rem;
    padding: 1.3rem 4rem;
    background-color: #FFCF50;
    border: none;
    border-radius: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        color: #A4B465CC;
    }
`;

export const inputWrapper = css`
    display: flex;
    padding: 1.5rem 2rem;
    background-color: white;
    position: fixed;
    bottom: 5rem; 
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 37.5rem;
    z-index: 999;
`;

export const inputField = css`
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1.2px solid #626F47;
    border-radius: 1rem;
    font-size: 1.3rem;
    height: 3.5rem;
    outline: none;
    transition: all 0.2s ease;
    
    &:disabled {
        background-color: #F5F5F5;
        cursor: not-allowed;
        opacity: 0.6;
    }
    
    &:focus:not(:disabled) {
        border-color: #facc15;
    }
`;

// 로딩 메시지 스타일
export const loadingMessage = css`
    ${messageBox}
    background-color: #FFECBA;
    align-self: flex-start;
    padding: 2rem;
    display: flex;
    align-items: center;
    
    &::before {
        content: '';
        position: absolute;
        top: 1rem;
        left: -1rem;
        width: 0;
        height: 0;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-right: 1.5rem solid #FFECBA;
    }
`;

// 타이핑 인디케이터 애니메이션
export const typingIndicator = css`
    display: flex;
    gap: 4px;
    
    span {
        width: 8px;
        height: 8px;
        background-color: #999;
        border-radius: 50%;
        animation: typing 1.4s infinite ease-in-out;
        
        &:nth-of-type(1) {
            animation-delay: 0s;
        }
        
        &:nth-of-type(2) {
            animation-delay: 0.2s;
        }
        
        &:nth-of-type(3) {
            animation-delay: 0.4s;
        }
    }
    
    @keyframes typing {
        0%, 60%, 100% {
            transform: scale(1);
            opacity: 0.5;
        }
        30% {
            transform: scale(1.2);
            opacity: 1;
        }
    }
`;

export const sendButton = css`
    margin-left: 0.8rem;
    padding: 0.9rem 1.5rem;
    background-color: #facc15;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
    width: 6.6rem;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        color: #A4B465CC;
    }
    
    &:disabled {
        background-color: #CCCCCC;
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

// result 메시지 컨테이너
export const resultContainer = css`
    display: flex;
    flex-direction: column;
`;

export const firstResultMessage = css`
    ${messageBox}
    background-color: #FFECBA;
    align-self: flex-start;
    animation: slideUp 0.3s ease-out;
    
    &::before {
        content: '';
        position: absolute;
        top: 1.5rem;
        left: -1rem;
        width: 0;
        height: 0;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-right: 1.5rem solid #FFECBA;
    }
`;

export const secondResultMessage = css`
    ${messageBox}
    background-color: #FFECBA;
    align-self: flex-start;
    animation: slideUp 0.3s ease-out 0.5s both; 
    margin-bottom: 0;

    &::before {
        content: '';
        position: absolute;
        top: 1.5rem;
        left: -1rem;
        width: 0;
        height: 0;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-right: 1.5rem solid #FFECBA;
    }
`;

export const resultTitle = css`
    font-weight: bold;
    font-size: 1.5rem;
    display: block;
    margin-bottom: 0.3rem;
`;

export const resultDesc = css`
    font-size: 1.3rem;
    color: #626F47;
    margin: 0;
`;

export const resultButtonContainer = css`
    display: flex;
    justify-content: center;
`;