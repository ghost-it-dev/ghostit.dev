import { z } from "zod";

export const AddConnectionSchema = z.object({
	url: z.string(),
	logo: z.string().optional(),
});

export type AddConnection = z.infer<typeof AddConnectionSchema>