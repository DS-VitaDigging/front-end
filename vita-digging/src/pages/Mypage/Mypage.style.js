import { css } from '@emotion/react';

export const wrapper = css`
  padding: 2.3rem;
  margin-top: 12.3rem;
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
  width: 60px;
  height: 60px;
`;

export const nicknameContainer = css`
  align-items: baseline;       
`;

export const nickname = css`
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1; 
`;

export const editButton = css`
  display: inline-block;
  vertical-align: text-bottom;
  margin-left: 0.4rem;
  background: none; 
  border: 0; 
  padding: 0; 
  cursor: pointer;

  img { 
    width: 1.4rem; 
    height: 1.4rem; 
    display: block; 
  }
`;

export const infoSection = css`
  margin-bottom: 4rem;
  margin-left: 2rem;
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
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
`;

export const changePassword = css`
  text-decoration: underline;
  color: #000;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
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
  padding-top: 4rem; 
  padding-bottom: 3rem;
  border-radius: 15px;
  width: 28.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const closeIcon = css`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const popupTitle = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
`;

export const popupLabel = css`
  color: #626F47;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-top: 3rem;
  align-self: flex-start;
`;

export const popupInputContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const popupInput = css`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: none;
  border-bottom: 2px solid #A4B465;
  font-size: 1.3rem;
  background: transparent;
  color: #333;
  width: 23rem;

  &::placeholder {
    color: #A4B465;
  }

  &:focus {
    outline: none;
  }
`;

export const popupButton = css`
  padding: 0.8rem;
  background-color: #FFCF50;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 9.6rem;
  height: 3.5rem;

  &:hover {
    background-color: #f5b800;
  }
`;
