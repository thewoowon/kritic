import styled from "@emotion/styled";
import Main from "./Main";
import Side from "./Side";

const MMBB = () => {
  return (
    <Container>
      <Main />
      <Side />
    </Container>
  );
};

export default MMBB;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  gap: 17px;
`;
