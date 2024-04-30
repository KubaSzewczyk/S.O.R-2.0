import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";

export const RegistrationFormRefsHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  const watchedFields = watch(["email", "password"]);
  const [email, password] = watchedFields;

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <p>
        email: {email} password: {password}
      </p>
      <Input
        label="E-mail"
        {...register("email", { required: true })}
        type="email"
        error={errors.email}
      />
      <Input
        label="Password"
        {...register("password", { required: true })}
        type="password"
        error={errors.password}
      />
      <Input label="Language" {...register("language")} />
      <Button label="Send" type="submit" />
    </form>
  );
};
