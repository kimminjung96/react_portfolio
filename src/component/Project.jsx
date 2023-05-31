import { useState } from "react";
import styled from "styled-components";
import {
  Box,
  BoxList,
  Image,
  LayOut,
  ModalFont,
  SectionTitle,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from "../common/style";
import Modal, { LinkBtn } from "./Modal";
import { useEffect } from "react";
import Theme from "../common/Theme";

const contentItem = [
  {
    id: "01",
    title: "리액트 풀스텍",
    title2: "OneTrip",
    tech: "React,SCSS,JS,Node Express",
    device: "pc,Mobile(반응형,PWA App)",
    period: "3주",
    img: "onetrip1.png",
    detailImg: "onetrip_pull.png",
    Deploy: "vercel,cloudtype",
    page: "메인1 ,서브6",
    contribution: "25% (4인 팀) / 프론트개발담당",
    note0: "메인화면 구현 및 연동",
    note1: "상품업로드 기능 구현",
    note2: "리뷰DB 생성",
    note3: "리뷰업로드 기능 구현 및 화면 연동",
    note4: "깃 프론트 관리",
    frontServer: "https://one-trip.vercel.app/",
    backServer:
      "https://port-0-onetrip-server-nx562olfc8wgdo.sel3.cloudtype.app/products",
    frontGit: "https://github.com/kimminjung96/OneTrip",
    backGit: "https://github.com/Youngjung3/onetrip_server",
    proposal: "onetrip.pdf",
  },
  {
    id: "02",
    title: "리액트 네이티브",
    title2: "OneTrip App",
    tech: "React Native",
    device: "apk",
    period: "4일",
    img: "onetrip_app2.png",
    detailImg: "onetrip_app.gif",
    Deploy: "onetripApp.png",
    page: "",
    contribution: "100%",
    note0: "메인페이지",
    note1: "상품상세페이지",
    note2: "품절처리 및 결제메시지 구현",
    note3: "",
    note4: "",
    frontServer: "",
    backServer: "",
    frontGit: "https://github.com/kimminjung96/onetrip-app",
    backGit: "",
    proposal: "",
  },

  {
    id: "03",
    title: "부트스트랩",
    title2: "YORIJORI",
    tech: "Bootstrap,SCSS,JS",
    device: "pc,Mobile(반응형)",
    period: "2주",
    img: "yorijori.png",
    detailImg: "yorijori_pull.png",
    Deploy: "Github",
    page: "메인1,서브1",
    contribution: "20% (5인 팀) / 팀장",
    note0: "깃환경 관리",
    note1: "전체적 디자인 구성",
    note2: "메인 슬라이드구현",
    note3: "",
    note4: "",
    frontServer: "https://kimminjung96.github.io/YORIJORI/",
    backServer: "",
    frontGit: "https://github.com/kimminjung96/YORIJORI",
    backGit: "",
    proposal: "yorijori.pdf",
  },
  {
    id: "04",
    title: "자바스크립트",
    title2: "유성구 문화관광",
    tech: "HTML,CSS,JS",
    device: "pc",
    period: "3주",
    img: "yuseong.png",
    detailImg: "yuseong_pull.png",
    Deploy: "Github",
    page: "메인1",
    contribution: "100%",
    note0: "구글 애널리틱스 적용",
    note1: "가로&세로 슬라이드 및 tab버튼 구현",
    note2: "setcookie함수를 사용하여 팝업을 구현",
    note3: "scrollTo을 얻어와서 애니메이션 및 top버튼 구현",
    note4: "",
    frontServer: "https://kimminjung96.github.io/project1/",
    backServer: "", //
    frontGit: "https://github.com/kimminjung96/project1",
    backGit: "", //
    proposal: "yuseong.pdf",
  },
];
const contentItem2 = [
  { name: "에듀팩토리", img: "01.png", link: "https://www.edufact.co.kr/" },
  {
    name: "한국스마트컨설팅교육원",
    img: "02.png",
    link: "https://scaedu.co.kr/",
  },
  {
    name: "인천시 제로웨이스트샵",
    img: "03.png",
    link: "https://www.incheonzerowaste.com/",
  },
  { name: "네비티아이", img: "04.png", link: "https://navititest.com/" },
  { name: "Lisnup", img: "05.png", link: "https://lisnup.me/" },
  {
    name: "AVA",
    img: "06.png",
    link: "https://avakorea.kr/accessory/type?type=nozzle",
  },
  {
    name: "고깃리88",
    img: "07.png",
    link: "https://xn--88-oc2iz9bkz2at6d262a.com/",
  },
  { name: "잡24", img: "08.png", link: "https://job24.co.kr/" },
];

const Project = () => {
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const onSetIsVisible = (id) => {
    setModalVisibleId(id);
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible === true) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isVisible]);

  return (
    <Wrapper id="PROJECT">
      <LayOut>
        <Title>npm publish</Title>
        <SectionTitle>Projects</SectionTitle>
        <SubTitle>Click! 프로젝트로 이동가능합니다!</SubTitle>
        {/* <Slide className="width100"></Slide> */}
        <Wrapper dr={`row`} ju={`space-between`} margin={`30px 0 0`}>
          {contentItem &&
            contentItem.map((data, idx) => {
              if (idx === 1) {
                return (
                  <Box key={data.id} cursor={`pointer`}>
                    <Wrapper
                      className="hover"
                      onClick={() => onSetIsVisible(data)}
                    >
                      <ModalFont>{data.tech}</ModalFont>
                      <ModalFont
                        color={`${Theme.grey2_C}`}
                        fontSize={`48px`}
                        marginBottom={`30px`}
                      >
                        {data.title}
                      </ModalFont>
                      <Image
                        width={`30%`}
                        src={`/images/project/${data.img}`}
                      />
                    </Wrapper>
                    <div>
                      {isVisible && (
                        <Modal
                          data={modalVisibleId}
                          onSetIsVisible={onSetIsVisible}
                        />
                      )}
                    </div>
                  </Box>
                );
              } else {
                return (
                  <Box key={data.id} cursor={`pointer`}>
                    <Wrapper
                      className="hover"
                      onClick={() => onSetIsVisible(data)}
                    >
                      <ModalFont>{data.tech}</ModalFont>
                      <ModalFont
                        color={`${Theme.grey2_C}`}
                        fontSize={`48px`}
                        marginBottom={`30px`}
                      >
                        {data.title}
                      </ModalFont>
                      <Image
                        width={`70%`}
                        src={`/images/project/${data.img}`}
                      />
                    </Wrapper>
                    <div>
                      {isVisible && (
                        <Modal
                          data={modalVisibleId}
                          onSetIsVisible={onSetIsVisible}
                        />
                      )}
                    </div>
                  </Box>
                );
              }
            })}
        </Wrapper>
        <Box width={`100%`} margin={`0`}>
          <ModalFont
            color={`${Theme.grey2_C}`}
            fontSize={`48px`}
            marginBottom={`30px`}
          >
            실무 리액트 프로젝트
          </ModalFont>
          <Wrapper dr={`row`} al={`flex-start`} ju={`flex-start`}>
            {contentItem2 &&
              contentItem2.map((data, idx) => {
                return (
                  <BoxList key={idx}>
                    <Wrapper
                      ju={`flex-start`}
                      key={idx}
                      margin={`0 0 16px`}
                      overflow={`hidden`}
                      cursor={`pointer`}
                      onClick={() => window.open(`${data.link}`)}
                    >
                      <Image
                        src={`/images/project/${data.img}`}
                        radius={`20px`}
                      />
                    </Wrapper>
                    <Text padding={`10px 0`}>{data.name}</Text>
                  </BoxList>
                );
              })}
          </Wrapper>
        </Box>
      </LayOut>
    </Wrapper>
  );
};

export default Project;
