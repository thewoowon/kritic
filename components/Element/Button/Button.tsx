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
  border: 1px solid #e5e5e5;
  background-color: #fff;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  gap: 3px;
  &:hover {
    background-color: #f3f3f3;
  }
  &:active {
    background-color: #e5e5e5;
  }
  &:focus {
    outline: none;
  }
  flex-wrap: nowrap;
  height: ${(props) => props.height ?? "auto"};
`;
