import { useState } from "react";
import styled from "styled-components";
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
import Modal from "./Modal";

const contentItem = [
  {
    id: 1,
    title: "OneTrip",
    title2: "원트립",
    tech: "React,SCSS,JS,NODE EXPRESS",
    device: "pc,Mobile(반응형,PWA App)",
    period: "3주",
    img: "ming.gif",
    detailImg: "",
    Deploy: "깃허브",
    page: "메인1",
    contribution: "30%",
    note: "풀스택 프로젝트",
    frontServer: "https://one-trip.vercel.app/",
    backServer:
      "https://port-0-onetrip-server-nx562olfc8wgdo.sel3.cloudtype.app/products",
    frontGit: "https://github.com/kimminjung96/OneTrip",
    backGit: "https://github.com/Youngjung3/onetrip_server",
    proposal: "", //기획서
  },
  {
    id: 2,
    title: "OneTrip App",
    title2: "원트립",
    tech: "React,SCSS,JS,NODE EXPRESS",
    device: "pc,Mobile(반응형,PWA App)",
    period: "4일",
    img: "ming.gif",
    detailImg: "",
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
    title: "YORIJORI",
    title2: "원트립",
    tech: "React,SCSS,JS,NODE EXPRESS",
    device: "pc,Mobile(반응형,PWA App)",
    period: "3주",
    img: "ming.gif",
    detailImg: "",
    Deploy: "깃허브",
    page: "메인1",
    contribution: "30%",
    note: "",
    frontServer: "",
    backServer: "",
    frontGit: "",
    backGit: "",
    proposal: "",
  },
  {
    id: 4,
    title: "유성구 문화관광",
    title2: "원트립",
    tech: "React,SCSS,JS,NODE EXPRESS",
    device: "pc,Mobile(반응형,PWA App)",
    period: "3주",
    img: "ming.gif",
    detailImg: "",
    Deploy: "깃허브",
    page: "메인1",
    contribution: "30%",
    note: "",
    frontServer: "",
    backServer: "",
    frontGit: "",
    backGit: "",
    proposal: "",
  },
];

const Three = () => {
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const onSetIsVisible = (id) => {
    // console.log(id);
    setModalVisibleId(id);
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper id="PROJECT">
      <LayOut>
        <Title>npm publish</Title>
        <SectionTitle>Projects</SectionTitle>
        {/* <Slide className="width100"></Slide> */}
        <Wrapper dr={`row`} ju={`space-between`} margin={`30px 0 0`}>
          {contentItem.map((data) => {
            return (
              <Box key={data.id}>
                <Wrapper onClick={() => onSetIsVisible(data)}>
                  <Text className="contentText">{data.title2}</Text>
                  <Text className="contentSub">{data.title}</Text>
                  <Image src={`/images/my/${data.img}`} />
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

export default Three;
