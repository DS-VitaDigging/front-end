import { css } from '@emotion/react';

export const wrapper = css`
  padding: 6rem;
  margin-top: 5.9rem;
  overflow: hidden;
  position: relative;
`;

export const profileSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const profileInfo = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const profileIcon = css`
  width: 48px;
  height: 48px;
`;

export const nickname = css`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const editButton = css`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const infoSection = css`
  margin-bottom: 4rem;
`;

export const sectionTitle = css`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const infoTable = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 1rem;
  column-gap: 2rem;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;

  div:nth-of-type(odd) {
    font-weight: bold;
  }
`;

export const changePassword = css`
  text-decoration: underline;
  color: #000;
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const popupOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const popup = css`
  background-color: #FEFAE0;
  padding: 2rem;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const popupTitle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const popupLabel = css`
  color: #626F47;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const popupInput = css`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: none;
  border-bottom: 2px solid #A4B465;
  font-size: 1rem;
  background: transparent;
  color: #333;

  &::placeholder {
    color: #A4B465;
  }

  &:focus {
    outline: none;
    background: #fff;
  }
`;

export const popupButton = css`
  padding: 0.8rem;
  background-color: #FFCF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top:1rem;

  &:hover {
    background-color: #f5b800;
  }
`;
