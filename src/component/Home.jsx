import { Btn, Image, LayOut, Text, Title, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";
import styled from "styled-components";
import Theme from "../common/Theme";
import { useState } from "react";

/* 
react-awesome-reveal

*/

const MainWrapper = styled(Wrapper)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 10%;
    z-index: -10;
    display: block;
    width: 30%;
    height: 100%;
    background: url("/images/bg/main1.png") no-repeat;
    background-size: contain;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0%;
    z-index: -10;
    display: block;
    width: 50%;
    height: 100%;
    background: url("/images/bg/main2.png") 0% 100% / contain no-repeat;
  }
`;
const Slogan = styled.h2`
  width: auto;
  font-family: "Pretendard";
  font-size: 80px;
  line-height: 1.5;
  letter-spacing: -1.5px;
  font-weight: 500;
  margin: 0;
  color: #27272e;
  text: #27272e;
  text-align: left;
  > span {
    margin-right: 20px;
  }
  > span.font96 {
    font-size: 96px;
  }
  @media (max-width: 800px) {
    font-size: 40px;
  }
`;
const SubSlogan = styled(Slogan)`
  font-family: "PretendardLight";
  font-size: 58px;
  line-height: 1.4;
  margin-bottom: 60px;
  & > span {
    font-size: 50px;
    letter-spacing: -5px;
  }

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;
const MyImg = styled(Wrapper)`
  width: 50%;
  perspective: 1000px;
  & .floating {
    box-shadow: 0 70px 63px -60px #494848;
    transform-style: preserve-3d;
    /* transition: transform 0.05s linear; */

    & img {
      transform: translateZ(80px);
    }
  }
`;

const Home = () => {
  const width = useWidth();

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = -(window.innerWidth / 2 - event.pageX) / 30;
    const y = (window.innerHeight / 2 - event.pageY) / 50;
    setRotation({ x, y });
  };

  return (
    <>
      <MainWrapper id="HOME" onMouseMove={handleMouseMove}>
        <LayOut padding={`160px 0 120px`}>
          <Wrapper dr={`row`} ju={width < 700 ? `center` : "space-between"}>
            <Wrapper al={width < 700 ? `center` : `left`} width={width < 700 ? `100%` : `auto`}>
              <Title fontWeight={`700`}>npm i minjung</Title>
              <Slogan>
                <Text D2={true} display={`inline-block`} fontSize={`96px`} className="font96">
                  Npm
                </Text>
                <Text D2={true} display={`inline-block`} margin={`0 20px`} fontSize={`96px`} className="font96">
                  run
                </Text>
                <Text display={`inline-block`}>김민정</Text>
              </Slogan>
              <SubSlogan>
                start<span> 준비가 된 </span>frontend
              </SubSlogan>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <Btn bgColor={`${Theme.basic_C}`} color={`${Theme.white_C}`} margin={`0 10px`}>
                  <Text Pret={true}>이력서 다운로드</Text>
                </Btn>
                <Btn bgColor={`${Theme.basic_C}`} color={`${Theme.white_C}`} margin={`0 10px`}>
                  <Text>github 바로가기</Text>
                </Btn>
              </Wrapper>
            </Wrapper>
            <MyImg width={width < 700 ? `50%` : `40%`} style={{ transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)` }}>
              <Wrapper className="floating" width={`80%`} height={`600px`} bgColor={`linear-gradient(180deg, pink, white)`} radius={`48% 48% 0 0`}>
                <Image src="/images/my/01.png" alt="나의 프로필 사진" width={`80%`} position={`absolute`} bottom={`0`} transform={`rotateY(180deg)`} /* objPosition={`60px 540px`} */ />
              </Wrapper>
            </MyImg>
          </Wrapper>
        </LayOut>
      </MainWrapper>
    </>
  );
};

export default Home;
