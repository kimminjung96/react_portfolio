import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieAni from "./rocket.json";
import { Image } from "./style";
import logo from "./logo.svg";

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
      <div
        ref={blob1}
        style={{
          width: 60,
          position: "absolute",
          left: "-10px",
          top: "-90%",
          zIndex: 2,
        }}
      ></div>

      <h1>
        <Image
          src={logo}
          alt="로고"
          style={{
            position: "absolute",
            zIndex: 1,
            width: 20,
            left: "29px",
            bottom: "-70%",
          }}
        />
      </h1>
    </div>
  );
};

export default Lottie;
