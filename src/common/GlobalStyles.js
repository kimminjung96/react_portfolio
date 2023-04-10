import { createGlobalStyle, css } from "styled-components";

const fontStyle = css`
  /* latin-ext */
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZ2IHSeH.woff2) format("woff2");
  }
  /* latin */
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHQ.woff2) format("woff2");
  }
  /* latin-ext */
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrCBamC2QX.woff2) format("woff2");
  }
  /* latin */
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrCBimCw.woff2) format("woff2");
  }
  /* latin-ext */
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBamC2QX.woff2) format("woff2");
  }
  /* latin */
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimCw.woff2) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "PretendardBold";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "PretendardLight";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "D2Coding";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${fontStyle}

  body {
    font-family: "Pretendard", sans-serif;
    color: ${(props) => props.theme.darkGrey_C};
  }

  a {
    color : inherit;
    text-decoration : none;
  }

  textarea {
    resize: none;
    outline: none;
  }

  input {
    outline: none;
  }
  
  a:hover {
    color : inherit;
  }

  @media (max-width : 576px) {
    html { 
      font-size : 14px;
    }
  }
`;

export default GlobalStyles;
