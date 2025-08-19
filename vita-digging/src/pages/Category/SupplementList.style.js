import { css } from '@emotion/react';

export const wrapper = css`
  padding: 3.5rem;
  overflow: hidden;
  position: relative;
  padding-bottom: 10rem;
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
  margin-right: 2rem;
`;

export const title = css`
  font-size: 2rem;
  font-weight: bold;
`;

export const descriptionBox = css`
  background-color: #fefae0;
  padding: 1.4rem 1.7rem;
  border-radius: 2rem;
  margin-bottom: 3.4rem;
  font-size: 1.4rem;
`;

export const listWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const itemBox = css`
  display: flex;
  padding: 1.5rem;
  min-height: 17rem;
  cursor: pointer;
`;

export const imageWrapper = css`
  display: flex;
  margin-right: 2.7rem;
  width: 13rem;
  height: 14rem;
  cursor: pointer;
  flex-shrink: 0;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background-color: white;
  border-radius: 2rem;
  border: 1px solid #626F47;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const info = css`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const name = css`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const brand = css`
  font-size: 1.3rem;
  color: #00000080;
  font-weight: bold;
  margin-top: 1rem;
`;

export const tags = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; 
  margin-top: 1.7rem;
`;

export const tag = css`
  font-size: 1.2rem;
  background-color: #A4B465CC;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  border-radius: 2rem;
  width: 100%;
`;

export const emptyMessage = css`
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.6rem;
  color: #999;
`;
