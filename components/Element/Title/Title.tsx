import styled from "@emotion/styled";

type TitleProps = {
  children: React.ReactNode;
  fontFamily?: string;
};

const Title = ({ children, fontFamily }: TitleProps) => {
  return <Container fontFamily={fontFamily}>{children}</Container>;
};

export default Title;

const Container = styled.div<{
  fontFamily?: string;
}>`
  font-family: ${(props) =>
    props.fontFamily + ", sans-serif;" || "Noto Sans KR, sans-serif;"};
  font-size: 108px;
`;
