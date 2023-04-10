import { Slide } from "react-awesome-reveal";
import { Box, Image, LayOut, SectionTitle, SubTitle, Text, Title, Wrapper } from "../common/style";

const contentItem = [
  {
    title: "HTML",
    img: "html2.png",
  },
  {
    title: "CSS/SCSS",
    img: "scss.png",
  },
  {
    title: "Js/jQuery ",
    img: "js.gif",
  },
  {
    title: "React",
    img: "react.gif",
  },
  {
    title: "vue3",
    img: "vue3.gif",
  },
  {
    title: "node",
    img: "node.gif",
  },
  {
    title: "sqlite",
    img: "sqlite.gif",
  },
  {
    title: "figma",
    img: "figma.gif",
  },
];

const Four = () => {
  return (
    <Wrapper bgColor={`#27272e`}>
      <LayOut>
        <Title>Nulla facilisi</Title>
        <SectionTitle color={`#fff`}>
          We’ve built solutions
          <br />
          for...
        </SectionTitle>
        <Slide className="width100">
          <SubTitle opacity={`0.6`} color={`#fff`}>
            Design anything from simple icons to fully featured
            <br />
            websites and applications.
          </SubTitle>
        </Slide>
        <Wrapper dr={`row`} ju={`space-between`}>
          {contentItem.map((data, idx) => {
            return (
              <Wrapper width={`auto`}>
                <Wrapper width={`40px`}>
                  <Image src={`/images/icon/${data.img}`} />
                </Wrapper>
                <Text>{data.title}</Text>
              </Wrapper>
            );
          })}
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default Four;
