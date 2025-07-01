import { css } from '@emotion/react';

export const wrapper = css`
    padding: 6rem;
    margin-top: 10.9rem;
    overflow: hidden;
`;

export const logo = css`
    width: 90%;
    display: block;
    margin: 0 auto 2rem auto;
    margin-bottom: 4rem;
`;

export const fieldGroup = css`
  margin-bottom: 2.5rem;
`;

export const label = css`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const input = css`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #626f47;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #d9d9d9;

  &:focus {
    background-color: #f5f5f5;
    outline: none;
  }
`;

export const buttonGroup = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const loginButton = css`
  margin-top: 2rem;
  padding: 0.8rem;
  font-size: 1.5rem;
  background-color: #626f47;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #4a5534;
  }
`;

export const signupButton = css`
  padding: 0.8rem;
  font-size: 1.5rem;
  background-color: #a4b465;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #8a9a4d;
  }
`;
