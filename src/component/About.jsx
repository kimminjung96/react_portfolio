import {
  Box,
  Image,
  LayOut,
  SectionTitle,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from "../common/style";

const contentText = [
  ["Name", "김민정"],
  ["Address", "경기도 부천시"],
  ["Birth", "1996.11.04"],
  ["Phone", "010.6530.1591"],
  ["Email", "dds13462@gmail.com"],
  ["GitHub", "github.com/kimminjung96"],
];

const history = [
  ["Career", "2022.06~2022.09", "4leaf software 웹퍼블리셔"],
  ["", "2019.01~ 2020.01", "Holiday Inn Hotel F&B"],
  [
    "Education",
    "2022.11~2023.05",
    "프로젝트기반 프론트엔드 SW개발자 양성과정 수료",
  ],
  ["", "2021.06~2021.12", "영상을 활용한 웹디자인&웹퍼블리셔 양성과정 수료 "],
  ["", "2021.06~2021.12", "선문대학교 중어중국학과 졸업 "],
];

const About = () => {
  return (
    <Wrapper id="ABOUT" bgColor={`${Theme.grey4_C}`}>
      <LayOut>
        <Title>npm minjung config</Title>
        <SectionTitle color={`${Theme.white_C}`}>About Me</SectionTitle>
        {/* <Slide className="width100"> */}
        <SubTitle opacity={`0.6`} color={`${Theme.white_C}`}>
          제가 궁금하시다고요?
          <br />
          어떤 프로젝트에도 사용가능한 라이브러리 김민정입니다.
        </SubTitle>
        {/* </Slide> */}
        <Wrapper dr={`row`} ju={`space-between`}>
          <Box>
            {contentText &&
              contentText.map((data, idx) => {
                return (
                  <Wrapper margin={`0 0 20px`} key={idx} al={`flex-start`}>
                    <Text className="contentText">{data[0]}</Text>
                    <Text className="contentSub">{data[1]}</Text>
                  </Wrapper>
                );
              })}
          </Box>
          <Box>
            {history &&
              history.map((data, idx) => {
                return (
                  <Wrapper margin={`0 0 26px`} key={idx} al={`flex-start`}>
                    {data[0] && <Text className="contentText">{data[0]}</Text>}
                    <Text className="contentSub">{data[2]}</Text>
                    <Text className="contentDate">{data[1]}</Text>
                  </Wrapper>
                );
              })}
          </Box>
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default About;
