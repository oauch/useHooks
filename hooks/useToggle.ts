import { create } from "zustand";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useToggle = create<Props>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: !value }),
}));

export default useToggle;
