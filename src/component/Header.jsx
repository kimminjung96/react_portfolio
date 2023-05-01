import styled from "styled-components";
import { LayOut, Wrapper } from "../common/style";
import { useCallback, useEffect, useRef, useState } from "react";
import Lottie from "../common/Lottie";
import { Link } from "react-scroll";
import Theme from "../common/Theme";

const HeadLink = styled.div`
  font-size: 20px;
  color: ${Theme.grey3_C};
  font-weight: 500;
  transition: all 0.5s;
  background-color: ${(props) => props.bgColor || `transparent`};

  & a {
    text-align: center;
    display: block;
    padding: 10px 0px;
    margin: 0 16px;
    width: 100%;
    position: relative;
    overflow: hidden;

    /* &::before {
      width: 100%;
      height: 2px;
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      left: translateX(-100%);
      background-color: ${Theme.basic_C};
      transition: left 0.3s;
    }
    &::after {
      width: 100%;
      height: 2px;
      content: "";
      position: absolute;
      bottom: 0;
      left: 100%;
      background-color: ${Theme.basic_C};
      transition: left 0.3s;
    } */
  }
  .active {
    color: ${Theme.basic_C};
    ::after {
      left: 0%;
    }
    ::before {
      left: 0%;
    }
  }

  &:hover {
    color: ${Theme.basic_C};
  }
`;

const HeaerWrap = styled(Wrapper)`
  height: 100px;
  position: ${(props) => props.isscroll || `fixed`};
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 999;

  transition: 0.5s ease all;

  ${(props) =>
    props.isscroll &&
    `
  position: fixed;
  background-color: rgb(255 255 255 / 0.2);
  backdrop-filter: blur(10px);
  `}
`;

const Header = () => {
  const [pageY, setPageY] = useState(0);
  const [headerScroll, setHeaderScroll] = useState(false);

  const scrollEvent = useCallback(() => {
    const { pageYOffset } = window;
    const headerScroll =
      (pageY && pageYOffset !== 0 && pageYOffset !== pageY) ||
      pageYOffset !== 0;
    setHeaderScroll(headerScroll);
    setPageY(pageYOffset);
  }, [pageY]);

  useEffect(() => {
    const scrollHeader = document.addEventListener("scroll", scrollEvent);
    return () => scrollHeader;
  }, [scrollEvent]);

  return (
    <HeaerWrap isscroll={headerScroll}>
      <LayOut dr={`row`} ju={`space-between`} padding={`0`}>
        <Lottie />
        <Wrapper dr={`row`} width={`auto`}>
          <HeadLink>
            <Link to="HOME" spy={true} smooth={true}>
              HOME
            </Link>
          </HeadLink>
          <HeadLink>
            <Link to="ABOUT" spy={true} smooth={true}>
              ABOUT
            </Link>
          </HeadLink>
          <HeadLink>
            <Link to="PROJECT" spy={true} smooth={true}>
              PROJECT
            </Link>
          </HeadLink>
          <HeadLink>
            <Link to="SKILLS" spy={true} smooth={true}>
              SKILLS
            </Link>
          </HeadLink>
          <HeadLink>
            <Link to="CONTACT" spy={true} smooth={true}>
              CONTACT
            </Link>
          </HeadLink>
        </Wrapper>
      </LayOut>
    </HeaerWrap>
  );
};

export default Header;
