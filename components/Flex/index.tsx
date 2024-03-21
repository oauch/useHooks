import { FlexProps } from "@/types/flex";
import { AlignCovert, JustifyConvert } from "@/utils/convert";
import styled from "@emotion/styled";

function Flex({ ...props }: FlexProps) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}

export default Flex;

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ isCol }) => (isCol ? "column" : "row")};
  justify-content: ${({ justify }) => JustifyConvert(justify)};
  align-items: ${({ align }) => AlignCovert(align)};
  gap: ${({ gap }) => gap && `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
  flex: ${({ flex }) => flex};
`;
