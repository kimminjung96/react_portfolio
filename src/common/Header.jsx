import styled from "styled-components";
import { Image, LayOut, Wrapper } from "./style";
import { useEffect, useMemo, useState } from "react";
import Lottie from "./Lottie";

const HeadLink = styled.p`
  postion: fixed;
  border: none;
  font-size: 20px;
  padding: 10px 16px;
  color: #333;
  transition: all 0.9s, color 0.3;
  background: ${(props) => props.bgColor || `transparent`};

  &:hover {
    color: #5956e9;
  }
`;

const HeaerWrap = styled(Wrapper)`
  height: 44px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let winSct = window.scrollY;
      const header = document.querySelector(".header");
      if (winSct >= 1) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    });
  }, []);

  return (
    <HeaerWrap className="header">
      <LayOut dr={`row`} ju={`space-between`} padding={`0`}>
        <Lottie />
        <Wrapper dr={`row`} width={`auto`}>
          <HeadLink>HOME</HeadLink>
          <HeadLink>ABOUT</HeadLink>
          <HeadLink>SKILLS</HeadLink>
          <HeadLink>PROJECT</HeadLink>
          <HeadLink>CONTACT</HeadLink>
        </Wrapper>
      </LayOut>
    </HeaerWrap>
  );
};

export default Header;
