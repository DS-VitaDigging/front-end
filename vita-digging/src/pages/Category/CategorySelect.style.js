import { css } from '@emotion/react';

export const wrapper = css`
  padding: 0 2rem;
  margin-top: 9rem;
  margin-bottom: 10rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const textGroup = css`
  margin-bottom: 3rem;
`;

export const title = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5rem;
  row-gap: 4rem;
  justify-items: center; 
`;

export const categoryItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const categoryBox = (isSelected) => css`
  background-color: ${isSelected ? '#FFF3CD' : '#FFFFFF'};
  border: 1.5px solid ${isSelected ? '#FFCF50' : '#FFCF50'};
  border-radius: 2rem;
  padding: 2rem 1.2rem;
  text-align: center;
  width: 11.9rem; 
  height: 10.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  box-shadow: 
    0 4px 6px rgba(255, 207, 80, 0.25),
    0 0 0 1px rgba(255, 207, 80, 0.25);

  &:hover {
    background-color: ${isSelected ? '#FFF3CD' : '#FFF3CD'};
  }
`;

export const icon = css`
  width: 5rem;
  height: 5rem;
`;

export const label = css`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.5rem; 
`;

export const completeButton = css`
  width: 90%;
  height: 5.7rem;
  padding: 1.3rem;
  font-size: 2rem;
  font-weight: bold;
  background-color: #ffd666;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  align-self: center;
  margin-top: 4.6rem;

  &:hover {
    background-color: #ffd666;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #999;
    cursor: not-allowed;
  }
`;
