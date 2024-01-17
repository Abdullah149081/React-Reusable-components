import { z } from 'zod';

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: 'This field is Required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

export type TFormValues = z.infer<typeof SignUpSchema>;
