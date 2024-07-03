import prisma from "../prisma";
import { getPerson } from "./person";
import { AddWork } from "./schemas/work";

async function removeWork(id: string): Promise<{ message: string }> {
	try {
		await prisma.work.delete({
			where: {
				id,
			}
		});

		return { message: "Work removed" };
	} catch (error) {
		return { message: "Error removing work" };
	}
}

async function addWork(work: AddWork): Promise<{ message: string }> {
	const person = await getPerson();

	try {
		await prisma.work.create({
			data: {
				title: work.title,
				company: work.company,
				start: work.start,
				end: work.end,
				description: work.description,
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

export { removeWork, addWork };