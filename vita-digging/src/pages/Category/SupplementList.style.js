// src/pages/Category/SupplementList.style.js
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 3.5rem;
  overflow: hidden;
  position: relative;
`;


export const headerSection = css`
  margin-top: 5.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const icon = css`
  width: 4.4rem;
  height: 4.4rem;
  margin-right: 2.4rem;
  margin-left: 1.5rem;
`;

export const title = css`
  font-size: 2rem;
  font-weight: bold;
`;

export const descriptionBox = css`
  background-color: #fefae0;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 3.4rem;
  font-size: 1.4rem;
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
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom:3.9rem;
`;

export const imageWrapper = css`
  border: 1px solid #626f47;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.7rem;
  padding: 0.5rem;
`;

export const image = css`
  width: 13.4rem;
  height: 14.5rem;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const name = css`
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const brand = css`
  font-size: 1.3rem;
  color: #7f7f7f;
  margin-bottom: 1.7rem;
`;

export const tags = css`
  display: flex;
  flex-wrap: wrap
  gap: 0.5rem;
`;

export const tag = css`
  background-color: #b6c384;
  border-radius: 1rem;
  padding: 0.3rem 0.8rem;
  font-size: 1.2rem;
`;
