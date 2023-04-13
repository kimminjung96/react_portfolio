import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieAni from "./logo3.json";
import logo from "./logo.svg";
import { Image } from "./style";

const Lottie = () => {
  const blob1 = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: blob1.current,
      animationData: lottieAni,
      loop: true,
      aytoplay: true,
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div ref={blob1} style={{ width: 80, position: "absolute", left: "-10px", top: "-50px" }}></div>
      {/* <h1>
        <Image src={logo} alt="로고" style={{ position: "absolute", zIndex: 10, width: 50 }} />
      </h1> */}
    </div>
  );
};

export default Lottie;
