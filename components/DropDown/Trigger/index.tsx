import useToggle from "@/hooks/useToggle";
import styled from "styled-components";

function Trigger() {
  const { isOpen, setIsOpen } = useToggle();

  const handleTrigger = () => {
    setIsOpen(isOpen);
  };

  return <StyledTrigger $isOpen={isOpen} onClick={handleTrigger} />;
}

export default Trigger;

const StyledTrigger = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 15px;
  right: 7px;
  width: 18px;
  height: 18px;
  background-image: url("icons/TriggerUp.svg");
  background-repeat: no-repeat;
  background-position: center;

  transform: ${({ $isOpen }) => ($isOpen ? `rotateX(180deg)` : `rotateX(0)`)};
  transition: transform 0.25s ease-in-out;
`;
