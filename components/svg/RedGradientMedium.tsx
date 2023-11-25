import styled from "@emotion/styled";

const RedGradientMedium = () => {
  return (
    <AnimationWave>
      <svg
        width="306"
        height="412"
        viewBox="0 0 306 412"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="306"
          width="41.2"
          height="306"
          transform="rotate(90 306 0)"
          fill="#C20000"
        />
        <rect
          x="306"
          y="41.2001"
          width="41.2"
          height="306"
          transform="rotate(90 306 41.2001)"
          fill="#CB2424"
        />
        <rect
          x="306"
          y="82.4001"
          width="41.2"
          height="306"
          transform="rotate(90 306 82.4001)"
          fill="#D34545"
        />
        <rect
          x="306"
          y="123.6"
          width="41.2"
          height="306"
          transform="rotate(90 306 123.6)"
          fill="#DB6666"
        />
        <rect
          x="306"
          y="164.8"
          width="41.2"
          height="306"
          transform="rotate(90 306 164.8)"
          fill="#E38888"
        />
        <rect
          x="306"
          y="206"
          width="41.2"
          height="306"
          transform="rotate(90 306 206)"
          fill="#EBACAC"
        />
        <rect
          x="306"
          y="247.2"
          width="41.2"
          height="306"
          transform="rotate(90 306 247.2)"
          fill="#F4D1D1"
        />
        <rect
          x="306"
          y="288.4"
          width="41.2"
          height="306"
          transform="rotate(90 306 288.4)"
          fill="#FAE8E8"
        />
        <rect
          x="306"
          y="329.6"
          width="41.2"
          height="306"
          transform="rotate(90 306 329.6)"
          fill="#FDF7F7"
        />
        <rect
          x="306"
          y="370.8"
          width="41.2"
          height="306"
          transform="rotate(90 306 370.8)"
          fill="#FEFBFB"
        />
      </svg>
    </AnimationWave>
  );
};

export default RedGradientMedium;

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
