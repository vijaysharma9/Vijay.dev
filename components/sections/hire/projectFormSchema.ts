import { z } from 'zod';

export const projectFormSchema = z
  .object({
    firstName: z.string().min(1, 'Please enter your first name.').max(40),
    lastName: z.string().min(1, 'Please enter your last name.').max(40),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().optional(),
    company: z.string().optional(),
    role: z.string().optional(),
    timeline: z.string().min(1, 'Select when you need this delivered.'),
    projectStage: z.string().optional(),
    source: z.string().optional(),
    projectTitle: z.string().optional(),
    description: z
      .string()
      .min(10, 'Please describe your project (at least 10 characters).')
      .max(1800, 'Description is too long — try shortening it.'),
    tech: z.string().optional(),
    refs: z.string().optional(),
    website: z.string().optional()
  })
  .refine(
    (data) => {
      const honeypot = (data.website ?? '').trim();
      return honeypot.length === 0;
    },
    { message: 'Bot detected.', path: ['website'] }
  );

export type ProjectFormInput = z.infer<typeof projectFormSchema>;
