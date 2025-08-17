import { css } from '@emotion/react';

export const wrapper = css`
    padding: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
`;

export const title = css`
    text-align: center;
    font-size: 1.7rem;
    line-height: 1.4;
    font-weight: bold;
`;

export const carouselStyle = css`
    margin: 2rem 0;

    .slick-dots {
        position: absolute;
        bottom: 1rem;
        justify-content: center;
        width: 100%;
    }

    .slick-dots li button:before {
        font-size: 0.8rem;
        color: white;  
        opacity: 0.75;
    }

    .slick-dots li.slick-active button:before {
        color: white;
        opacity: 1;
    }
`;

export const bannerImage = css`
    width: 100%;
    height: 21rem;
    border-radius: 1rem;
    object-fit: cover;
`;

export const sectionWrapper = css`
    display: flex;
    flex-direction: column; 
    width: 100%;
`;

export const sectionTitle = css`
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 2rem;
`;

export const tagContainer = css`
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
    overflow-x: auto;  
    flex-wrap: nowrap; 
    padding-bottom: 0.5rem;
    
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const tagButton = css`
    padding: 0.8rem 1.6rem;
    border: none;
    border-radius: 2rem;
    background-color: #FFCF50;
    font-size: 1.4rem;
    white-space: nowrap; 
    flex-shrink: 0; 

    cursor: pointer;
    transition: background-color 0.2s ease; 
`;

export const activeTagButton = css`
    background-color: #FFCF508C;
    border: none;
`;

export const cardScrollContainer = css`
    display: flex;
    gap: 2rem;
    padding-bottom: 1rem;
    min-height: 22rem;  
    overflow-x: auto;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const errorMessage = css`
    font-size: 1rem;
    color: red;
`;