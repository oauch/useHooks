import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  color?: string;
  bgColor?: string;
  br?: number;
  action?: () => void;
  children?: ReactNode;
}

export type { ButtonProps };
