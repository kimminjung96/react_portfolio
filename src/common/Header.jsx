import styled from "styled-components";
import { LayOut, Wrapper } from "./style";
import { useCallback, useEffect, useRef, useState } from "react";
import Lottie from "./Lottie";
/* import { NavLink, Route } from "react-router-dom";
 */
const HeadLink = styled.a`
  border: none;
  font-size: 20px;
  padding: 10px 16px;
  color: ${(props) => props.theme.grey2_C};
  transition: all 0.9s, color 0.3;
  background: ${(props) => props.bgColor || `transparent`};

  &:hover {
    color: ${(props) => props.theme.basic_C};
  }
`;

const HeaerWrap = styled(Wrapper)`
  height: 100px;
  position: ${(props) => props.isscroll || `absolute`};
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* padding-top: 32px;
  top: -32px; */
  transition: 0.5s ease all;

  ${(props) =>
    props.isscroll &&
    `
  position: sticky;
  background-color:#fff;
  `}
`;

const Header = () => {
  const [pageY, setPageY] = useState(0);
  const [headerScroll, setHeaderScroll] = useState(false);

  const scrollEvent = useCallback(() => {
    const { pageYOffset } = window;
    const headerScroll = (pageY && pageYOffset !== 0 && pageYOffset !== pageY) || pageYOffset !== 0;
    setHeaderScroll(headerScroll);
    setPageY(pageYOffset);
  }, [pageY]);

  useEffect(() => {
    const scrollHeader = document.addEventListener("scroll", scrollEvent);
    return () => scrollHeader;
  });

  return (
    <HeaerWrap isscroll={headerScroll}>
      <LayOut dr={`row`} ju={`space-between`} padding={`0`}>
        <Lottie />
        <Wrapper dr={`row`} width={`auto`}>
          <HeadLink href="#HOME">HOME</HeadLink>
          <HeadLink href="#ABOUT">ABOUT</HeadLink>
          <HeadLink href="#PROJECT">PROJECT</HeadLink>
          <HeadLink href="#SKILLS">SKILLS</HeadLink>
          <HeadLink href="#CONTACT">CONTACT</HeadLink>
        </Wrapper>
      </LayOut>
    </HeaerWrap>
  );
};

export default Header;
