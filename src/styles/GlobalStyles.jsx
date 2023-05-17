import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --text1: #2d3133;
    --text2: #797a7a;
    --textEtiqueta: #004a23;
    --textButtons: #167db7;
    --hoberButtons: #e8f2f8;

    --fondoComponents: #ffffff;
    --fondoEtiqueta: #e6f6ed;
    --fondoMain: #f5f5f5;
    --fondoButtons: #2088c2;

    @font-face {
    font-family: 'font1';
    src: url('src/assets/fonts/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvQ.woff2') format('woff2');
    }

    --family: 'font1', sans-serif;

    background-color: var(--fontContainer);
  }
  body{
    margin: 0;
  }
  html {
    min-height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
    background-color: var(--fondoMain) !important;
    color: var(--text1);
    font-family: var(--family);

    
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  img,
  picture {
      width: 100%;
      display: block;
  }
`