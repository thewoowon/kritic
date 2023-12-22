"use client";
import styled from "@emotion/styled";

const PlaygroundPage = () => {
  return (
    <main className="flex flex-col items-center w-full mx-auto overflow-hidden">
      <Section>
        <Logo>Kritic</Logo>
        <Screen>
          <Pillar />
          <Pillar />
          <Pillar />
          <Pillar />
          <Pillar />
          <Pillar />
          <Pillar />
          <Pillar />
          <Pillar />
          <Pillar />
        </Screen>
      </Section>
    </main>
  );
};

export default PlaygroundPage;

const Section = styled.section<{
  bgColor?: string;
  height?: string;
}>`
  width: 100%;
  min-height: ${(props) => props.height || "100vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  position: relative;
`;
const Screen = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #c20000;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 8px;
`;

const Pillar = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background-color: white;
  margin: 0 24px;
  animation: pulse 4s forwards;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    20% {
      transform: scale(1.2);
      opacity: 1;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
    60% {
      transform: scale(1.4);
      opacity: 1;
    }
    80% {
      transform: scale(1.3);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  font-family: "Montserrat", sans-serif;
`;
