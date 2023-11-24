const RedGradient = ({
  size = "medium",
  rotate = 0,
}: {
  size: "small" | "medium" | "large" | "extra";
  rotate?: number;
}) => {
  const sizeMap = {
    small: {
      width: 373,
      height: 232,
    },
    medium: {
      width: 306,
      height: 412,
    },
    large: {
      width: 375,
      height: 719,
    },
    extra: {
      width: 668,
      height: 835,
    },
  };

  return (
    <svg
      width={sizeMap[size].width}
      height={sizeMap[size].height}
      viewBox="0 0 668 835"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
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
  );
};

export default RedGradient;
