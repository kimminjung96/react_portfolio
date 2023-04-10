import styled from "styled-components";

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
  ${(props) => !props.kindOf && `border : 1px solid ${props.theme.basicTheme_C};`}
  /* white */
  ${(props) => props.kindOf === `white` && `background : ${props.theme.subTheme_C};`}
  ${(props) => props.kindOf === `white` && `color : ${props.theme.basicTheme_C};`}
  ${(props) => props.kindOf === `white` && `border : 1px solid ${props.theme.subTheme_C};`}
    /* black */
  ${(props) => props.kindOf === `black` && `background : ${props.theme.black_C};`}
  ${(props) => props.kindOf === `black` && `color : ${props.theme.white_C};`}
  /* subTheme */
  ${(props) => props.kindOf === `subTheme` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `subTheme` && `color : ${props.theme.basicTheme_C};`}
  ${(props) => props.kindOf === `subTheme` && `border : 1px solid ${props.theme.basicTheme_C};`}

  ${(props) => props.kindOf === `kakao` && `background : ${props.theme.kakao_C};`}
  ${(props) => props.kindOf === `kakao` && `color : ${props.theme.subTheme4_C};`}
  ${(props) => props.kindOf === `kakao` && `border : 1px solid ${props.theme.kakao_C};`}

  ${(props) => props.kindOf === `delete` && `background : ${props.theme.red_C};`}
  ${(props) => props.kindOf === `delete` && `color : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}
  /* grey */
  ${(props) => props.kindOf === `grey` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `grey` && `color : ${props.theme.grey_C};`}
  ${(props) => props.kindOf === `grey` && `border : 1px solid ${props.theme.grey_C};`}
  ${(props) => props.kindOf === `grey` && `font-size : 16px;`}

  /* grey2 */
  ${(props) => props.kindOf === `grey2` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `grey2` && `color : ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `border : 1px solid ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey2` && `font-size : 16px;`}

  /* grey3 */
  ${(props) => props.kindOf === `grey3` && `background : ${props.theme.lightGrey3_C};`}
    ${(props) => props.kindOf === `grey3` && `color : ${props.theme.darkGrey4_C};`}
    ${(props) => props.kindOf === `grey3` && `border : 1px solid ${props.theme.lightGrey3_C};`}
  

&:hover {
    background: ${(props) => props.theme.white_C};
    color: ${(props) => props.theme.basicTheme_C};
    ${(props) => !props.kindOf && `border :1px solid ${props.theme.basicTheme_C};`}
    /* white */
    ${(props) => props.kindOf === `white` && `background ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `white` && `color ${props.theme.subTheme_C};`}
    ${(props) => props.kindOf === `white` && `border : 1px solid ${props.theme.basicTheme_C};`}
    /* black */
    ${(props) => props.kindOf === `black` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `black` && `color : ${props.theme.black_C};`}
    ${(props) => props.kindOf === `black` && `border : 1px solid ${props.theme.black_C};`}
      /* subTheme */
    ${(props) => props.kindOf === `subTheme` && `color ${props.theme.white_C};`}
    ${(props) => props.kindOf === `subTheme` && `background ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `subTheme` && `border : 1px solid ${props.theme.basicTheme_C};`}

          

    ${(props) => props.kindOf === `kakao` && `background : ${props.theme.kakao_C};`}
    ${(props) => props.kindOf === `kakao` && `color : ${props.theme.subTheme4_C};`}
    ${(props) => props.kindOf === `kakao` && `border : 1px solid ${props.theme.subTheme4_C};`}
    ${(props) => props.kindOf === `delete` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `delete` && `color : ${props.theme.red_C};`}
    ${(props) => props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}
  /* grey */
    ${(props) => props.kindOf === `grey` && `background : ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey` && `color : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `grey` && `border : 1px solid ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey` && `font-size : 16px;`}

  /* grey2 */
    ${(props) => props.kindOf === `grey2` && `background : ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `color : ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey2` && `border : 1px solid ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `font-size : 16px;`}


  /* grey3 */
  ${(props) => props.kindOf === `grey3` && `background : ${props.theme.darkGrey4_C};`}
    ${(props) => props.kindOf === `grey3` && `color : ${props.theme.lightGrey3_C};`}
    ${(props) => props.kindOf === `grey3` && `border : 1px solid ${props.theme.darkGrey4_C};`}
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
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};
  z-index: 1;
  white-space: pre-wrap;
  border-bottom: ${(props) => props.borderBottom};
  opacity: ${(props) => props.opacity};
  letter-spacing: ${(props) => props.letterSpacing};
  font-family: ${(props) => props.fontFamily};

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
  z-index: 1;
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

export const TextInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `40px`};
  border: ${(props) => props.border || `1px solid ${props.theme.lightGrey2_C}`};
  border-bottom: ${(props) => props.borderBottom};
  padding: ${(props) => props.padding || `10px`};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.fontSize};
  cursor: ${(props) => props.cursor};
  border-radius: ${(props) => props.radius || `5px`};
  transition: 0.3s;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.basicTheme_C};
  }

  &:read-only {
    background-color: ${(props) => props.theme.lightGrey3_C};
    border: 1px solid ${(props) => props.theme.lightGrey3_C};
    cursor: auto;
  }

  &:read-only:focus {
    box-shadow: none;
    border: none;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.6;
    color: ${(props) => props.placeColor || props.theme.grey_C};
  }
`;

export const TextArea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100px`};
  padding: ${(props) => props.padding || `10px`};
  border: ${(props) => props.border || `1px solid ${props.theme.lightGrey2_C}`};
  border-radius: ${(props) => props.theme.radius};
  background: ${(props) => props.bgColor};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  resize: none;
  border-radius: ${(props) => props.radius || `10px`};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.basicTheme_C};
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.6;
    color: ${(props) => props.theme.lightGrey2_C};
  }
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

export const SectionWrap = styled(Wrapper)`
  padding: 120px 0;
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: ${(props) => props.padding || `28px 45px`};
  margin: ${(props) => props.margin};
  border: 1px solid lightgray;
  border-radius: ${(props) => props.radius || `20px`};
  font-size: ${(props) => props.fontSize || `16px`};
  font-size: ${(props) => props.fontSize || `16px`};
  line-height: 1;
  color: ${(props) => props.color || props.theme.white_C};
  background-color: ${(props) => props.bgColor || "white"};
  box-shadow: 0 44px 84px -24px #5956e9;
  position: relative;
  overflow: hidden;

  :after {
    content: "";
    width: 300px;
    height: 300px;
    background-color: #2522ba;
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
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.fontSize || `14px`};
  }
`;

export const Box = styled.div`
  width: calc(100% / 2 - 120px);
  background: ${(props) => props.gbColor || `#ecf2f6`};
  margin-bottom: 46px;
  padding: 60px 45px;
  border-radius: 30px;

  & > .contentSub {
    text-align: ${(props) => props.textAlign || `left`};
    color: ${(props) => props.color || `#525260`};
    font-size: ${(props) => props.fontSize || `20px`};
    margin-bottom: ${(props) => props.marginBottom || `14px`};
  }
  & > .contentText {
    text-align: ${(props) => props.textAlign || `left`};
    color: ${(props) => props.color || `#292930`};
    font-size: ${(props) => props.fontSize || `48px`};
    font-weight: ${(props) => props.fontWeight || `600`};
    margin-bottom: ${(props) => props.marginBottom || `25px`};
  }
  :hover > img {
    transform: scale(1.2);
  }
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const AdminContent = styled.div`
  padding: 20px;
`;

export const GuideUl = styled.ul`
  width: 100%;
  padding: 5px;
`;

export const GuideLi = styled.li`
  width: 100%;
  margin-bottom: 5px;
  color: ${(props) => (props.isImpo ? props.theme.red_C : "")};
`;

export const GuideDiv = styled.div`
  width: 100%;
  color: ${(props) => (props.isImpo ? props.theme.red_C : "")};
`;