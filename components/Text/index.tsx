import { TextProps } from "@/types/text";
import styled from "@emotion/styled";

function Text({ children, ...props }: TextProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Text;

const Wrapper = styled.p<TextProps>`
  font-size: ${({ fs = 12 }) => fs && `${fs}px`};
  font-weight: ${({ fw = 400 }) => fw};
  font-family: ${({ font }) => font};
  text-align: ${({ align }) => align};
  line-height: ${({ lineH }) => lineH && `${lineH}px`};
  letter-spacing: ${({ letterS }) => letterS && `${letterS}px`};
  color: ${({ color }) => color};
`;
