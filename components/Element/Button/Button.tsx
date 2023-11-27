import styled from "@emotion/styled";

const KriticButton = ({
  label,
  leftIcon,
  rightIcon,
  height,
  padding,
}: {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  height?: string;
  padding?: string;
}) => {
  return (
    <Button height={height}>
      {leftIcon && leftIcon}
      {label && label}
      {rightIcon && rightIcon}
    </Button>
  );
};

export default KriticButton;

const Button = styled.button<{
  height?: string;
  padding?: string;
}>`
  padding: ${(props) => props.padding ?? "8px"};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.5px solid #D7D7D7;
  background-color: #fff;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  gap: 3px;
  &:hover {
    background-color: #f3f3f3;
  }
  &:active {
    background-color: #D7D7D7;
  }
  &:focus {
    outline: none;
  }
  flex-wrap: nowrap;
  height: ${(props) => props.height ?? "auto"};
`;
