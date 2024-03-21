import { ButtonProps } from "@/types/button";
import styled from "@emotion/styled";

function Button({ action, children, ...props }: ButtonProps) {
  return (
    <Wrapper onClick={action} disabled={props.disabled} {...props}>
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button<ButtonProps>`
  width: ${(props) => {
    switch (props.size) {
      case "sm":
        return 100;
      case "md":
        return 150;
      case "lg":
        return 200;
    }
  }}px;
  height: ${(props) => {
    switch (props.size) {
      case "sm":
        return 30;
      case "md":
        return 35;
      case "lg":
        return 40;
    }
  }}px;
  color: ${({ color }) => color};
  background: ${({ bgColor }) => bgColor};
  border-radius: ${({ bdr }) => bdr && `${bdr}px`};

  font-size: ${({ font_size }) => font_size}px;
`;
