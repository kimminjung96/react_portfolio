import Theme from "../common/Theme";
import {
  Image,
  LayOut,
  SectionTitle,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from "../common/style";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const contentItem = [
  {
    title: "HTML/CSS",
    img: "html2.png",
    num: 95,
  },
  {
    title: "SCSS",
    img: "scss.png",
    num: 90,
  },
  {
    title: "Js ",
    img: "js.png",
    num: 90,
  },
  {
    title: "React",
    img: "react.png",
    num: 95,
  },
  {
    title: "vue3",
    img: "vue3.png",
    num: 85,
  },
  {
    title: "node",
    img: "node.png",
    num: 85,
  },
  {
    title: "PHP",
    img: "php2.png",
    num: 80,
  },
  {
    title: "figma",
    img: "figma.png",
    num: 90,
  },
];

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 800,
    config: { mass: 1, tension: 30, friction: 26 },
  });
  return (
    <animated.span>
      {number.to((n) => {
        return n.toFixed(0);
      })}
    </animated.span>
  );
}

const Skill = () => {
  const numberRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset + window.innerHeight;
      const targetPosition =
        numberRef.current.offsetTop + numberRef.current.offsetHeight / 2;
      if (!isAnimated && currentPosition >= targetPosition) {
        setIsAnimated(true);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, [isAnimated]);

  return (
    <Wrapper id="SKILLS" bgColor={`#27272e`}>
      <LayOut>
        <Title>npm ls</Title>
        <SectionTitle color={`${Theme.white_C}`}>Skills</SectionTitle>
        {/* <Slide className="width100"> */}
        <SubTitle opacity={`0.6`} color={`${Theme.white_C}`}>
          프론트부터 백까지 포함하고 있습니다.
          <br />
          활용도는 %와 같아요!
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
                <Text color={`#ffffff34`} fontSize={`20px`}>
                  {data.title}
                </Text>
                <Text color={`#fff`} fontSize={`28px`} ref={numberRef}>
                  {isAnimated && <Number n={data.num} />}%
                </Text>
              </Wrapper>
            );
          })}
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default Skill;
