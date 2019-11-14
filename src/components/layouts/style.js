import styled, { keyframes } from "styled-components";
import img from "../images/bg.jpg";
import { bounce } from "react-animations";

export const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

export const Percentage = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: right;
  &.title {
    text-align: left;
  }
`;

export const BackgroundImg = styled.div`
  background-image: url(${img});

  /* Full height */
  height: 100%;
  min-height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogoImg = styled.img`
  /* Full height */
  width: 100px;
`;
