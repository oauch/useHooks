import styled from "@emotion/styled";
import Menu from "./Menu";
import Trigger from "./Trigger";

function DropDown() {
  return (
    <StyledWrapper>
      <Trigger />
      <Menu />
    </StyledWrapper>
  );
}

export default DropDown;

const StyledWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 10px;
`;
