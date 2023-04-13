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

const contentItem = [
  {
    title: "HTML/CSS",
    img: "html2.png",
  },
  {
    title: "SCSS",
    img: "scss.png",
  },
  {
    title: "Js ",
    img: "js.png",
  },
  {
    title: "React",
    img: "react.png",
  },
  {
    title: "vue3",
    img: "vue3.png",
  },
  {
    title: "node",
    img: "node.png",
  },
  {
    title: "sqlite",
    img: "sqlite.png",
  },
  {
    title: "figma",
    img: "figma.png",
  },
];

const Four = () => {
  return (
    <Wrapper id="SKILLS" bgColor={`#27272e`}>
      <LayOut>
        <Title>npm ls</Title>
        <SectionTitle color={`#fff`}>Skills</SectionTitle>
        {/* <Slide className="width100"> */}
        <SubTitle opacity={`0.6`} color={`#fff`}>
          Design anything from simple icons to fully featured
          <br />
          websites and applications.
        </SubTitle>
        {/* </Slide> */}
        <Wrapper dr={`row`} ju={`space-between`}>
          {contentItem.map((data, idx) => {
            return (
              <Wrapper
                key={idx}
                width={`calc(100%/4 - 20px)`}
                padding={`30px 10px`}
              >
                <Wrapper width={`60px`} margin={`20px`}>
                  <Image src={`/images/icon/${data.img}`} />
                </Wrapper>
                <Text color={`#fff`} fontSize={`20px`}>
                  {data.title}
                </Text>
              </Wrapper>
            );
          })}
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default Four;
