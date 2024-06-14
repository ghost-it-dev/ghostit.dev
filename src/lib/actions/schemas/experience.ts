import { z } from "zod";

export const AddExperienceSchema = z.object({
	title: z.string(),
	company: z.string(),
	description: z.string().optional(),
	start: z.date(),
	end: z.date().optional(),
});

export type AddExperience = z.infer<typeof AddExperienceSchema>