import { css } from '@emotion/react';

export const wrapper = css`
  padding: 6rem;
  margin-top: 5.9rem;
  overflow: hidden;
  position: relative;
`;

export const backButton = css`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const title = css`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
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

export const description = css`
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.8rem;
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

export const warning = css`
  font-size: 0.9rem;
  color: #A4B465;
  margin-top: 0.5rem;
`;

export const genderGroup = css`
  display: flex;
  gap: 1rem;

  input[type="radio"] {
    display: none;
  }

  label {
    padding: 0.8rem 1.2rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    font-size: 1rem;
    user-select: none;

    transition: background-color 0.2s, border-color 0.2s;
  }

  input[type="radio"]:checked + label {
    background-color: #A4B465;
    border-color: #A4B465;
    color: white;
  }
`;


export const signupButton = css`
  margin-top: 2rem;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: #626F47;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #4a5534;
  }
`;
