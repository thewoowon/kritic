import styled from "@emotion/styled";

const RedGradientLarge = () => {
  return (
    <AnimationWave>
      <svg
        width="719"
        height="375"
        viewBox="0 0 719 375"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="71.9" height="375" fill="#C20000" />
        <rect x="71.9001" width="71.9" height="375" fill="#CB2424" />
        <rect x="143.8" width="71.9" height="375" fill="#D34545" />
        <rect x="215.7" width="71.9" height="375" fill="#DB6666" />
        <rect x="287.6" width="71.9" height="375" fill="#E38888" />
        <rect x="359.5" width="71.9" height="375" fill="#EBACAC" />
        <rect x="431.4" width="71.9" height="375" fill="#F4D1D1" />
        <rect x="503.3" width="71.9" height="375" fill="#FAE8E8" />
        <rect x="575.2" width="71.9" height="375" fill="#FDF7F7" />
        <rect x="647.1" width="71.9" height="375" fill="#FEFBFB" />
      </svg>
    </AnimationWave>
  );
};

export default RedGradientLarge;

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
