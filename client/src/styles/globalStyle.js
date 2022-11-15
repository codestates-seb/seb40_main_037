import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    line-height: normal;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
    background-color: rgb(241, 242, 243)
  }
  menu, ol, ul, li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: #000;
    margin: 0;
    --bg: white;
    --textNormal: #222;
    --textTitle: #222;
    --textLink: blue;
    --hr: hsla(0, 0%, 0%, 0.2);
    --hoverColor: #efefef; 
    --footer-background-color: hsl(210,8%,15%);
    --orange: hsl(27,90%,55%);
    --lightblue:hsl(205, 46%, 92%);
    --darkblue: hsl(205, 47%, 42%);
    --blue: hsl(206,90%,69.5%);
    --gray: hsl(210,8%,45%);
    --lightgray: hsl(210,8%,75%);
    background-color: var(--bg);
    a, a.logo {
      color: hsl(210deg 8% 35%);
    }
  }
  body.dark {
    -webkit-font-smoothing: antialiased;
    --bg: rgba(14, 17, 22);
    --textNormal: rgba(255, 255, 255, 0.88);
    --textTitle: white;
    --textLink: yellow;
    --hr: hsla(0, 0%, 100%, 0.2);
    --hoverColor: #333;
    --footer-background-color: hsl(210,8%,15%);
    background-color: var(--bg);
    color: var(--textTitle);
    a, a.logo {
      color: white;
    }
    li {
      border-color: gray;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
