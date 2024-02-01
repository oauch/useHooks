import { useState } from "react";
import { styled } from "styled-components";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <StyledLabel>
      <StyledCheckBox
        type="checkbox"
        checked={isOn}
        onChange={() => setIsOn((prev) => !prev)}
      />
      <StyledToggleSlider />
    </StyledLabel>
  );
}

export default Toggle;

const StyledLabel = styled.label`
  display: block;
  position: relative;
  width: 50px;
  height: 24px;
`;

const StyledToggleSlider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 40px;

  &:before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: 4px;
    bottom: 4.5px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const StyledCheckBox = styled.input`
  opacity: 0;

  &:checked + ${StyledToggleSlider}:before {
    transform: translateX(26px);
  }

  &:checked + ${StyledToggleSlider} {
    background-color: #1f9100;
  }
`;
