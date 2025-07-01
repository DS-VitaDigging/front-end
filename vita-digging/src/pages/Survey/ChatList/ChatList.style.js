import { css } from '@emotion/react';

export const wrapper = css`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-top: 5.9rem;
`;

export const headerWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 3rem;
    color: #4F583D;
    margin-bottom: 2.9rem;
`;

export const headerTextContainer = css`
    display: flex;
    align-items: flex-end;
    width: 24rem;
`

export const headerText = css`
    width: 13rem;
    font-weight: bold;
`

export const countText = css`
    font-size: 1.5rem;
    color: #0000007D;
    font-weight: 600;
`;

export const addIcon = css`
    cursor: pointer;
    width: 2.8rem;
`;

export const listWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const chatItem = css`
    padding: 1.4rem;
    border-radius: 0.7rem;
    cursor: pointer;
`;

export const progressBg = css`
    background-color: #FEFAE0;
`;

export const doneBg = css`
    background-color: #FFECBA;
`;

export const titleRow = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;
`;

export const titleText = css`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const dateText = css`
    font-size: 1.2rem;
    color: #0000007D;
    margin-right: 12rem;
`;

export const contentText = css`
    font-size: 1.3rem;
    color: #626F47;
    line-height: 1.4;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
`;

export const deleteIcon = css`
    cursor: pointer;
    width: 2rem;
`;
