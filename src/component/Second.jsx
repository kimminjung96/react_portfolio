import { Slide } from "react-awesome-reveal";
import { Box, Image, LayOut, SectionTitle, SubTitle, Text, Title, Wrapper } from "../common/style";

/* 


*/

const contentText = [
  {
    name: "김민정",
    Birth: "1996.11.04",
    Address: "경기도 부천시",
    GitHub: "github.com/kimminjung96",
    Email: "dds13462@gmail.com",
    Phone: "010.6530.1591",
  },
  {
    title: "Nulla Dacilisi. ",
    title2: "eget risus imperdiet.",
  },
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
            <Wrapper margin={`0 0 40px`}>
              <Text className="contentText">name</Text>
              <Text className="contentSub">김민정</Text>
            </Wrapper>
          </Box>
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default Second;
