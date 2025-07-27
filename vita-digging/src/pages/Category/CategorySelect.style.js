// src/pages/Category/CategorySelect.style.js
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 2rem;
`;

export const title = css`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const subtitle = css`
  font-size: 0.9rem;
  color: #7f7f7f;
  text-align: center;
  margin-bottom: 2rem;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 1rem;
  justify-items: center;
  margin-bottom: 2rem;
`;

export const categoryBox = (isSelected) => css`
  background-color: ${isSelected ? '#FFC107' : '#FFCF50'};
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  width: 7.5rem;
  height: 8rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: #ffd666;
  }
`;

export const icon = css`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
`;

export const label = css`
  font-size: 1rem;
  font-weight: bold;
`;

export const completeButton = css`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ffcf50;
  color: #000;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ffd666;
  }
`;
