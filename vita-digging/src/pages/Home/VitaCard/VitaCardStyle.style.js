import { css } from '@emotion/react';

export const cardBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border: none;
    border-radius: 2rem;
    width: 15rem;
    height: 20.3rem;

    padding: 2rem 1.5rem 1.7rem 1.5rem;
    background-color: #FEFAE0;
    text-align: center;
`;

export const cardContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-start;
`;

export const cardImage = css`
    width: 90px;
`;

export const cardTitle = css`
    font-weight: bold;
    margin-bottom: 0.4rem;
    margin-top: 1rem;
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
    align-self: flex-start;
`;

export const tagItem = css`
    font-size: 0.8rem;
    background-color: #A4B4658C;
    padding: 0.4rem;
    border-radius: 1.2rem;
    white-space: nowrap;
`;