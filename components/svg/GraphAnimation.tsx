import styled from "@emotion/styled";

const GraphAnimation = () => {
  return (
    <AnimationWave>
      <svg
        width="141"
        height="120"
        viewBox="0 0 141 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="141"
          y="120"
          width="15"
          height="90"
          transform="rotate(180 141 120)"
          fill="#C20000"
        />
        <rect
          x="126"
          y="120"
          width="14"
          height="90"
          transform="rotate(180 126 120)"
          fill="#CB2424"
        />
        <rect
          x="112.13"
          y="120"
          width="14.0793"
          height="120"
          transform="rotate(180 112.13 120)"
          fill="#D34545"
        />
        <rect
          x="98.0791"
          y="120"
          width="14.0793"
          height="120"
          transform="rotate(180 98.0791 120)"
          fill="#DB6666"
        />
        <rect
          x="84.1289"
          y="120"
          width="14.0793"
          height="90"
          transform="rotate(180 84.1289 120)"
          fill="#E38888"
        />
        <rect
          x="70.0791"
          y="120"
          width="14.0793"
          height="90"
          transform="rotate(180 70.0791 120)"
          fill="#EBACAC"
        />
        <rect
          x="56.1289"
          y="120"
          width="14.0793"
          height="60"
          transform="rotate(180 56.1289 120)"
          fill="#F4D1D1"
        />
        <rect
          x="42.0791"
          y="120"
          width="14.0793"
          height="60"
          transform="rotate(180 42.0791 120)"
          fill="#FAE8E8"
        />
        <rect
          x="28.1289"
          y="120"
          width="14.0793"
          height="30"
          transform="rotate(180 28.1289 120)"
          fill="#FDF7F7"
        />
        <rect
          x="14.0791"
          y="120"
          width="14.0793"
          height="30"
          transform="rotate(180 14.0791 120)"
          fill="#FEFBFB"
        />
      </svg>
    </AnimationWave>
  );
};

export default GraphAnimation;

const AnimationWave = styled.div`
  svg {
    rect:nth-of-type(1) {
      animation: wave 4s ease-in-out infinite;
    }
    rect:nth-of-type(2) {
      animation: wave 4s ease-in-out 0.2s infinite;
    }
    rect:nth-of-type(3) {
      animation: wave 4s ease-in-out 0.4s infinite;
    }
    rect:nth-of-type(4) {
      animation: wave 4s ease-in-out 0.6s infinite;
    }
    rect:nth-of-type(5) {
      animation: wave 4s ease-in-out 0.8s infinite;
    }
    rect:nth-of-type(6) {
      animation: wave 4s ease-in-out 1s infinite;
    }
    rect:nth-of-type(7) {
      animation: wave 4s ease-in-out 1.2s infinite;
    }
    rect:nth-of-type(8) {
      animation: wave 4s ease-in-out 1.4s infinite;
    }
    rect:nth-of-type(9) {
      animation: wave 4s ease-in-out 1.6s infinite;
    }
    rect:nth-of-type(10) {
      animation: wave 4s ease-in-out 1.8s infinite;
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
