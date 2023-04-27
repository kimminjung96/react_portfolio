import { Btn, Image, LayOut, Text, Title, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";
import styled from "styled-components";
import Theme from "../common/Theme";
// import "./css1.css";

/* 
react-awesome-reveal

*/

const MainWrapper = styled(Wrapper)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 10%;
    z-index: -10;
    display: block;
    width: 30%;
    height: 100%;
    background: url("/images/bg/main1.png") no-repeat;
    background-size: contain;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0%;
    z-index: -10;
    display: block;
    width: 50%;
    height: 100%;
    background: url("/images/bg/main2.png") 0% 100% / contain no-repeat;
  }
`;
const Slogan = styled.h2`
  width: auto;
  font-family: "Pretendard";
  font-size: 80px;
  line-height: 1.5;
  letter-spacing: -1.5px;
  font-weight: 500;
  margin: 0;
  color: #27272e;
  text: #27272e;
  text-align: left;
  > span {
    margin-right: 20px;
  }
  > span.font96 {
    font-size: 96px;
  }
  @media (max-width: 800px) {
    font-size: 40px;
  }
`;
const SubSlogan = styled(Slogan)`
  font-family: "PretendardLight";
  font-size: 58px;
  line-height: 1.4;
  margin-bottom: 60px;
  & > span {
    font-size: 50px;
    letter-spacing: -5px;
  }

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const action01 = () => {
  document.addEventListener("mousemove", function (event) {
    let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
    let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
    let text_shadow_x = getTransformValue(event.clientX, window.innerWidth, 28);
    let text_shadow_y = getTransformValue(
      event.clientY,
      window.innerHeight,
      28
    );
    document.querySelectorAll(".floating").forEach(function (floating) {
      floating.style.transform =
        "rotateX(" + card_y / 1 + "deg) rotateY(" + card_x + "deg)";
      floating.style.boxShadow =
        -card_x + "px " + card_y / 1 + "px 55px rgba(0, 0, 0, .55)";
    });
    document.querySelectorAll(".svg").forEach(function (svg) {
      svg.style.filter =
        "drop-shadow(" +
        -text_shadow_x +
        "px " +
        text_shadow_y / 1 +
        "px 4px rgba(0, 0, 0, .6))";
    });
    document.querySelectorAll(".text").forEach(function (text) {
      text.style.textShadow =
        -text_shadow_x + "px " + text_shadow_y / 1 + "px 6px rgba(0, 0, 0, .8)";
    });
  });

  function getTransformValue(v1, v2, value) {
    return (((v1 / v2) * value - value / 2) * 1).toFixed(1);
  }

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.remove("active");
    }, 2200);
  });
};

const Home = () => {
  const width = useWidth();
  return (
    <>
      <div class="active" onClick={action01}>
        <div class="floating">
          <img src="/images/my/1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;

