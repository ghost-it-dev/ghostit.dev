import { z } from "zod";

export const AddSkillSchema = z.object({
	text: z.string(),
	logo: z.string().optional(),
});

export type AddSkill = z.infer<typeof AddSkillSchema>