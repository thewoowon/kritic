import React from "react";
import styled from "@emotion/styled";

const RowGradient = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <AnimationWave>
      <svg
        width={width ?? 1140}
        height={height ?? 114}
        viewBox="0 0 1140 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="114" height="114" fill="#C20000" />
        <rect x="114" width="114" height="114" fill="#CB2424" />
        <rect x="228" width="114" height="114" fill="#D34545" />
        <rect x="342" width="114" height="114" fill="#DB6666" />
        <rect x="456" width="114" height="114" fill="#E38888" />
        <rect x="570" width="114" height="114" fill="#EBACAC" />
        <rect x="684" width="114" height="114" fill="#F4D1D1" />
        <rect x="798" width="114" height="114" fill="#FAE8E8" />
        <rect x="912" width="114" height="114" fill="#FDF7F7" />
        <rect x="1026" width="114" height="114" fill="#FEFBFB" />
      </svg>
    </AnimationWave>
  );
};

export default RowGradient;

const AnimationWave = styled.div`
  svg {
    rect:nth-of-type(1) {
      animation: wave 4s ease-in-out forwards;
    }
    rect:nth-of-type(2) {
      animation: wave 4s ease-in-out 0.2s forwards;
    }
    rect:nth-of-type(3) {
      animation: wave 4s ease-in-out 0.4s forwards;
    }
    rect:nth-of-type(4) {
      animation: wave 4s ease-in-out 0.6s forwards;
    }
    rect:nth-of-type(5) {
      animation: wave 4s ease-in-out 0.8s forwards;
    }
    rect:nth-of-type(6) {
      animation: wave 4s ease-in-out 1s forwards;
    }
    rect:nth-of-type(7) {
      animation: wave 4s ease-in-out 1.2s forwards;
    }
    rect:nth-of-type(8) {
      animation: wave 4s ease-in-out 1.4s forwards;
    }
    rect:nth-of-type(9) {
      animation: wave 4s ease-in-out 1.6s forwards;
    }
    rect:nth-of-type(10) {
      animation: wave 4s ease-in-out 1.8s forwards;
    }

    @keyframes wave {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
