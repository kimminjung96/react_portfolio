import { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Image,
  LayOut,
  ModalFont,
  SectionTitle,
  SubTitle,
  Title,
  Wrapper,
} from "../common/style";
import Modal from "./Modal";
import { useEffect } from "react";

const contentItem = [
  {
    id: 1,
    title: "리엑트 풀스텍 프로젝트",
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
    backServer:
      "https://port-0-onetrip-server-nx562olfc8wgdo.sel3.cloudtype.app/products",
    frontGit: "https://github.com/kimminjung96/OneTrip",
    backGit: "https://github.com/Youngjung3/onetrip_server",
    proposal: "onetrip.pdf",
  },
  {
    id: 2,
    title: "리엑트 네이티브 프로젝트",
    title2: "OneTrip App",
    tech: "React,SCSS,JS,Node Express",
    device: "pc,Mobile(반응형,PWA App)",
    period: "4일",
    img: "yuseong.png",
    detailImg: "yuseong_pull.png",
    Deploy: "깃허브",
    page: "메인1",
    contribution: "30%",
    note: "리엑트네이티브앱",
    frontServer: "",
    backServer: "",
    frontGit: "",
    backGit: "",
    proposal: "",
  },
  {
    id: 3,
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
    id: 4,
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
                  <Wrapper
                    className="hover"
                    onClick={() => onSetIsVisible(data)}
                  >
                    <ModalFont className="projectSub">{data.title2}</ModalFont>
                    <ModalFont className="projectText">{data.title}</ModalFont>
                    <Image width={`70%`} src={`/images/project/${data.img}`} />
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
            })}
        </Wrapper>
      </LayOut>
    </Wrapper>
  );
};

export default Project;
