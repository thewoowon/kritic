import styled from "@emotion/styled";

const RedGradientSmall = () => {
  return (
    <AnimationWave>
      <svg
        width="373"
        height="232"
        viewBox="0 0 373 232"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="373"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 373 232)"
          fill="#C20000"
        />
        <rect
          x="335.7"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 335.7 232)"
          fill="#CB2424"
        />
        <rect
          x="298.4"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 298.4 232)"
          fill="#D34545"
        />
        <rect
          x="261.1"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 261.1 232)"
          fill="#DB6666"
        />
        <rect
          x="223.8"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 223.8 232)"
          fill="#E38888"
        />
        <rect
          x="186.5"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 186.5 232)"
          fill="#EBACAC"
        />
        <rect
          x="149.2"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 149.2 232)"
          fill="#F4D1D1"
        />
        <rect
          x="111.9"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 111.9 232)"
          fill="#FAE8E8"
        />
        <rect
          x="74.6003"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 74.6003 232)"
          fill="#FDF7F7"
        />
        <rect
          x="37.3"
          y="232"
          width="37.3"
          height="232"
          transform="rotate(-180 37.3 232)"
          fill="#FEFBFB"
        />
      </svg>
    </AnimationWave>
  );
};

export default RedGradientSmall;

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
