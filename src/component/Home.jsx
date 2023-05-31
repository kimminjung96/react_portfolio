import React from "react";
import { useSpring, animated } from "react-spring";
import {
  Btn,
  Image,
  LayOut,
  Text,
  Title,
  Wrapper,
  animation,
  animation1,
  animation2,
} from "../common/style";
import Theme from "../common/Theme";

import styled, { keyframes } from "styled-components";
import useWidth from "../common/useWidth";
import { Link } from "react-router-dom";

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #a495dd;
  position: absolute;
  z-index: -100;
  border-radius: 100%;
  animation: ${animation} 2s ease-in-out infinite;
  animation-duration: 20s;
`;
const Circle1 = styled.div`
  width: 30px;
  height: 30px;
  background-color: #e9b8c9eb;
  position: absolute;
  transform: translateX(0px) translateY(200px);
  z-index: -100;
  border-radius: 100%;
  animation: ${animation1} 2s ease-in-out infinite;
  animation-duration: 20s;
`;
const Circle2 = styled.div`
  width: 60px;
  height: 60px;
  background-color: #b4c5e6eb;
  position: absolute;
  transform: translateX(-600px) translateY(90px);
  z-index: -100;
  border-radius: 100%;
  animation: ${animation2} 2s ease-in-out infinite;
  animation-duration: 25s;
`;

const MainWrapper = styled(Wrapper)`
  position: relative;
  height: 100vh;

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
  font-size: ${(props) => props.fontSize || `80px`};
  line-height: 1.5;
  letter-spacing: -1.5px;
  font-weight: 500;
  margin: 0;
  color: ${Theme.grey4_C};
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
const Myprofile = styled(Wrapper)`
  width: ${(props) => props.width || `50%`};
`;

const Card = styled(Wrapper)`
  & .card1 {
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
    top: 50%;
    width: 30%;
    height: 70%;
    border-radius: 48% 48% 0 0;
    background: linear-gradient(180deg, #ffc0cb, #ecbfc7, #ffffff);
  }

  & .card2 {
    position: absolute;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
    width: 30%;
    height: 80%;
    right: 16.5%;
    bottom: 46px;
    background-image: url(/images/my/01.png);
  }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans2 = (x, y) => `translate3d(${x / -8 + 35}px,${y / -8 - 230}px,0)`;
const trans4 = (x, y) => `translate3d(${x / -11.5}px,${y / -7.5}px,0)`;

const Home = () => {
  const width = useWidth();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <MainWrapper
      id="HOME"
      overflow={`hidden`}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Circle />
      <Circle1 />
      <Circle2 />
      <LayOut>
        <Wrapper dr={`row`} ju={width < 700 ? `center` : "space-between"}>
          <Wrapper
            al={width < 700 ? `center` : `left`}
            width={width < 700 ? `100%` : `auto`}
          >
            <Title fontWeight={`700`}>npm i minjung</Title>
            <Slogan>
              <Text
                D2={true}
                display={`inline-block`}
                fontSize={`96px`}
                className="font96"
              >
                Npm
              </Text>
              <Text
                D2={true}
                display={`inline-block`}
                margin={`0 20px`}
                fontSize={`96px`}
                className="font96"
              >
                run
              </Text>
              <Text display={`inline-block`}>김민정</Text>
            </Slogan>
            <SubSlogan>
              start<span> 준비가 된 </span>frontend
            </SubSlogan>
            <Wrapper dr={`row`} ju={`flex-start`}>
              <Btn>
                <a href="/images/my/resume.pdf" target="_blank">
                  이력서 바로가기
                </a>
              </Btn>
              <Btn>
                <Link to={"https://github.com/kimminjung96/"} target="_blank">
                  깃허브 바로가기
                </Link>
              </Btn>
            </Wrapper>
          </Wrapper>

          <Myprofile>
            <Card>
              <animated.div
                className="card1"
                style={{ transform: props.xy.interpolate(trans2) }}
              />
            </Card>

            <Card>
              <animated.div
                className="card2"
                style={{ transform: props.xy.interpolate(trans4) }}
              />
            </Card>
          </Myprofile>
        </Wrapper>
      </LayOut>
    </MainWrapper>
  );
};
export default Home;
