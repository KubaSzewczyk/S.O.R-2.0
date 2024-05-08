import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";

import { Button, Input } from "../../../ui";
import {
  FirstStep,
  firstStepFormValidationSchema,
  InputsFormTypes,
} from "../types";

type stepOne = Omit<InputsFormTypes, "birthDate" | "hobby">;
type Props = {
  handleNextPage: () => void;
  data: InputsFormTypes;
  inputs: stepOne;
  setData: Dispatch<SetStateAction<InputsFormTypes>>;
};

export const FirstStepForm = ({
  inputs,
  handleNextPage,
  data,
  setData,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstStep>({
    resolver: zodResolver(firstStepFormValidationSchema),
    defaultValues: data,
  });

  const handleFirstStepForm: SubmitHandler<FirstStep> = (formData) => {
    handleNextPage();
    setData({
      ...data,
      name: formData.name,
      lastName: formData.lastName,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFirstStepForm)}>
      <div className="py-4">
        <Input
          className="border-ring-1-rounded-sm"
          label={inputs.name}
          {...register("name", { required: true })}
          error={errors.name}
          mandatory
        />
      </div>
      <div>
        <Input
          label={inputs.lastName}
          {...register("lastName", { required: true })}
          error={errors.lastName}
          mandatory
        />
      </div>
      <div className="mt-2 flex justify-end">
        <Button label="Next step" />
      </div>
    </form>
  );
};
