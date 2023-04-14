// BodyBlackoutStyle

import styled from "styled-components";
import { Wrapper } from "./style";

const BlackWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.65);
`;
const BodyBlackoutStyle = ({ onSetIsVisible }) => {
  return <BlackWrapper className="body-blackout-style" onClick={() => onSetIsVisible(false)}></BlackWrapper>;
};

export default BodyBlackoutStyle;
