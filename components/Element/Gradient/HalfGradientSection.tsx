import styled from "@emotion/styled";

const HalfGradientSection = () => {
  return (
    <Box>
      <Gradient height="43.5px" bgColor="#FEFBFB" />
      <Gradient height="43.5px" bgColor="#FDF7F7" />
      <Gradient height="43.5px" bgColor="#FAE8E8" />
      <Gradient height="43.5px" bgColor="#F4D1D1" />
      <Gradient height="43.5px" bgColor="#EBACAC" />
      <Gradient height="43.5px" bgColor="#E38888" />
      <Gradient height="43.5px" bgColor="#DB6666" />
      <Gradient height="43.5px" bgColor="#D34545" />
      <Gradient height="43.5px" bgColor="#CB2424" />
      <Gradient height="43.5px" bgColor="#C20000" />
    </Box>
  );
};

export default HalfGradientSection;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Gradient = styled.div<{
  bgColor?: string;
  height?: string;
}>`
  width: 100%;
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.bgColor || "#fff"};
`;
