import { Slide } from "react-awesome-reveal";
import { Box, Image, LayOut, SectionTitle, SubTitle, Text, Title, Wrapper } from "../common/style";

const contentItem = [
  {
    title: "2021",
    title2: "eget risus imperdiet.",
    img: "ming.gif",
  },
  {
    title: "2022",
    title2: "eget risus imperdiet.",
    img: "ming.gif",
  },
];

const Three = () => {
  return (
    <Wrapper>
      <LayOut>
        <Title>npm publish</Title>
        <SectionTitle>Projects</SectionTitle>
        <Slide className="width100"></Slide>
        <Wrapper dr={`row`} ju={`space-between`} margin={`30px 0 0`}>
          {contentItem.map((data, idx) => {
            return (
              <Box key={idx}>
                <Text className="contentSub">{data.title}</Text>
                <Text className="contentText">{data.title2}</Text>
                <Image src={`/images/my/${data.img}`} />
              </Box>
            );
          })}
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default Three;
