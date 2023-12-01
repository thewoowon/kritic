import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import styled from "@emotion/styled";

const MessageBox = ({ children }: { children: React.ReactNode }) => {
  const scrollFadeIn = useScrollFadeIn(0.3, "20%");
  return <Container {...scrollFadeIn}>{children}</Container>;
};

export default MessageBox;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  max-width: 274px;
  width: 100%;
  right: calc(100% + 20px);
  top: 0;
  background: #ffffff;
  color: white;
  border: 0.5px solid #d7d7d7;
  background-color: #3a434d;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 12px 12px;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-weight: 400;
  z-index: 100;

  &:after {
    border: 20px solid transparent;
    border-left-color: #3a434d;
    border-right: 0;
    border-top: 0;
    content: "";
    position: absolute;
    left: 100%;
    top: 5px;
  }
`;
