import { z } from "zod";

export const firstStepFormValidationSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  lastName: z.string().min(3, { message: "Last Name is required" }),
});

export const secondStepFormValidationSchema = z.object({
  birthDate: z.string().date(),
  hobby: z.string().min(3, { message: "hobby is required" }),
});

export type InputsFormTypes = {
  name: string;
  lastName: string;
  birthDate: string;
  hobby: string;
};

export type FormDataTypes = {
  name?: string;
  lastName?: string;
  birthDate?: string;
  hobby?: string;
};

export type FirstStep = z.infer<typeof firstStepFormValidationSchema>;
export type SecondStep = z.infer<typeof secondStepFormValidationSchema>;
