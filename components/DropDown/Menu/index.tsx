import useToggle from "@/hooks/useToggle";
import styled, { keyframes } from "styled-components";

function Menu() {
  const { isOpen } = useToggle();
  return (
    <StyledWrapper $isOpen={isOpen}>
      <StyledItems onClick={() => console.log("첫번째 아이템")}>
        테스트 1
      </StyledItems>
      <StyledItems onClick={() => console.log("두번째 아이템")}>
        테스트 2
      </StyledItems>
      <StyledItems onClick={() => console.log("세번째 아이템")}>
        테스트 3
      </StyledItems>
    </StyledWrapper>
  );
}

export default Menu;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 페이드아웃 애니메이션을 정의합니다.
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledWrapper = styled.ul<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 50px;
  width: 200px;
  height: fit-content;
  border: 1px solid #000;
  border-radius: 10px;
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

const StyledItems = styled.li`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  cursor: pointer;
`;