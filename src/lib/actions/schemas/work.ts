import { z } from "zod";

export const AddWorkSchema = z.object({
	title: z.string(),
	company: z.string(),
	description: z.string().optional(),
	start: z.date(),
	end: z.date().optional(),
});

export type AddWork = z.infer<typeof AddWorkSchema>