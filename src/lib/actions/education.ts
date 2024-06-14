import { Education } from "@prisma/client";
import prisma from "../prisma";
import { AddEducation } from "./schemas/education";
import { getPerson } from "./person";

async function getEducation(): Promise<Education[] | null> {
	return prisma.education.findMany();
}

async function removeEducation(id: string): Promise<{ message: string }> {
	try {
		await prisma.education.delete({
			where: {
				id,
			}
		});

		return { message: "Education removed" };
	} catch (error) {
		return { message: "Error removing education" };
	}
}

async function addEducation(education: AddEducation): Promise<{ message: string }> {
	const person = await getPerson();

	try {
		await prisma.education.create({
			data: {
				title: education.title,
				school: education.school,
				start: education.start,
				end: education.end,
				person: {
					connect: {
						id: person.id,
					}
				}
			}
		});

		return { message: "Education added" };
	} catch (error) {
		return { message: "Error adding education" };
	}
}

export { getEducation, removeEducation, addEducation };