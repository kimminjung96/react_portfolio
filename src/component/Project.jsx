import { useState } from "react";
import styled from "styled-components";
import { Box, BoxList, Image, LayOut, ModalFont, ProjectBox, SectionTitle, SubTitle, Text, Title, Wrapper } from "../common/style";
import Modal from "./Modal";
import { useEffect } from "react";

const contentItem = [
  {
    id: "01",
    title: "리액트 풀스텍 프로젝트",
    title2: "OneTrip",
    tech: "React,SCSS,JS,Node Express",
    device: "pc,Mobile(반응형,PWA App)",
    period: "3주",
    img: "onetrip1.png",
    detailImg: "onetrip_pull.png",
    Deploy: "vercel,cloudtype",
    page: "메인1 ,서브6",
    contribution: "30%",
    note: "풀스택 프로젝트",
    frontServer: "https://one-trip.vercel.app/",
    backServer: "https://port-0-onetrip-server-nx562olfc8wgdo.sel3.cloudtype.app/products",
    frontGit: "https://github.com/kimminjung96/OneTrip",
    backGit: "https://github.com/Youngjung3/onetrip_server",
    proposal: "onetrip.pdf",
  },
  {
    id: "02",
    title: "리액트 네이티브 프로젝트",
    title2: "OneTrip App",
    tech: "React,SCSS,JS,Node Express",
    device: "pc,Mobile(반응형,PWA App)",
    period: "4일",
    img: "yuseong.png",
    detailImg: "yuseong_pull.png",
    Deploy: "깃허브",
    page: "메인1",
    contribution: "30%",
    note: "리액트네이티브앱",
    frontServer: "",
    backServer: "",
    frontGit: "",
    backGit: "",
    proposal: "",
  },

  {
    id: "03",
    title: "부트스트랩 프로젝트",
    title2: "YORIJORI",
    tech: "React,SCSS,JS,Node Express",
    device: "pc,Mobile(반응형,PWA App)",
    period: "3주",
    img: "yorijori.png",
    detailImg: "yorijori_pull.png",
    Deploy: "깃허브",
    page: "메인1,서브1",
    contribution: "30%",
    note: "https://kimminjung96.github.io/YORIJORI/https://kimminjung96.github.io/YORIJORI/https://kimminjung96.github.io/YORIJORI/https://kimminjung96.github.io/YORIJORI/https://kimminjung96.github.io/YORIJORI/https://kimminjung96.github.io/YORIJORI/https://kimminjung96.github.io/YORIJORI/",
    frontServer: "https://kimminjung96.github.io/YORIJORI/",
    backServer: "",
    frontGit: "https://github.com/kimminjung96/YORIJORI",
    backGit: "",
    proposal: "yorijori.pdf",
  },
  {
    id: "04",
    title: "자바스크립트 프로젝트",
    title2: "유성구 문화관광",
    tech: "HTML,CSS,Javascript",
    device: "pc,Mobile(반응형,PWA App)",
    period: "3주",
    img: "yuseong.png",
    detailImg: "yuseong_pull.png",
    Deploy: "깃허브",
    page: "메인1",
    contribution: "100%",
    note: "",
    frontServer: "https://kimminjung96.github.io/project1/",
    backServer: "", //
    frontGit: "https://github.com/kimminjung96/project1",
    backGit: "", //
    proposal: "yuseong.pdf",
  },
  {
    id: "05",
    title: "리액트 프로젝트",
    title2: "에듀팩토리",
    tech: "React",
    device: "pc,Mobile(반응형)",
    period: "7일",
    img: "yuseong.png",
    detailImg: "yuseong_pull.png",
    Deploy: "포립소프트웨어-aws", //
    page: "메인및 프론트화면",
    contribution: "80%",
    note: "",
    frontServer: "https://www.edufact.co.kr/",
    backServer: "", //
    frontGit: "", //
    backGit: "", //
    proposal: "", //
  },
  {
    id: "06",
    title: "리액트 프로젝트",
    title2: "한국스마트컨설팅교육원",
    tech: "React",
    device: "pc,Mobile(반응형)",
    period: "3일",
    img: "yuseong.png",
    detailImg: "yuseong_pull.png",
    Deploy: "포립소프트웨어-aws", //
    page: "메인제외 서브페이지",
    contribution: "80%",
    note: "테스트페이지는 map함수를 사용하여 하나의 컴포넌트로 데이터를 연결하였습니다.",
    frontServer: "https://scaedu.co.kr/",
    backServer: "", //
    frontGit: "", //
    backGit: "", //
    proposal: "", //
  },
];
const contentItem2 = [
  { name: "인천시 제로웨이스트샵", img: "project01.png", link: "https://www.incheonzerowaste.com/" },
  { name: "네비티아이", img: "project02.png", link: "https://navititest.com/" },
  { name: "Lisnup", img: "project03.png", link: "https://lisnup.me/" },
  { name: "AVA", img: "project04.png", link: "https://avakorea.kr/accessory/type?type=nozzle" },
  { name: "고깃리88", img: "project05.png", link: "https://xn--88-oc2iz9bkz2at6d262a.com/" },
  { name: "쭈꾸미게임", img: "project06.png", link: "https://jmwgame.com/" },
];

const Project = () => {
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const onSetIsVisible = (id) => {
    // console.log(id);
    setModalVisibleId(id);
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible == true) {
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
            contentItem.map((data) => {
              return (
                <Box key={data.id}>
                  <Wrapper className="hover" onClick={() => onSetIsVisible(data)}>
                    <ModalFont>{data.title2}</ModalFont>
                    <ModalFont color={`#292930`} fontSize={`48px`} marginBottom={`30px`}>
                      {data.title}
                    </ModalFont>
                    <Image width={`70%`} src={`/images/project/${data.img}`} />
                  </Wrapper>
                  <div>{isVisible && <Modal data={modalVisibleId} onSetIsVisible={onSetIsVisible} />}</div>
                </Box>
              );
            })}
        </Wrapper>
        <Box width={`100%`} margin={`0`}>
          <ModalFont color={`#292930`} fontSize={`48px`} marginBottom={`30px`}>
            실무 리액트 프로젝트
          </ModalFont>
          <Wrapper dr={`row`} al={`flex-start`} ju={`flex-start`}>
            {contentItem2 &&
              contentItem2.map((data, idx) => {
                return (
                  <BoxList>
                    <Wrapper height={`250px`} radius={`20px`} key={idx} overflow={`hidden`} onClick={()=>window.open(`${data.link}`)}>
                      <Image src={`/images/project/${data.img}`} />
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
