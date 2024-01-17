import { useState } from "react";

function useToggle() {
  const [isShow, setIsShow] = useState(false);

  const toggleClick = () => {
    setIsShow((prev) => !prev);
  };

  return { isShow, setIsShow, toggleClick };
}

export default useToggle;
