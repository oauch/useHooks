import { DefaultProps } from "@/types/default";

type FONT_WEIGHT =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "bold"
  | "bolder"
  | "lighter"
  | "normal";

interface TextProps extends DefaultProps {
  fs?: number;
  fw?: FONT_WEIGHT;
  font?: string;
  color?: string;
  align?: string;
  lineH?: number;
  letterS?: number;
}

export type { TextProps };
