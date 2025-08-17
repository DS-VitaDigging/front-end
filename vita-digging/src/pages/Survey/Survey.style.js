import { css } from '@emotion/react';

export const wrapper = css`
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 7rem;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 3rem;
  color: #4F583D; 
`;

export const historyIcon = css`
  width: 2.4rem;
  cursor: pointer;
`

export const card = css`
  background-color: #fefae0;
  border-radius: 2rem;
  padding: 5rem 4.5rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const title = css`
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
  font-size: 2rem;
`;

export const row = css`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  font-size: 2rem;
`;

export const label = css`
  font-weight: bold;
  color: #556b2f;
  margin-right: 4rem;
  flex: 0 0 6rem;
`;

export const value = css`
  flex: 1;
  font-weight: bold;
`;

export const input = css`
  flex: 1;
  padding: 0.5rem 0.8rem;
  border: 1px solid #626F47;
  border-radius: 0.5rem;
  width: 13rem;
  height: 4rem;
  margin-right: 1rem;
  outline: none;
  font-size: 1.8rem;
`;

export const inputText = css`
  font-size: 1.5rem;
`

export const button = css`
  margin-top: 2rem;
  padding: 1.6rem 6.7rem;
  background-color: #FFCF50; 
  border: none;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #e4e4e4;
    color: #999;
    cursor: default;
  }
  
  &:hover {
    color: #FEFAE0;
  }
`;
