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
              <Title>npm run build</Title>
              <SectionTitle>Let's work together</SectionTitle>
              <SubTitle>
                같이 일하고 싶은, 모두 같이 일할 수 있는
                <br />
                협력할 수 있는 동료가 되겠습니다.
              </SubTitle>
            </Wrapper>
            <Image src="/images/my/ming.gif" />
          </Wrapper>
          <Wrapper width={`50%`}>
            <Box>
              <Wrapper margin={`0 0 20px`}>
                <Text className="contentText">Phone</Text>
                <Text className="contentSub">010.6530.1591</Text>
              </Wrapper>
              <Wrapper margin={`0 0 20px`}>
                <Text className="contentText">Email</Text>
                <Text className="contentSub">dds13462@gmail.com</Text>
                <button onClick={() => copy("dds13462@gmail.com")}>
                  이메일 복사
                </button>
              </Wrapper>
            </Box>
          </Wrapper>
        </LayOut>
      </Wrapper>
    </>
  );
};

export default Contact;
