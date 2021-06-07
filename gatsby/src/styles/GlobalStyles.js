import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary:#126060;
    --secondary:#0c6c83;
    --tertiary:#4075a0;
    --quaternary:#7979af;
    --quinary:#af7aad;
    --senary:#d87f9b;
    
    --green: #126060;
    --black: #141313;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #CBCBCB;
    --darkGrey:#464646;
    --swiper-theme-color: #126060;

  }
  html {
  
    background: black;
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    color: var(--grey);
    overflow-x: hidden;
    
    }

  fieldset {
    //border-color: rgba(0,0,0,0.1);
    border-color: var(--darkGrey);
    opacity: 0.2;
    border-width: 1px;
  }

  button {
    background: var(--green);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
    &:disabled{
      background-color: var(--darkGrey);
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
   body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: #126060 var(--black);
  }
  body::-webkit-scrollbar-track {
    background: var(--black);
  }
  body::-webkit-scrollbar-thumb {
    background-color:#126060 ;
    border-radius: 6px;
    border: 3px solid var(--black);
  }
 
  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  .swiper-container {
        width: 280px;
        }
         @media screen and (min-width:440px) {
          .swiper-container {
            width: 340px;
          }
        }
        
             @media screen and (min-width: 540px) {
          .swiper-container {
            width: 470px;
          }
        }
        
        
        @media screen and (min-width: 640px) {
          .swiper-container {
            width: 500px;
          }
        }
        
        @media screen and (min-width: 768px) {
          .swiper-container {
                width: 668px;
              }
            }
        @media screen and (min-width: 1000px) {
          .swiper-container {
                width: 863px;
              }
            }
  
`;

export default GlobalStyles;
