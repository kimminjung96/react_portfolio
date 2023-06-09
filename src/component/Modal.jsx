import styled from "styled-components";
import {
  Image,
  Wrapper,
  Text,
  SpanText,
  ModalFont,
  ModalText,
} from "../common/style";
import Theme from "../common/Theme";
import useWidth from "../common/useWidth";
import { useCallback } from "react";

const ModalWrap = styled(Wrapper)`
  background-color: white;
  width: 70%;
  min-width: 300px;
  height: 70%;
  overflow-y: auto;
  position: fixed;
  cursor: auto;
  left: 50%;
  top: 50%;
  padding: 80px 40px;
  transform: translate(-50%, -50%);
  z-index: 1011;
  border-radius: 20px;

  @media (max-width: 1290px) {
    width: 1100px;
  }

  @media (max-width: 1100px) {
    width: 90%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const ModalLayout = styled(Wrapper)`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  cursor: auto;
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
export const LinkBtn = styled.button`
  width: ${(props) => props.width || `calc(100% / 2 - 10px)`};
  padding: 14px 0;
  background-color: ${(props) => props.bgColor || Theme.white_C};
  border-radius: 14px;
  line-height: 1;
  color: ${(props) => props.color || Theme.basic_C};
  border: 1px solid ${Theme.basic_C};
  cursor: pointer;
  margin: 4px 0;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.color || Theme.basic2_C};
    color: ${Theme.white_C};
  }

  @media (max-width: 900px) {
    width: ${(props) => props.width || `100%`};
  }
`;

const Modal = ({ data, onSetIsVisible }) => {
  const width = useWidth();
  const MoveLink = useCallback((url) => {
    window.open(url);
  }, []);
  if (data.id == 2) {
    return (
      <>
        <BlackWrapper
          className="body-blackout-style"
          onClick={() => onSetIsVisible(false)}
        />
        <ModalWrap overflow={`auto`}>
          <ModalLayout>
            <Wrapper
              cursor={`pointer`}
              position={`fixed`}
              display={`fiexd`}
              top={`10px`}
              right={`10px`}
              width={`40px`}
              height={`40px`}
              radius={`50%`}
              bgColor={`${Theme.grey2_C}`}
              zIndex={`10`}
              onClick={() => onSetIsVisible(false)}
            >
              <Text color={`${Theme.white_C}`}>X</Text>
            </Wrapper>
            <Wrapper
              dr={width < 1100 ? `column` : `row`}
              ju={width < 1100 ? `flex-start` : `center`}
              wrap={`nowrap`}
              width={`100%`}
              height={`100%`}
            >
              <Wrapper
                width={width < 1100 ? `100%` : `45%`}
                height={width < 1100 ? `auto` : `100%`}
                wrap={`nowrap`}
                ju={width < 1100 ? `flex-start` : `space-between`}
              >
                <Wrapper
                  position={`relative`}
                  height={width < 1100 ? `300px` : `100%`}
                  bgColor={`${Theme.black2_C}`}
                >
                  <Image
                    position={`absolute`}
                    width={`auto`}
                    height={`100%`}
                    top={`0`}
                    src={`/images/project/${data.detailImg}`}
                  />
                </Wrapper>
              </Wrapper>

              <Wrapper
                ju={`space-between`}
                width={width < 1100 ? `100%` : `45%`}
                height={width < 1100 ? `auto` : `100%`}
                padding={width < 1100 ? `0` : `0 0 0 10%`}
                wrap={`nowrap`}
              >
                <Wrapper>
                  <ModalFont
                    className="projectText"
                    padding={`0 0 0 20px`}
                    fontSize={`28px`}
                    position={`relative`}
                  >
                    <SpanText
                      position={`absolute`}
                      width={`30px`}
                      fontSize={`14px`}
                      textAlign={`center`}
                      zIndex={`-10`}
                      left={width < 1100 ? `0px` : `-18px`}
                      top={`-0px`}
                      border={`50%`}
                      bgColor={`${Theme.basic3_C}`}
                      color={`${Theme.white_C}`}
                      radius={`50%`}
                      lineHeight={`30px`}
                    >
                      {data.id}
                    </SpanText>
                    {data.title2}
                  </ModalFont>
                  {data.note0 && (
                    <ModalFont className="projectSub">{data.note0}</ModalFont>
                  )}
                  {data.note1 && (
                    <ModalFont className="projectSub">{data.note1}</ModalFont>
                  )}
                  {data.note2 && (
                    <ModalFont className="projectSub">{data.note2}</ModalFont>
                  )}
                  {data.note3 && (
                    <ModalFont className="projectSub">{data.note3}</ModalFont>
                  )}
                  {data.note4 && (
                    <ModalFont className="projectSub">{data.note4}</ModalFont>
                  )}
                  <Image width={`30%`} src={`images/project/${data.Deploy}`} />
                </Wrapper>
                <Wrapper al={`flex-start`} margin={`50px 0 0`}>
                  <Wrapper dr={`row`}>
                    <ModalText>기술스택</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.tech}
                    </ModalText>
                  </Wrapper>

                  <Wrapper dr={`row`}>
                    <ModalText>디바이스</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.device}
                    </ModalText>
                  </Wrapper>
                  <Wrapper dr={`row`}>
                    <ModalText>제작기간</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.period}
                    </ModalText>
                  </Wrapper>
                  <Wrapper dr={`row`}>
                    <ModalText>기&nbsp;&nbsp;여&nbsp;&nbsp;도</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.contribution}
                    </ModalText>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </ModalLayout>
        </ModalWrap>
      </>
    );
  } else {
    return (
      <>
        <BlackWrapper
          className="body-blackout-style"
          onClick={() => onSetIsVisible(false)}
        />
        <ModalWrap overflow={`auto`}>
          <ModalLayout>
            <Wrapper
              cursor={`pointer`}
              position={`fixed`}
              display={`fiexd`}
              top={`10px`}
              right={`10px`}
              width={`40px`}
              height={`40px`}
              radius={`50%`}
              bgColor={`${Theme.grey2_C}`}
              zIndex={`10`}
              onClick={() => onSetIsVisible(false)}
            >
              <Text color={`${Theme.white_C}`}>X</Text>
            </Wrapper>
            <Wrapper
              dr={width < 1100 ? `column` : `row`}
              ju={width < 1100 ? `flex-start` : `center`}
              wrap={`nowrap`}
              width={`100%`}
              height={`100%`}
            >
              <Wrapper
                width={width < 1100 ? `100%` : `45%`}
                height={width < 1100 ? `auto` : `100%`}
                wrap={`nowrap`}
                ju={width < 1100 ? `flex-start` : `space-between`}
              >
                <Wrapper
                  position={`relative`}
                  height={width < 1100 ? `300px` : `60%`}
                  overflow={`hidden`}
                  margin={width < 1100 ? `0 0 20px` : `0 0 60px`}
                >
                  <Image
                    position={`absolute`}
                    width={`100%`}
                    top={`0`}
                    src={`/images/project/${data.detailImg}`}
                  />
                </Wrapper>
                <Wrapper dr={`row`} ju={`space-between`}>
                  <LinkBtn
                    /*  bgColor={`${Theme.basic_C}`}
                    color={`${Theme.white_C}`} */
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
                        MoveLink(`/images/project/${data.proposal}`);
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

              <Wrapper
                ju={`space-between`}
                width={width < 1100 ? `100%` : `45%`}
                height={width < 1100 ? `auto` : `100%`}
                padding={width < 1100 ? `0` : `0 0 0 10%`}
                wrap={`nowrap`}
              >
                <Wrapper>
                  <ModalFont
                    className="projectText"
                    padding={`0 0 0 20px`}
                    fontSize={`28px`}
                    position={`relative`}
                  >
                    <SpanText
                      position={`absolute`}
                      width={`30px`}
                      fontSize={`14px`}
                      textAlign={`center`}
                      zIndex={`-10`}
                      left={width < 1100 ? `0px` : `-18px`}
                      top={`-0px`}
                      border={`50%`}
                      bgColor={`${Theme.basic3_C}`}
                      color={`${Theme.white_C}`}
                      radius={`50%`}
                      lineHeight={`30px`}
                    >
                      {data.id}
                    </SpanText>
                    {data.title2}
                  </ModalFont>
                  {data.note0 && (
                    <ModalFont className="projectSub">{data.note0}</ModalFont>
                  )}
                  {data.note1 && (
                    <ModalFont className="projectSub">{data.note1}</ModalFont>
                  )}
                  {data.note2 && (
                    <ModalFont className="projectSub">{data.note2}</ModalFont>
                  )}
                  {data.note3 && (
                    <ModalFont className="projectSub">{data.note3}</ModalFont>
                  )}
                  {data.note4 && (
                    <ModalFont className="projectSub">{data.note4}</ModalFont>
                  )}
                </Wrapper>
                <Wrapper al={`flex-start`} margin={`50px 0 0`}>
                  <Wrapper dr={`row`}>
                    <ModalText>기술스택</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.tech}
                    </ModalText>
                  </Wrapper>

                  <Wrapper dr={`row`}>
                    <ModalText>디바이스</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.device}
                    </ModalText>
                  </Wrapper>
                  <Wrapper dr={`row`}>
                    <ModalText>페이지수</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.page}
                    </ModalText>
                  </Wrapper>
                  <Wrapper dr={`row`}>
                    <ModalText>제작기간</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.period}
                    </ModalText>
                  </Wrapper>
                  <Wrapper dr={`row`}>
                    <ModalText>
                      배&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포
                    </ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.Deploy}
                    </ModalText>
                  </Wrapper>
                  <Wrapper dr={`row`}>
                    <ModalText>기&nbsp;&nbsp;여&nbsp;&nbsp;도</ModalText>
                    <ModalText width={`calc(100% - 120px)`}>
                      <SpanText
                        color={`${Theme.grey2_C}`}
                        padding={`0 20px 0 0`}
                      >
                        |
                      </SpanText>
                      {data.contribution}
                    </ModalText>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </ModalLayout>
        </ModalWrap>
      </>
    );
  }
};

export default Modal;
