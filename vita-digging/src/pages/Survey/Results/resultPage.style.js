import { css } from '@emotion/react';

export const wrapper = css`
    padding: 2rem;
    margin-top: 5rem;
`;

export const title = css`
    font-weight: bold;
    font-size: 3rem;
    color: #4F583D; 
    margin-bottom: 1rem;
`;

export const plainText = css`
    font-size: 1.1rem;
`

export const cardList = css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.1rem;

    overflow-y: auto;
    max-height: 62rem;
`;

export const cardWrapper = css`
    display: flex;
    padding: 1.5rem;
    min-height: 15rem;
`;

export const imageBox = css`
    display: flex;
    align-items: center;
    margin-right: 2.7rem;
    width: 12rem;
    border-radius: 2rem;
    border: 1px solid #626F47;
    cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

export const supplementImage = css`
    width: 100%;
    height: auto;
`;

export const infoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`;

export const name = css`
    font-size: 1.8rem;
    font-weight: bold;
`;

export const brand = css`
    font-size: 1.3rem;
    color: #00000080;
    font-weight: bold;
    margin-top: 1rem;
`;

export const tagList = css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 
    margin-top: 1.7rem;
`;

export const tag = css`
    font-size: 1.2rem;
    background-color: #A4B465CC;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0.5rem 1.1rem;
    border-radius: 2rem;
    white-space: nowrap;
`;
