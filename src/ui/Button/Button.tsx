import { type ComponentProps } from "react";

import { cn } from "../../utills/cn";

type Props = {
  label: string;
} & ComponentProps<"button">;

export const Button = ({ label, className, ...rest }: Props) => {
  return (
    <button
      className={cn(
        "px-4 py-1 text-sm text-white cursor: cursor-pointer bg-blue-600 rounded-md border-blue-200 hover:bg-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {label}
    </button>
  );
};
