import { Slide } from "react-awesome-reveal";
import { Box, Image, LayOut, SectionTitle, SubTitle, Text, Title, Wrapper } from "../common/style";

const contentText = [
  ["name", "김민정"],
 /*  ["Birth", "1996.11.04"], */
  ["Address", "경기도 부천시"],
  ["Phone", "010.6530.1591"],
  ["Email", "dds13462@gmail.com"],
  ["GitHub", "github.com/kimminjung96"],
];

const history = [
  ["Education", "2022.11~2023.05", "프로젝트기반 프론트엔드 (React,Vue) 웹&앱 SW개발자 양성과정 수료 -그린컴퓨터아카데미-"],
  ["", "2021.06~2021.12", "(디지털디자인)영상을 활용한 웹디자인&웹퍼블리셔 양성과정 수료 -그린컴퓨터아카데미- "],
  ["Experience", "2022.06~2022.09", "4leaf software 웹퍼블리셔"],
  ["", "2019.01~ 2020.01", "Holiday Inn Hotel F&B"],
];

const Second = () => {
  return (
    <Wrapper bgColor={`#27272e`}>
      <LayOut>
        <Title>npm minjung help</Title>
        <SectionTitle color={`#fff`}>About Me</SectionTitle>
        <Slide className="width100">
          <SubTitle opacity={`0.6`} color={`#fff`}>
            제가 궁금하시다고요?
            <br />
            어떤 프로젝트에도 사용가능한 라이브러리 김민정입니다.
          </SubTitle>
        </Slide>
        <Wrapper dr={`row`} ju={`space-between`}>
          <Box>
            {contentText &&
              contentText.map((data, idx) => {
                return (
                  <Wrapper margin={`0 0 40px`} key={idx}>
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
                  <Wrapper margin={`0 0 40px`} key={idx}>
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

export default Second;
