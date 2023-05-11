import { Box, Image, LayOut, SectionTitle, SubTitle, Text, Title, Wrapper } from "../common/style";

const Contact = () => {
  const copy = (text) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
    window.navigator.clipboard.writeText(text).then(() => {
      alert("복사되었습니다.");
    });
  };
  return (
    <>
      <Wrapper id="CONTACT">
        <LayOut dr={`row`}>
          <Wrapper>
            <Title>npm run start</Title>
            <SectionTitle>Let's work together</SectionTitle>
            <SubTitle>
              같이 일하고 싶은, 모두 같이 일할 수 있는
              <br />
              협력할 수 있는 동료가 되겠습니다.
            </SubTitle>
          </Wrapper>
          <Wrapper width={`50%`}>
            <Image src="/images/my/ming.gif" />
          </Wrapper>
          <Box width={`50%`} height={`350px`} margin={`0`}>
            <Wrapper margin={`0 0 50px`} al={`flex-start`}>
              <Text fontSize={`24px`} color={`#52526088`}>
                Phone
              </Text>
              <Text fontSize={`36px`} color={`#6679a8`} padding={`0 0 0 10px`}>
                010.6530.1591
              </Text>
            </Wrapper>
            <Wrapper al={`flex-start`}>
              <Text fontSize={`24px`} color={`#52526088`}>
                Email
              </Text>
              <Wrapper dr={`row`} padding={`0 0 0 10px`} ju={`flex-start`}>
                <Text fontSize={`36px`} color={`#6679a8`}>
                  dds13462@gmail.com
                </Text>
                <Wrapper padding={`0 0 0 10px`} width={`50px`} height={`50px`} cursor={`pointer`} onClick={() => copy("dds13462@gmail.com")}>
                  <Image src="/images/icon/link.png" />
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Box>
        </LayOut>
      </Wrapper>
    </>
  );
};

export default Contact;
