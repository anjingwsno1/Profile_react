import styled, { keyframes } from "styled-components";
import img from "../images/bg.jpg";
import { bounce, pulse } from "react-animations";

export const TitleFont = styled.h1`
  text-align: center;
  font-size: 23px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

export const Pulse = styled.div`
  animation: 2s ${keyframes`${pulse}`} infinite;
`;

export const Percentage = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: right;
  &.title {
    text-align: left;
  }
`;

// export const BackgroundImg = styled.div`
//   background-image: url(${img});

//   /* Full height */
//   height: 100%;
//   min-height: 100%;
//   /* Center and scale the image nicely */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
export const BackgroundImg = styled.div`
  background-image: url(${img});
  position: absolute;
  display: block;
  width: 100%;
  width: calc(100% + 1px);
  height: 100%;
  height: calc(100% + 1px);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: visible;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 1;
`;

export const LogoImg = styled.img`
  /* Full height */
  width: 100px;
`;
