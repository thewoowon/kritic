const GradientCircle = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 232 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="116" cy="116" r="116" fill="#C20000" />
      <ellipse cx="123" cy="123.5" rx="107" ry="106.5" fill="#CB2424" />
      <ellipse cx="128.5" cy="131" rx="98.5" ry="94" fill="#D34545" />
      <ellipse cx="131" cy="139.5" rx="84" ry="81.5" fill="#DB6666" />
      <ellipse cx="133.5" cy="149.5" rx="73.5" ry="71.5" fill="#E38888" />
      <ellipse cx="137.5" cy="156.5" rx="63.5" ry="61.5" fill="#EBACAC" />
      <ellipse cx="141" cy="165" rx="56" ry="53" fill="#F4D1D1" />
      <ellipse cx="143.5" cy="171" rx="47.5" ry="45" fill="#FAE8E8" />
      <ellipse cx="146" cy="176" rx="39" ry="37" fill="#FDF7F7" />
      <ellipse cx="148.5" cy="182" rx="32.5" ry="31" fill="#FEFBFB" />
    </svg>
  );
};

export default GradientCircle;
