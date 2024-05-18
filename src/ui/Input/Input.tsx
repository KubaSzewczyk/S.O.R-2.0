import { type ComponentPropsWithRef, type Ref, useId, forwardRef } from "react";
import { type FieldError } from "react-hook-form";

import { cn } from "../../utills/cn";

type Props = {
  label: string;
  error?: FieldError;
  mandatory?: boolean;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  (
    { label, error, mandatory = false, ...rest }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();

    return (
      <>
        <div className="flex flex-col text-start">
          <div className="flex items-center">
            {mandatory && <span className="text-red-500">*</span>}
            <label className="mr-2 mb-1 text-xs" htmlFor={id}>
              {label}
            </label>
          </div>
          <input
            ref={ref}
            id={id}
            {...rest}
            className={`${cn({
              "text-red-300 border-2 border-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-500  ring-1-rounded-sm":
                error,
            })} border-2 border-black-300 rounded-md px-1`}
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm text-start">{error?.message}</p>
        )}
      </>
    );
  }
);
