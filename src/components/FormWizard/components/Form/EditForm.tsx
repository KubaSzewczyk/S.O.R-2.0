import { useForm } from "react-hook-form";

import { Button, Input } from "../../../../ui";
import { useFormWizardLogic } from "../useFormWizardLogic";
import { useAppSelector } from "../../../../hooks/redux";

import type { UserData } from "../../types";

const defaultValues: UserData = {
  name: "",
  lastName: "",
  birthDate: "",
  hobby: "",
  id: "",
};

export const EditForm = () => {
  const { data, navigate, setFormData, handleSaveUser, FIRST_STEP_INPUTS } =
    useFormWizardLogic();
  const user = useAppSelector((state) => state.userToEdit.editedUser);
  const { register, handleSubmit } = useForm({
    defaultValues: user[0],
  });

  const handleSave = (formData: UserData) => {
    setFormData({
      ...data,
      name: formData.name,
      lastName: formData.lastName,
    });
    handleSaveUser(formData);
    Object.keys(data).forEach(() => setFormData(defaultValues));
    navigate("/form-wizard");
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div className="py-4">
        <Input
          className="border-ring-1-rounded-sm"
          label={FIRST_STEP_INPUTS.name}
          {...register("name", { required: true })}
          mandatory
        />
      </div>
      <div>
        <Input
          label={FIRST_STEP_INPUTS.lastName}
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
