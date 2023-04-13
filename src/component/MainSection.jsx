import { Btn, Image, LayOut, Text, Title, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";
import styled from "styled-components";

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

const MainSection = () => {
  const width = useWidth();
  return (
    <>
      <MainWrapper id="HOME">
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
                <Btn bgColor={`#5956e9`} color={`#fff`} margin={`0 10px`}>
                  <Text Pret={true}>이력서 다운로드</Text>
                </Btn>
                <Btn bgColor={`#5956e9`} color={`#fff`} margin={`0 10px`}>
                  <Text>github 바로가기</Text>
                </Btn>
              </Wrapper>
            </Wrapper>
            <Wrapper
              width={width < 700 ? `50%` : `40%`}
              height={`700px`}
              overflow={`hidden`}
              bgColor={`linear-gradient(180deg, pink, white)`}
              radius={`48% 48% 0 0`}
            >
              <Image
                src="/images/my/min.png"
                alt="나의 프로필 사진"
                transform={`rotateY(180deg)`}
                objPosition={`60px 540px`}
              />
            </Wrapper>
          </Wrapper>
        </LayOut>
      </MainWrapper>
    </>
  );
};

export default MainSection;
