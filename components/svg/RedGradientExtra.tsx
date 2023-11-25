import styled from "@emotion/styled";

const RedGradientExtra = () => {
  return (
    <AnimationWave>
      <svg
        width="668"
        height="835"
        viewBox="0 0 668 835"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6.10352e-05"
          y="834.5"
          width="83.45"
          height="668"
          transform="rotate(-90 6.10352e-05 834.5)"
          fill="#C20000"
        />
        <rect
          x="6.10352e-05"
          y="751.05"
          width="83.45"
          height="668"
          transform="rotate(-90 6.10352e-05 751.05)"
          fill="#CB2424"
        />
        <rect
          x="6.10352e-05"
          y="667.6"
          width="83.45"
          height="668"
          transform="rotate(-90 6.10352e-05 667.6)"
          fill="#D34545"
        />
        <rect
          x="0.000183105"
          y="584.15"
          width="83.45"
          height="668"
          transform="rotate(-90 0.000183105 584.15)"
          fill="#DB6666"
        />
        <rect
          x="0.000183105"
          y="500.7"
          width="83.45"
          height="668"
          transform="rotate(-90 0.000183105 500.7)"
          fill="#E38888"
        />
        <rect
          x="0.000183105"
          y="417.25"
          width="83.45"
          height="668"
          transform="rotate(-90 0.000183105 417.25)"
          fill="#EBACAC"
        />
        <rect
          x="0.000183105"
          y="333.8"
          width="83.45"
          height="668"
          transform="rotate(-90 0.000183105 333.8)"
          fill="#F4D1D1"
        />
        <rect
          x="0.000183105"
          y="250.35"
          width="83.45"
          height="668"
          transform="rotate(-90 0.000183105 250.35)"
          fill="#FAE8E8"
        />
        <rect
          x="0.000305176"
          y="166.9"
          width="83.45"
          height="668"
          transform="rotate(-90 0.000305176 166.9)"
          fill="#FDF7F7"
        />
        <rect
          x="0.000305176"
          y="83.45"
          width="83.45"
          height="668"
          transform="rotate(-90 0.000305176 83.45)"
          fill="#FEFBFB"
        />
      </svg>
    </AnimationWave>
  );
};

export default RedGradientExtra;

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
