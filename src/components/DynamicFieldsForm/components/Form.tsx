import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form";

import { Button, Input } from "../../../ui";
import { formValidationTypes, formValidationSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formValidationTypes>({
    resolver: zodResolver(formValidationSchema),
  });
  const { fields, append, remove } = useFieldArray({
    name: "hobbies",
    control,
  });

  const handleFormSubmit: SubmitHandler<formValidationTypes> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="py-2">
        <Input
          label="Imię"
          mandatory
          placeholder="Imię"
          error={errors.name}
          {...register("name")}
        />
      </div>
      <div className="py-2">
        <Input
          label="Nazwisko"
          mandatory
          placeholder="Nazwisko"
          error={errors.lastName}
          {...register("lastName")}
        />
      </div>
      <div>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <Input
                label="Hobby"
                {...register(`hobbies.${index}.hobby` as const)}
              />
              {index > 0 && (
                <Button label="usuń" onClick={() => remove(index)} />
              )}
            </div>
          );
        })}
        <Button
          onClick={(e) => {
            e.preventDefault();
            append({ hobby: "" });
          }}
          label="Dodaj hobby"
        />
      </div>
      <div className="flex justify-end">
        <Button label="wyślij" />
      </div>
    </form>
  );
};
