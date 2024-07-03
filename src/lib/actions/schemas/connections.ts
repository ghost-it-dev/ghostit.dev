import { z } from "zod";

export const AddConnectionSchema = z.object({
	name: z.string().min(1),
	url: z.string().url().min(1),
	handle: z.string().min(1),
});

export type AddConnection = z.infer<typeof AddConnectionSchema>