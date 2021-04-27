import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @font-face {
    font-family: OpenSans;
    src:url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
  }
  html {
    font-family: OpenSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--grey);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  ul{
     list-style: none;

  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
    margin: 0;
  }
  a {
    color: var(--darkGrey);
    text-decoration-color: var(--grey);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    &:hover {
      color: var(--green);
    }

  }
  mark, .mark {
    background: var(--green);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
    display: inline-block;
    transform: rotate(3deg);
    font-size: 2rem;
    margin-right: 1rem;
    margin-bottom: 4px;
    font-weight: 400;
    &.pri {
      transform: rotate(3deg);
      background-color: var(--primary);
    }
    &.sec {
      transform: rotate(-3deg);
      background-color: #0c6c83;
    }
    &.ter {
      transform: rotate(3deg);
      background-color: var(--tertiary);
    }
    &.qua {
      transform: rotate(-4deg);
      background-color: var(--quaternary);
    }
    &.qui {
      transform: rotate(3deg);
      background-color: var(--quinary);
    }
    &.sen {
      transform: rotate(3deg);
      background-color: var(--senary);
    }
  }
  

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
