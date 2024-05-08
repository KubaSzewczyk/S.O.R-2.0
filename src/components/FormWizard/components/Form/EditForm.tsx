import { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { Button, Input } from "../../../../ui";
import { UserData } from "../../types";

type stepOne = Omit<UserData, "birthDate" | "hobby" | "id">;

type Props = {
  data: UserData;
  setFormData: Dispatch<SetStateAction<UserData>>;
  handleSaveUser: (user: UserData) => void;
  setPage: Dispatch<SetStateAction<number>>;
  inputs: stepOne;
};

const defaultValues: UserData = {
  name: "",
  lastName: "",
  birthDate: "",
  hobby: "",
  id: "",
};

export const EditForm = ({
  data,
  setFormData,
  handleSaveUser,
  setPage,
  inputs,
}: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: data,
  });

  const handleSave = (formData: UserData) => {
    setFormData({
      ...data,
      name: formData.name,
      lastName: formData.lastName,
    });
    handleSaveUser(formData);
    Object.keys(data).forEach(() => setFormData(defaultValues));
    setPage(1);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div className="py-4">
        <Input
          className="border-ring-1-rounded-sm"
          label={inputs.name}
          {...register("name", { required: true })}
          mandatory
        />
      </div>
      <div>
        <Input
          label={inputs.lastName}
          {...register("lastName", { required: true })}
          mandatory
        />
      </div>
      <div className="mt-2 flex justify-end">
        <Button label="Save" />
      </div>
    </form>
  );
};
