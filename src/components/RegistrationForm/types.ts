import { z } from 'zod'

export const validationSchema = z.object({
    email: z.string().email({message: 'E-mail is required' }),
    password: z.string().min(3, 'Password is required'),
    language: z.string().min(1, '')
})

export type RegistrationFormData = z.infer<typeof validationSchema>