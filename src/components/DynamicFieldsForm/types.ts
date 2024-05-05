import { z } from "zod";

export const formValidationSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  lastName: z.string().min(3, { message: "Last Name is required" }),
  hobbies: z.array(
    z.object({
      hobby: z.string().min(1, { message: "at least one hobby" }),
    })
  ),
});

export type formValidationTypes = z.infer<typeof formValidationSchema>;
