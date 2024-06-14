import { Experience } from "@prisma/client";
import prisma from "../prisma";
import { getPerson } from "./person";

async function getExperience(): Promise<Experience[] | null> {
	return prisma.experience.findMany();
}

async function removeExperience(id: string): Promise<{ message: string }> {
	try {
		await prisma.experience.delete({
			where: {
				id,
			}
		});

		return { message: "Experience removed" };
	} catch (error) {
		return { message: "Error removing experience" };
	}
}

async function addExperience(experience: Experience): Promise<{ message: string }> {
	const person = await getPerson();

	try {
		await prisma.experience.create({
			data: {
				title: experience.title,
				company: experience.company,
				start: experience.start,
				end: experience.end,
				description: experience.description,
				person: {
					connect: {
						id: person.id,
					}
				}
			}
		});

		return { message: "Experience added" };
	} catch (error) {
		return { message: "Error adding experience" };
	}
}

export { getExperience, removeExperience, addExperience };