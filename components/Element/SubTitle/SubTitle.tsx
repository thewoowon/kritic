import styled from "@emotion/styled";

type SubTitleProps = {
  children: React.ReactNode;
};

const SubTitle = ({ children }: SubTitleProps) => {
  return <Container>{children}</Container>;
};

export default SubTitle;

const Container = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard Variable", sans-serif;
`;
