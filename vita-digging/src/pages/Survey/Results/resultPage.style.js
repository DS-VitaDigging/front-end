import { css } from '@emotion/react';

export const wrapper = css`
    padding: 2rem;
`;

export const title = css`
    font-weight: bold;
    font-size: 3rem;
    color: #4F583D; 
`;

export const cardList = css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const cardWrapper = css`
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    border: 1px solid #d4d4d4;
    border-radius: 1rem;
`;

export const imageBox = css`
    flex-shrink: 0;
    width: 8rem;
    height: 8rem;
    border: 1px solid #626f47;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
`;

export const supplementImage = css`
    width: 100%;
    height: auto;
`;

export const infoBox = css`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const name = css`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const brand = css`
    font-size: 1.2rem;
    color: #999;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
`;

export const tagList = css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const tag = css`
    font-size: 1.1rem;
    background-color: #a4b4658c;
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
    white-space: nowrap;
`;
