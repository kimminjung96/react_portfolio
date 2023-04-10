import styled from "styled-components";
import { Btn, Image, LayOut, Text, Wrapper } from "./style";

const HeadLink = styled.p`
  postion: fixed;
  border: none;
  font-size: 30px;
  padding: 10px 16px;
  color: #333;
  transition: all 0.9s, color 0.3;
  background: ${(props) => props.bgColor || `transparent`};

  &:hover {
    color: #fff;
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.25) inset,
      -200px 0 0 0 rgba(0, 0, 0, 0.25) inset;
  }
`;

const Header = () => {
  return (
    <>
      <LayOut>
        <Wrapper
          dr={`row`}
          ju={`space-between`}
          padding={`30px 0`}
          positiion={`fixed`}
        >
          <Image width={`auto`} src="" alt="로고" />
          <Wrapper dr={`row`} width={`auto`}>
            <HeadLink>HOME</HeadLink>
            <HeadLink>ABOUT</HeadLink>
            <HeadLink>SKILLS</HeadLink>
            <HeadLink>PROJECT</HeadLink>
            <HeadLink>CONTACT</HeadLink>
          </Wrapper>
        </Wrapper>
      </LayOut>
    </>
  );
};

export default Header;
