import { z } from "zod";

export const PersonSchema = z.object({
	name: z.string(),
	title: z.string().optional(),
	email: z.string().email().optional(),
	phone: z.string().optional(),
});

export type Person = z.infer<typeof PersonSchema>