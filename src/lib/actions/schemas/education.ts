import { z } from "zod";

export const AddEducationSchema = z.object({
	title: z.string(),
	school: z.string(),
	start: z.date(),
	end: z.date().optional(),
});

export type AddEducation = z.infer<typeof AddEducationSchema>