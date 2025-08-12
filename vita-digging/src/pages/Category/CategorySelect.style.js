import { css } from '@emotion/react';

export const wrapper = css`
  padding: 6rem;
  margin-top: 5.9rem;
  overflow: hidden;
  position: relative;
`;

export const textGroup = css`
  margin-bottom: 3rem;
`;

export const title = css`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0.8rem;
`;

export const subtitle = css`
  font-size: 1.1rem;
  color: #7f7f7f;
  text-align: left;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 1.5rem;
  justify-items: center;
  margin-bottom: 3rem;
`;

export const categoryBox = (isSelected) => css`
  background-color: ${isSelected ? '#FFC107' : '#FFFFFF'};
  border: 1px solid ${isSelected ? '#FFC107' : '#FFCF50'};
  border-radius: 1.2rem;
  padding: 2rem 1.2rem;
  text-align: center;
  width: 9rem;
  height: 9.5rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: ${isSelected ? '#FFCA28' : '#FFF3CD'};
  }
`;

export const icon = css`
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 0.8rem;
`;

export const label = css`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const completeButton = css`
  width: 100%;
  padding: 1.3rem;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: #ffcf50;
  color: #000;
  border: none;
  border-radius: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #ffd666;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #999;
    cursor: not-allowed;
  }
`;
