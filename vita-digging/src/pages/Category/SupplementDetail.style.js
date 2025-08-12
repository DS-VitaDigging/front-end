// src/pages/Category/SupplementDetail.style.js
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 2rem;
`;

export const topSection = css`
  display: flex;
  margin-bottom: 2rem;
`;

export const imageWrapper = css`
  border: 1px solid #626f47;
  border-radius: 1rem;
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
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
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const brand = css`
  font-size: 0.9rem;
  color: #7f7f7f;
  margin-bottom: 1rem;
`;

export const buyButton = css`
  background-color: #b6c384;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  width: fit-content;

  &:hover {
    background-color: #9ea66e;
  }
`;

export const section = css`
  margin-bottom: 2rem;
`;

export const sectionTitle = css`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const tags = css`
  display: flex;
  gap: 0.5rem;
`;

export const tag = css`
  background-color: #b6c384;
  border-radius: 1rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  color: white;
`;
