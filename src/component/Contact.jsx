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

const Contact = () => {
  const copy = (text) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("복사되었습니다.");
  };
  return (
    <>
      <Wrapper id="CONTACT">
        <LayOut dr={`row`}>
          <Wrapper width={`50%`}>
            <Wrapper>
              <Title>npm run start</Title>
              <SectionTitle>Let's work together</SectionTitle>
              <SubTitle>
                같이 일하고 싶은, 모두 같이 일할 수 있는
                <br />
                협력할 수 있는 동료가 되겠습니다.
              </SubTitle>
            </Wrapper>
            <Image src="/images/my/ming.gif" />
          </Wrapper>
          <Wrapper width={`50%`} margin={`100px 0 0`}>
            <Wrapper margin={`0 0 50px`}>
              <Text fontSize={`30px`} color={`#52526088`}>
                Phone
              </Text>
              <Text fontSize={`36px`} color={`#6679a8`}>
                010.6530.1591
              </Text>
            </Wrapper>
            <Wrapper margin={`0 0 50px`}>
              <Text fontSize={`30px`} color={`#52526088`}>
                Email
              </Text>
              <Wrapper dr={`row`}>
                <Text fontSize={`36px`} color={`#6679a8`}>
                  dds13462@gmail.com
                </Text>
                {/* <Wrapper
                  padding={`0 0 0 10px`}
                  width={`50px`}
                  height={`50px`}
                  cursor={`pointer`}
                  onClick={() => copy("dds13462@gmail.com")}
                >
                  <button>복사</button>
                </Wrapper> */}
              </Wrapper>
            </Wrapper>
            <Text fontSize={`30px`} color={`#52526088`}>
              감사합니다.
            </Text>
          </Wrapper>
        </LayOut>
      </Wrapper>
    </>
  );
};

export default Contact;
