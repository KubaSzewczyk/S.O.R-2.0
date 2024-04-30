import { useForm, type SubmitHandler } from "react-hook-form";

import { Text, Button } from "../../../ui";

type Props = {
  handlePrevPage: () => void;
  data: FormDataTypes;
};

type FormDataTypes = {
  name: string;
  lastName: string;
  birthDate: string;
  hobby: string;
};

export const Summary = ({ handlePrevPage, data }: Props) => {
  const { name, lastName, birthDate, hobby } = data;

  const { handleSubmit } = useForm<FormDataTypes>();

  const handleFormData: SubmitHandler<FormDataTypes> = () => {
    console.log({ name, lastName, birthDate, hobby });
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
