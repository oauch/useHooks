import { CSSProperties, ReactNode } from "react";

interface DefaultProps {
  key?: number | string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

type JustifyContents =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "between"
  | "around";
type AlignItems = "start" | "end" | "center";
type Wrap = "wrap" | "nowrap" | "wrap-reverse";

interface FlexProps extends DefaultProps {
  isCol?: boolean;
  justify?: JustifyContents;
  align?: AlignItems;
  gap?: number;
  wrap?: Wrap;
  flex?: number;
}

export type { AlignItems, FlexProps, JustifyContents };
