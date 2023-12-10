"use client";
import styled from "@emotion/styled";
import Image from "next/image";

const KriticCartoon = ({
  mode,
  imageUrl,
}: {
  mode: "modal" | "inline";
  imageUrl: string;
}) => {
  return (
    <Container mode={mode}>
      <Image width={240} height={240} src={imageUrl} alt="" />
    </Container>
  );
};

export default KriticCartoon;

const Container = styled.div<{ mode: "modal" | "inline" }>`
  position: ${(props) => (props.mode === "modal" ? "absolute" : "relative")};
  left: ${(props) => (props.mode === "modal" ? "50%" : "auto")};
  top: ${(props) => (props.mode === "modal" ? "50%" : "auto")};
  transform: ${(props) =>
    props.mode === "modal" ? "translate(-50%, -50%)" : "none"};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border: 0.5px solid #d7d7d7;
`;
