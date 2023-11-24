import styled from "@emotion/styled";

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <Container>{children}</Container>;
};

export default Title;

const Container = styled.div`
  font-family: Josefin Sans;
  font-size: 108px;
  font-weight: 700;
`;
