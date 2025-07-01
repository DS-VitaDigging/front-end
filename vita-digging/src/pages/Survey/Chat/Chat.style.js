import { css } from '@emotion/react';

export const wrapper = css`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-top: 5.9rem;
`;

export const chatContainer = css`
    display: flex;
    flex-direction: column;
    max-height: 53rem;
    padding: 2rem;
    flex: 1;
    overflow-y: auto;
    margin-top: 3.2rem;
`;

export const messageBox = css`
    width: 28.9rem;
    padding: 1.9rem 2.1rem;
    border-radius: 2rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;
    font-size: 1.3rem;
    position: relative
`;

export const botMessage = css`
    ${messageBox};
    background-color: #FFECBA;
    align-self: flex-start;

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

export const userMessage = css`
    ${messageBox};
    background-color: #FEFAE0;
    align-self: flex-end;

    &::before {
        content: '';
        position: absolute;
        top: 1.5rem;
        right: -1rem;
        width: 0;
        height: 0;
        border-top: 1.5em solid transparent;
        border-bottom: 1.5rem solid transparent;
        border-left: 1.5rem solid #FEFAE0;
    }
`;

export const resultMessage = css`
    ${messageBox};
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

export const boldText = css`
    font-weight: bold;
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
        color: #FEFAE0;
    }
`;

export const inputWrapper = css`
    display: flex;
    padding-top: 1.33rem;
`;

export const inputField = css`
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1.2px solid #626F47;
    border-radius: 1rem;
    font-size: 1.3rem;
    height: 3.5rem;
    outline: none;
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

    &:hover {
        color: #FEFAE0;
    }
`;
