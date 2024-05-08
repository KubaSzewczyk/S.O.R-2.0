import { type ComponentProps } from "react";

import { cn } from "../../utills/cn";

type Props = {
  children: string | string[];
  themeInfo?: string;
} & ComponentProps<"p">;

export const Text = ({ children, className, themeInfo }: Props) => {
  let textColorClass = "";

  switch (themeInfo) {
    case "mexico":
      textColorClass = "text-mex-red";
      break;
    case "france":
      textColorClass = "text-fra-blue";
      break;
    case "germany":
      textColorClass = "text-ger-yellow";
      break;
    default:
      textColorClass = "";
  }

  return <p className={cn(textColorClass, className)}>{children}</p>;
};
