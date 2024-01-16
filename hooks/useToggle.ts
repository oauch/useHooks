import { useState } from "react";

function useToggle() {
  const [isShow, setIsShow] = useState(false);

  const toggleClick = () => {
    setIsShow((prev) => !prev);
  };

  return { isShow, toggleClick };
}

export default useToggle;
