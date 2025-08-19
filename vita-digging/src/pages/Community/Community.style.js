import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #fefae0 0%, #f9f7e8 100%);
`;

export const container = css`
  text-align: center;
  background: white;
  border-radius: 2rem;
  padding: 4rem 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 40rem;
  width: 100%;
`;

export const iconWrapper = css`
  margin-bottom: 2rem;
`;

export const icon = css`
  font-size: 6rem;
  display: block;
  margin-bottom: 1rem;
//   animation: bounce 2s infinite;

//   @keyframes bounce {
//     0%, 20%, 50%, 80%, 100% {
//       transform: translateY(0);
//     }
//     40% {
//       transform: translateY(-10px);
//     }
//     60% {
//       transform: translateY(-5px);
//     }
//   }
`;

export const title = css`
  font-size: 2.4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const description = css`
  font-size: 1.6rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

export const badge = css`
  display: inline-block;
  background: linear-gradient(135deg, #A4B465, #8FA055);
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(164, 180, 101, 0.3);
`; 