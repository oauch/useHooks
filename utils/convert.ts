import { AlignItems, JustifyContents } from "@/types/flex";

function JustifyConvert(val?: JustifyContents) {
  switch (val) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
  }
}

function AlignCovert(val?: AlignItems) {
  switch (val) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
  }
}

export { AlignCovert, JustifyConvert };
