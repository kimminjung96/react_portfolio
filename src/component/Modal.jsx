import styled from "styled-components";
import { Image, Wrapper, Text, SpanText, ModalFont, ModalText } from "../common/style";
import Theme from "../common/Theme";

const ModalWrap = styled(Wrapper)`
  background-color: white;
  width: 70%;
  min-width: 300px;
  max-width: 1100px;
  height: 70%;
  overflow: hidden;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 80px 40px;
  transform: translate(-50%, -50%);
  z-index: 1011;
  border-radius: 20px;
`;

const BlackWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.35);
`;
const LinkBtn = styled.button`
  width: ${(props) => props.width || `calc(100% / 2 - 10px)`};
  padding: 14px 0;
  background-color: ${(props) => props.color || Theme.white_C};
  border-radius: 14px;
  line-height: 1;
  color: ${Theme.sub2_C};
  border: 1px solid;
  cursor: pointer;
  margin: 4px 0;

  @media (max-width: 900px) {
    width: ${(props) => props.width || `100%`};
  }
`;

const Modal = ({ data, onSetIsVisible }) => {
  const MoveLink = (url) => {
    window.open(url);
  };

  return (
    <>
      <BlackWrapper className="body-blackout-style" onClick={() => onSetIsVisible(false)} />
      <ModalWrap>
        <Wrapper position={`relative`} height={`100%`} ju={`space-between`}>
          <Wrapper cursor={`pointer`} position={`absolute`} top={`-60px`} right={`-20px`} width={`40px`} height={`40px`} radius={`50%`} bgColor={`${Theme.grey2_C}`} zIndex={`10`} onClick={() => onSetIsVisible(false)}>
            <Text color={`${Theme.white_C}`}>X</Text>
          </Wrapper>
          <Wrapper dr={`row`} height={`100%`}>
            <Wrapper width={`45%`} height={`100%`} ju={`flex-end`}>
              <Wrapper position={`relative`} height={`60%`} overflow={`hidden`} margin={`0 0 60px`}>
                <Image position={`absolute`} width={`100%`} top={`0`} src={`/images/project/${data.detailImg}`} />
              </Wrapper>
              <Wrapper dr={`row`} ju={`space-between`}>
                <LinkBtn
                  width={`100%`}
                  onClick={() => {
                    MoveLink(`${data.frontServer}`);
                  }}
                >
                  사이트 바로가기
                </LinkBtn>
                {data.backServer && (
                  <LinkBtn
                    onClick={() => {
                      MoveLink(`${data.backServer}`);
                    }}
                  >
                    백 서버가기
                  </LinkBtn>
                )}
                {data.proposal && (
                  <LinkBtn
                    onClick={() => {
                      MoveLink(`${data.proposal}`);
                    }}
                  >
                    기획서 보러가기
                  </LinkBtn>
                )}
                {data.frontGit && (
                  <LinkBtn
                    onClick={() => {
                      MoveLink(`${data.frontGit}`);
                    }}
                  >
                    프론트 깃허브
                  </LinkBtn>
                )}

                {data.backGit && (
                  <LinkBtn
                    onClick={() => {
                      MoveLink(`${data.backGit}`);
                    }}
                  >
                    백 깃허브
                  </LinkBtn>
                )}
              </Wrapper>
            </Wrapper>

            <Wrapper ju={`space-between`} width={`45%`} height={`100%`} padding={`0 0 0 10%`}>
              <Wrapper>
                <ModalFont className="projectText" position={`relative`}>
                  <SpanText position={`absolute`} width={`30px`} fontSize={`14px`} textAlign={`center`} zIndex={`-10`} left={`-18px`} top={`-0px`} border={`50%`} bgColor={`${Theme.basic_C}`} color={`${Theme.white_C}`} radius={`50%`} lineHeight={`30px`}>
                    {data.id}
                  </SpanText>
                  {data.title}
                </ModalFont>
                <ModalFont className="projectSub">{data.note}</ModalFont>
              </Wrapper>
              <Wrapper al={`flex-start`} margin={`50px 0 0`}>
                <Wrapper dr={`row`}>
                  <ModalText>기술스택</ModalText>
                  <ModalText width={`calc(100% - 120px)`}>
                    <SpanText color={`${Theme.grey2_C}`} padding={`0 20px 0 0`}>
                      |
                    </SpanText>{" "}
                    {data.tech}
                  </ModalText>
                </Wrapper>

                <Wrapper dr={`row`}>
                  <ModalText>디바이스</ModalText>
                  <ModalText width={`calc(100% - 120px)`}>
                    <SpanText color={`${Theme.grey2_C}`} padding={`0 20px 0 0`}>
                      |
                    </SpanText>{" "}
                    {data.device}
                  </ModalText>
                </Wrapper>
                <Wrapper dr={`row`}>
                  <ModalText>페이지수</ModalText>
                  <ModalText width={`calc(100% - 120px)`}>
                    <SpanText color={`${Theme.grey2_C}`} padding={`0 20px 0 0`}>
                      |
                    </SpanText>{" "}
                    {data.page}
                  </ModalText>
                </Wrapper>
                <Wrapper dr={`row`}>
                  <ModalText>제작기간</ModalText>
                  <ModalText width={`calc(100% - 120px)`}>
                    <SpanText color={`${Theme.grey2_C}`} padding={`0 20px 0 0`}>
                      |
                    </SpanText>{" "}
                    {data.period}
                  </ModalText>
                </Wrapper>
                <Wrapper dr={`row`}>
                  <ModalText>배&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포</ModalText>
                  <ModalText width={`calc(100% - 120px)`}>
                    <SpanText color={`${Theme.grey2_C}`} padding={`0 20px 0 0`}>
                      |
                    </SpanText>{" "}
                    {data.Deploy}
                  </ModalText>
                </Wrapper>
                <Wrapper dr={`row`}>
                  <ModalText>기&nbsp;&nbsp;여&nbsp;&nbsp;도</ModalText>
                  <ModalText width={`calc(100% - 120px)`}>
                    <SpanText color={`${Theme.grey2_C}`} padding={`0 20px 0 0`}>
                      |
                    </SpanText>{" "}
                    {data.contribution}
                  </ModalText>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </ModalWrap>
    </>
  );
};

export default Modal;