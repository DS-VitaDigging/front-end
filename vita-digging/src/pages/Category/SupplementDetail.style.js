// src/pages/Category/SupplementDetail.style.js
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 3.5rem;
  overflow: hidden;
  position: relative;
`;

export const topSection = css`
  margin-top: 5.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 5.3rem;
`;

export const imageWrapper = css`
  border: 1px solid #626f47;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
`;

export const image = css`
  width: 17rem;
  height: 18.4rem;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const name = css`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const brand = css`
  font-size: 0.9rem;
  color: #7f7f7f;
  margin-bottom: 3.2rem;
`;

export const buyButton = css`
  background-color: #b6c384;
  border: none;
  padding: 1.31rem 3.8rem;
  border-radius: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  width: fit-content;
  text-size: 1.4rem;
  white-space: nowrap;


  &:hover {
    background-color: #9ea66e;
  }
`;

export const section = css`
  margin-bottom: 3.6rem;
`;

export const sectionTitle = css`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.1rem;
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
`;
