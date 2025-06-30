import { css } from '@emotion/react';

export const cardBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 2rem;
    width: 14.5rem;
    height: 18.4rem;
    padding: 1.5rem;
    background-color: #FEFAE0;
`;

export const cardImage = css`
    width: 80%;
`;

export const cardTitle = css`
    font-weight: bold;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
`;

export const cardCompany = css`
    font-size: 1rem;
    color: #00000080;
    margin-bottom: 0.8rem;
`;

export const tagList = css`
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    align-self: flex-start;
`;

export const tagItem = css`
    font-size: 0.8rem;
    background-color: #A4B4658C;
    padding: 0.4rem;
    border-radius: 1.2rem;
    white-space: nowrap;
`;