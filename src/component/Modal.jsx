// DetailMenuModal.js

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Image, Wrapper, Btn, Text } from "../common/style";
import Theme from "../common/Theme";

const ModalWrap = styled(Wrapper)`
  /* flex-direction: row; */
  background-color: white;
  width: 60%;
  min-width: 300px;
  max-width: 900px;
  height: 80%;
  overflow-y: scroll;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 5px;
  transform: translate(-50%, -50%);
  z-index: 1011;
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
  padding: 10px 20px;
  background-color: ${(props) => props.color || Theme.basic_C};
  border-radius: 14px;
  color: ${Theme.white_C};
  border: 1px solid;
  cursor: pointer;
  margin: 0 4px;
`;

const Modal = ({ data, onSetIsVisible }) => {
  const MoveLink = (url) => {
    window.open(url);
  };

  return (
    <>
      <BlackWrapper
        className="body-blackout-style"
        onClick={() => onSetIsVisible(false)}
      ></BlackWrapper>
      <ModalWrap>
        <Wrapper>
          <Wrapper
            position={`relative`}
            top={`0`}
            left={`0`}
            onClick={() => onSetIsVisible(false)}
          >
            X
          </Wrapper>
          {/* <Image width={`50%`} src={`/images/my/${data.detailImg}`} /> */}
          <Image
            width={`50%`}
            src={
              "https://cdn.pixabay.com/photo/2019/03/22/13/10/pc-4073227_1280.png"
            }
          />
          <Text>{data.id}</Text>
          <Text>{data.title}</Text>
          <Text>기술스택 : {data.tech}</Text>
          <Text>제작기간 : {data.period}</Text>
          <Text>디바이스 : {data.device}</Text>
          <Text>페이지수 : {data.page}</Text>
          <Text>배포 : {data.Deploy}</Text>
          <Text>기여도 : {data.contribution}</Text>
          <Text>특징 : {data.note}</Text>
          <Wrapper dr={`row`}>
            <LinkBtn
              onClick={() => {
                MoveLink(`${data.frontServer}`);
              }}
            >
              {data.title2} 바로가기
            </LinkBtn>
            {data.frontGit && (
              <LinkBtn
                onClick={() => {
                  MoveLink(`${data.frontGit}`);
                }}
              >
                프론트 깃허브
              </LinkBtn>
            )}
            {data.backServer && (
              <LinkBtn
                onClick={() => {
                  MoveLink(`${data.backServer}`);
                }}
              >
                백 서버가기
              </LinkBtn>
            )}
            {data.backGit && (
              <LinkBtn
                onClick={() => {
                  MoveLink(`${data.backGit}`);
                }}
              >
                백깃허브 바로가기
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
          </Wrapper>
        </Wrapper>
      </ModalWrap>
    </>
  );
};

export default Modal;
