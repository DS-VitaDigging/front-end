import { css } from '@emotion/react';
// import theme from '@styles/theme';

export const navContainer = css`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;              
  border-top: 0.1rem solid #e0e0e0;  
  position: fixed;
  bottom: 0;
  width: 40.2rem;
  z-index: 10;
  gap: 3.6rem;
`;

export const navItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.9rem;
`;

export const iconStyle = css`
    width: 3.4rem;        
    height: 3.4rem;
    margin-bottom: 0.5rem;
`;

export const largeIcon = css`
  width: 4rem;
  height: 4rem;
  margin-bottom: 0;
`;

export const labelStyle = css`
    font-size: 1.2rem;  
`;