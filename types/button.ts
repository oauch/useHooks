import { ReactNode } from "react";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  bgColor?: string;
  bdr?: number;
  font_size?: number;
  action?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

export type { ButtonProps };
