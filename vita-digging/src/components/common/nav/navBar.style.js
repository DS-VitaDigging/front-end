import { css } from '@emotion/react';

export const navContainer = css`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem 1.9rem;              
  border-top: 0.1rem solid #e0e0e0;  
  position: fixed;
  bottom: 0;
  width: 40.2rem;
  z-index: 10;
  gap: 4.5rem;
`;

export const navItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
`;

export const iconStyle = css`
  width: 2.4rem;        
  height: 2.4rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const largeIcon = css`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0;
  cursor: pointer;
`;

export const labelStyle = css`
  font-size: 1rem;  
`;