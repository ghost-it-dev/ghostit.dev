import { z } from "zod";

export const AddSkillSchema = z.object({
	name: z.string().min(1),
});

export type AddSkill = z.infer<typeof AddSkillSchema>