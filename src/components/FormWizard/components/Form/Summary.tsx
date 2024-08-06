import { useForm, type SubmitHandler } from "react-hook-form";
import { type Dispatch, type SetStateAction } from "react";

import { Text, Button } from "../../../../ui";

import type { InputsFormTypes, UserData } from "../../types";

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
  handleAddUser: (formData: UserData) => void;
  handlePrevPage: () => void;
  setFormData: Dispatch<SetStateAction<UserData>>;
  data: UserData;
};

const defaultValues: UserData = {
  name: "",
  lastName: "",
  birthDate: "",
  hobby: "",
  id: "",
};

export const Summary = ({
  handlePrevPage,
  handleAddUser,
  setPage,
  setFormData,
  data,
}: Props) => {
  const { name, lastName, birthDate, hobby } = data;

  const { handleSubmit } = useForm<InputsFormTypes>();

  const handleFormData: SubmitHandler<InputsFormTypes> = () => {
    handleAddUser(data);
    Object.keys(data).forEach(() => setFormData(defaultValues));
    setPage(1);
  };

  return (
    <form onSubmit={handleSubmit(handleFormData)}>
      <>
        <div className="flex flex-col text-start">
          <Text>{`Imię: ${name}`}</Text>
          <Text>{`Nazwisko: ${lastName}`}</Text>
          <Text>{`Data urodzenia: ${birthDate}`}</Text>
          <Text>{`Hobby: ${hobby}`}</Text>
        </div>
        <div className="mt-2 flex justify-between">
          <Button label="Prev Page" onClick={handlePrevPage} />
          <Button type="submit" label="Send" />
        </div>
      </>
    </form>
  );
};
