import { Slide } from "react-awesome-reveal";
import { Box, Image, LayOut, SectionTitle, SubTitle, Text, Title, Wrapper } from "../common/style";

const contentItem = [
  {
    title: "Nulla Dacilisi. ",
    title2: "eget risus imperdiet.",
    img: "ming.gif",
  },
  {
    title: "Nulla Dacilisi. ",
    title2: "eget risus imperdiet.",
    img: "ming.gif",
  },
  {
    title: "Nulla Dacilisi. ",
    title2: "eget risus imperdiet.",
    img: "ming.gif",
  },
  {
    title: "Nulla Dacilisi. ",
    title2: "eget risus imperdiet.",
    img: "ming.gif",
  },
];

const Second = () => {
  return (
    <Wrapper bgColor={`#27272e`}>
      <LayOut>
        <Title>Nulla facilisi</Title>
        <SectionTitle color={`#fff`}>Selected projects</SectionTitle>
        <Slide className="width100">
          <SubTitle opacity={`0.6`} color={`#fff`}>
            Nulla facilisiNulla facilisi
            <br />
            Nulla facilisi. Nullam in magna id dolor
          </SubTitle>
        </Slide>
        <Wrapper dr={`row`}ju={`space-between`}>
            {contentItem.map((data,idx)=>{
                return(
                    <Box key={idx}>
                        <Text className="contentSub">{data.title}</Text>
                        <Text className="contentText">{data.title2}</Text>
                        <Image src={`/images/my/${data.img}`} />
                    </Box>
                )
            })}
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default Second;
