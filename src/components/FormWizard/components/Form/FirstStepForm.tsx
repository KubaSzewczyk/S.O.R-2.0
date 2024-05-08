import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";

import { Button, Input } from "../../../../ui";
import {
  FirstStep,
  firstStepFormValidationSchema,
  InputsFormTypes,
  UserData,
} from "../../types";
// import { useLocalStorageHistoryLogic } from "./useLocalStorageHistoryLogic";

// import { LocalStorageHistory } from "./LocalStorageHistory";

type stepOne = Omit<InputsFormTypes, "birthDate" | "hobby">;
type Props = {
  handleNextPage: () => void;
  data: UserData;
  inputs: stepOne;
  setData: Dispatch<SetStateAction<UserData>>;
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
    // watch,
    formState: { errors },
  } = useForm<FirstStep>({
    resolver: zodResolver(firstStepFormValidationSchema),
    defaultValues: data,
  });
  // const watchedName = watch("name");

  // const { getItem, nameHistory, handleGetItem, handleNameBlur } =
  // useLocalStorageHistoryLogic(watchedName);

  const handleFirstStepForm: SubmitHandler<FirstStep> = (formData) => {
    handleNextPage();
    setData({
      ...data,
      name: formData.name,
      lastName: formData.lastName,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFirstStepForm)}>
        <div className="py-4">
          <Input
            className="border-ring-1-rounded-sm"
            label={inputs.name}
            {...register("name", { required: true })}
            error={errors.name}
            // onBlur={handleNameBlur}
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
      {/* {!getItem && (
        <>
          <hr className="my-5" />
          <Button
            onClick={handleGetItem}
            className="cursor-pointer"
            label="pobierz historię"
          />
        </>
      )}
      {getItem && <LocalStorageHistory item={nameHistory} />} */}
    </>
  );
};
