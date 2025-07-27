// src/pages/Category/SupplementList.style.js
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 2rem;
`;

export const headerSection = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const icon = css`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
`;

export const title = css`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const descriptionBox = css`
  background-color: #fefae0;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5;
`;

export const listWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
`;

export const itemBox = css`
  display: flex;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

export const imageWrapper = css`
  border: 1px solid #626f47;
  border-radius: 0.8rem;
  padding: 0.5rem;
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const image = css`
  width: 100%;
  height: auto;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const name = css`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

export const brand = css`
  font-size: 0.9rem;
  color: #7f7f7f;
  margin-bottom: 0.5rem;
`;

export const tags = css`
  display: flex;
  gap: 0.5rem;
`;

export const tag = css`
  background-color: #b6c384;
  border-radius: 1rem;
  padding: 0.3rem 0.8rem;
  font-size: 0.75rem;
  color: white;
`;
