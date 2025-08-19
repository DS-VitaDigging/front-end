import { css } from '@emotion/react';

export const wrapper = css`
  padding: 3.5rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 5rem;
`;

export const topSection = css`
  margin-top: 5.9rem;
  display: flex;
  align-items: stretch; 
  margin-bottom: 5.3rem;
  width: 100%;
`;

export const imageWrapper = css`
  display: flex;
  margin-right: 2.7rem;
  width: 14rem;
  height: 14.4rem;
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
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const name = css`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const brand = css`
  font-size: 1.4rem;
  color: #7f7f7f;
  font-weight: bold;
  margin-bottom: 3rem;
`;

export const buyButton = css`
  background-color: #A4B465;
  color: #000000;
  border: none;
  padding: 1.3rem 0;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
  white-space: nowrap;
  width: 13.1rem;
  text-align: center;

  &:hover {
    background-color: #b6c384;
  }
`;

export const section = css`
  margin-bottom: 3.6rem;
`;

export const sectionTitle = css`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.1rem;
`;

export const sectionContent = css`
  font-size: 1.4rem;
  line-height: 1.2;
`;