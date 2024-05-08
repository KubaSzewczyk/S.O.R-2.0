import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";

import { Button, Input } from "../../../ui";
import {
  SecondStep,
  secondStepFormValidationSchema,
  InputsFormTypes,
} from "../types";

type StepTwo = Omit<InputsFormTypes, "name" | "lastName">;

type Props = {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  setData: Dispatch<SetStateAction<InputsFormTypes>>;
  data: DataType;
  inputs: StepTwo;
};

type DataType = {
  birthDate: string;
  hobby: string;
};

export const SecondStepForm = ({
  inputs,
  handleNextPage,
  handlePrevPage,
  data,
  setData,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecondStep>({
    resolver: zodResolver(secondStepFormValidationSchema),
    defaultValues: data,
  });

  const handleSecondStepForm: SubmitHandler<SecondStep> = (formData) => {
    setData((prevState) => ({
      ...prevState,
      birthDate: formData.birthDate,
      hobby: formData.hobby,
    }));
    handleNextPage();
  };

  return (
    <form onSubmit={handleSubmit(handleSecondStepForm)}>
      <div className="py-4">
        <Input
          label={inputs.birthDate}
          error={errors.birthDate}
          {...register("birthDate", { required: true })}
          type="date"
          mandatory
        />
      </div>
      <div>
        <Input
          label={inputs.hobby}
          error={errors.hobby}
          {...register("hobby", { required: true })}
          mandatory
        />
      </div>
      <div className="flex justify-between mt-2">
        <Button label="Prev Page" onClick={handlePrevPage} />
        <Button label="Next Page" />
      </div>
    </form>
  );
};
