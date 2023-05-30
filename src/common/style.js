import styled, { keyframes } from "styled-components";
import Theme from "./Theme";

export const WholeWrapper = styled.section`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  background: ${(props) => props.bgColor};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-position: ${(props) => props.bgPosition || `center`};
  background-repeat: no-repeat;
  box-shadow: ${(props) => props.boxShadow};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius};
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  background-image: ${(props) => props.bgImg};
  background-size: ${(props) => props.bgSize || `cover`};
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment};
  background-position: ${(props) => props.bgPosition || `center`};

  transition: ${(props) => props.transition || `0.2s`};
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  letter-spacing: ${(props) => props.letterSpacing};
  opacity: ${(props) => props.opacity};

  & pre {
    white-space: pre-wrap;
  }

  &:hover {
    color: ${(props) => props.isHover && props.theme.basicTheme_C};
    cursor: ${(props) => (props.isHover ? `pointer` : ``)};
  }

  & .width100 {
    width: 100%;
  }
`;

export const LayOut = styled.article`
  width: ${(props) => props.width || `1290px`};
  height: ${(props) => props.height || `100%`};
  ${(props) => props.minHeight}
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  backdrop-filter: ${(props) => props.filter};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || `120px 0`};
  overflow: ${(props) => props.overflow};
  border-bottom: ${(props) => props.borderBottom};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
  position: ${(props) => props.position};

  @media (max-width: 1290px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const CommonButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize || `18px`};
  color: ${(props) => props.color || props.theme.white_C};
  border-radius: ${(props) => props.radius || `7px`};
  box-shadow: none;

  ${(props) => !props.kindOf && `background : ${props.theme.basicTheme_C};`}
  ${(props) =>
    !props.kindOf && `border : 1px solid ${props.theme.basicTheme_C};`}
  /* white */
  ${(props) =>
    props.kindOf === `white` && `background : ${props.theme.subTheme_C};`}
  ${(props) =>
    props.kindOf === `white` && `color : ${props.theme.basicTheme_C};`}
  ${(props) =>
    props.kindOf === `white` && `border : 1px solid ${props.theme.subTheme_C};`}
    /* black */
  ${(props) =>
    props.kindOf === `black` && `background : ${props.theme.black_C};`}
  ${(props) => props.kindOf === `black` && `color : ${props.theme.white_C};`}
  /* subTheme */
  ${(props) =>
    props.kindOf === `subTheme` && `background : ${props.theme.white_C};`}
  ${(props) =>
    props.kindOf === `subTheme` && `color : ${props.theme.basicTheme_C};`}
  ${(props) =>
    props.kindOf === `subTheme` &&
    `border : 1px solid ${props.theme.basicTheme_C};`}


  ${(props) =>
    props.kindOf === `delete` && `background : ${props.theme.red_C};`}
  ${(props) => props.kindOf === `delete` && `color : ${props.theme.white_C};`}
  ${(props) =>
    props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}
  /* grey */
  ${(props) =>
    props.kindOf === `grey` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `grey` && `color : ${props.theme.grey_C};`}
  ${(props) =>
    props.kindOf === `grey` && `border : 1px solid ${props.theme.grey_C};`}
  ${(props) => props.kindOf === `grey` && `font-size : 16px;`}


  /* grey3 */
  ${(props) =>
    props.kindOf === `grey3` && `background : ${props.theme.lightGrey3_C};`}
    ${(props) =>
    props.kindOf === `grey3` && `color : ${props.theme.darkGrey4_C};`}
    ${(props) =>
    props.kindOf === `grey3` &&
    `border : 1px solid ${props.theme.lightGrey3_C};`}
  

&:hover {
    background: ${(props) => props.theme.white_C};
    color: ${(props) => props.theme.basicTheme_C};
    ${(props) =>
      !props.kindOf && `border :1px solid ${props.theme.basicTheme_C};`}
    /* white */
    ${(props) =>
      props.kindOf === `white` && `background ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `white` && `color ${props.theme.subTheme_C};`}
    ${(props) =>
      props.kindOf === `white` &&
      `border : 1px solid ${props.theme.basicTheme_C};`}
    /* black */
    ${(props) =>
      props.kindOf === `black` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `black` && `color : ${props.theme.black_C};`}
    ${(props) =>
      props.kindOf === `black` && `border : 1px solid ${props.theme.black_C};`}
      /* subTheme */
    ${(props) => props.kindOf === `subTheme` && `color ${props.theme.white_C};`}
    ${(props) =>
      props.kindOf === `subTheme` && `background ${props.theme.basicTheme_C};`}
    ${(props) =>
      props.kindOf === `subTheme` &&
      `border : 1px solid ${props.theme.basicTheme_C};`}

    ${(props) =>
      props.kindOf === `delete` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `delete` && `color : ${props.theme.red_C};`}
    ${(props) =>
      props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}
  /* grey */
    ${(props) =>
      props.kindOf === `grey` && `background : ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey` && `color : ${props.theme.white_C};`}
    ${(props) =>
      props.kindOf === `grey` && `border : 1px solid ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey` && `font-size : 16px;`}

  /* grey2 */
    ${(props) =>
      props.kindOf === `grey2` && `background : ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `color : ${props.theme.grey_C};`}
    ${(props) =>
      props.kindOf === `grey2` && `border : 1px solid ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `font-size : 16px;`}


  /* grey3 */
  ${(props) =>
      props.kindOf === `grey3` && `background : ${props.theme.darkGrey4_C};`}
    ${(props) =>
      props.kindOf === `grey3` && `color : ${props.theme.lightGrey3_C};`}
    ${(props) =>
      props.kindOf === `grey3` &&
      `border : 1px solid ${props.theme.darkGrey4_C};`}
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.fontSize || `14px`};
  }
`;

export const Text = styled.p`
  overflow: ${(props) => props.overflow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.dr};
  align-items: ${(props) => props.al};
  justify-content: ${(props) => props.ju};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || `0`};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign || `left`};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};
  z-index: 1;
  /* white-space: pre-wrap; */
  border-bottom: ${(props) => props.borderBottom};
  opacity: ${(props) => props.opacity};
  letter-spacing: ${(props) => props.letterSpacing};
  font-family: ${(props) => props.fontFamily || `Pretendard`};

  ${(props) =>
    props.D2
      ? `
      font-family : 'D2Coding';
      `
      : `font-family: 'Pretendard';`}

  ${(props) =>
    props.isEllipsis
      ? `
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ``}
`;

export const Image = styled.img`
  display: ${(props) => props.display};
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `auto`};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  transform: ${(props) => props.transform};
  object-fit: ${(props) => props.objectFit || `cover`};
  object-position: ${(props) => props.objPosition || `0 0`};
  position: ${(props) => props.position};
  box-shadow: ${(props) => props.shadow};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transition: ${(props) => props.transition || `0.3s`};
`;

export const ATag = styled.a`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;

export const SpanText = styled.span`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
  transition: 0.5s;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};
  z-index: ${(props) => props.zIndex || `1`};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};

  ${(props) =>
    props.isEllipsis &&
    `
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  `}
`;

export const CommonTitle = styled.h3`
  font-size: 22px;
  font-family: "GmarketSansBold";
  color: ${(props) => props.theme.black2_C};
  position: relative;
  margin: ${(props) => props.margin || `0`};
  line-height: 26px;

  &:before {
    content: "";
    width: 100%;
    height: 15px;
    background: ${(props) => props.theme.subTheme_C};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ListBox = styled(Wrapper)`
  flex-direction: row;
  height: ${(props) => props.height || `60px`};
  border-bottom: 1px solid ${(props) => props.theme.lightGrey6_C};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.hoverBgColor || props.theme.subTheme8_C};
  }
`;

//////////////////////////////////////////////////////////
export const Title = styled.p`
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: ${(props) => props.fontWeight || `500`};
  color: #c75c6f;
  text-align: left;
  letter-spacing: 0.1em;
  font-family: "D2Coding";
  width: 100%;
`;
export const SubTitle = styled.p`
  width: 100%;
  margin: 0 0 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  color: ${(porps) => porps.color || `#525260`};
  opacity: ${(porps) => porps.opacity};
  text-align: left;
  letter-spacing: 0.1em;
  font-family: "D2Coding";
  width: 100%;
`;
export const SectionTitle = styled.h3`
  width: 100%;
  margin: 0;
  font-size: 64px;
  font-family: "DMSans";
  font-weight: ${(props) => props.fontWeight || `700`};
  color: ${(porps) => porps.color || `#292930`};
  text-align: left;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin: 0 0 30px;
`;

export const Btn = styled.button`
  width: 250px;
  height: 80px;
  cursor: pointer;
  margin: ${(props) => props.margin || `0 10px`};
  border: 1px solid lightgray;
  border-radius: ${(props) => props.radius || `20px`};
  font-size: ${(props) => props.fontSize || `16px`};
  font-size: ${(props) => props.fontSize || `16px`};
  line-height: 1;
  color: ${(props) => props.color || props.theme.white_C};
  background-color: ${(props) => props.bgColor || `${Theme.basic_C}`};
  box-shadow: 0 44px 84px -24px ${Theme.basic_C};
  position: relative;
  overflow: hidden;

  :after {
    content: "";
    width: 300px;
    height: 300px;
    background-color: ${Theme.basic2_C};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0);
    transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: -1;
  }

  &:hover:after {
    transform: translateY(-50%) translateX(-50%) scale(1);
    z-index: 1;
  }

  & a {
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    color: ${Theme.white_C};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    font-family: "Pretendar";
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.fontSize || `14px`};
  }
`;

export const Box = styled.div`
  width: ${(props) => props.width || ` calc(100% / 2 - 40px)`};
  min-height: ${(props) => props.height || `530px`};
  overflow: hidden;
  background: ${(props) => props.bgColor || `#ecf2f6`};
  font-family: "Pretendar";
  margin-bottom: ${(props) => props.margin || `60px`};
  padding: 60px 45px 30px 45px;
  border-radius: 30px;
  align-items: ${(props) => props.al || ` flex-start`};
  box-sizing: border-box;

  & .contentText {
    width: 100%;
    text-align: ${(props) => props.textAlign || `left`};
    color: ${(props) => props.color || `#525260`};
    font-size: ${(props) => props.fontSize || `20px`};
    font-weight: ${(props) => props.fontWeight || `500`};
    margin-bottom: ${(props) => props.marginBottom || `4px`};
  }
  & .contentSub {
    width: 100%;
    text-align: ${(props) => props.textAlign || `left`};
    color: ${(props) => props.color || `#7a88ab`};
    font-size: ${(props) => props.fontSize || `20px`};
    font-weight: ${(props) => props.fontWeight || `500`};
    padding: 0 0 0 10px;
  }

  & .contentDate {
    width: 100%;
    text-align: ${(props) => props.textAlign || `left`};
    color: ${(props) => props.color || `#7a88ab`};
    font-size: ${(props) => props.fontSize || `17px`};
    margin-top: ${(props) => props.marginBottom || `2px`};
    padding: 0 0 0 10px;
  }
  & > .hover {
    width: 100%;
    height: 100%;

    img {
      filter: drop-shadow(rgb(89, 86, 233, 0.15) 6px 10px 10px);
    }
    &:hover > img {
      transform: scale(1.2);
      filter: drop-shadow(rgb(89, 86, 233, 0.25) 9px 20px 6px);
    }
  }
`;

export const BoxList = styled(Wrapper)`
  width: calc(100% / 3 - 20px);
  flex-direction: column;
  margin: 0 30px 30px 0;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const ModalFont = styled(Text)`
  word-break: break-word;
  width: 100%;
  text-align: ${(props) => props.textAlign || `left`};
  color: ${(props) => props.color || `#525260`};
  font-size: ${(props) => props.fontSize || `18px`};
  font-weight: ${(props) => props.fontWeight || `500`};
  margin-bottom: ${(props) => props.marginBottom || `16px`};
  padding: ${(props) => props.padding};
`;

export const ModalText = styled(Text)`
  width: ${(props) => props.width || `90px`};
  color: ${(props) => props.color || `#525260`};
  font-size: ${(props) => props.fontSize || `16px`};
  font-weight: ${(props) => props.fontWeight || `500`};
  padding: 16px 0;
  line-height: 1;
  border-bottom: 1px solid #eee;
`;

export const animation = keyframes`

  0%{
    transform:translateX(0) translateY(0);
   
  }
  40%{
    transform:translateX(50px) translateY(-200px);
   
  }
  75%{
    transform:translateX(800px);
   
  }
  100%{
    transform:translateY(0) translateX(0);
   
  }
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const GuideLi = styled.li`
  width: 100%;
  margin-bottom: 5px;
  color: ${(props) => (props.isImpo ? props.theme.red_C : "")};
`;
