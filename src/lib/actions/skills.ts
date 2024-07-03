"use server";

import prisma from "../prisma";
import { getPerson } from "./person";
import { revalidatePath } from "next/cache";
import { skillsArray } from "@/lib/skills";

async function removeSkill(id: string): Promise<{ message: string }> {
	try {
		await prisma.skill.delete({
			where: {
				id,
			}
		});

		revalidatePath("/")
		return { message: "Skill removed" };
	} catch (error) {
		return { message: "Error removing skill" };
	}
}

async function addSkill(key: string): Promise<{ message: string }> {
	const person = await getPerson();

	const validSkill = skillsArray.find(skill => skill.value === key);
	if (!validSkill) return { message: "Invalid skill" };

	try {
		await prisma.skill.create({
			data: {
				key,
				person: {
					connect: {
						id: person.id,
					}
				}
			}
		});

		revalidatePath("/")
		return { message: "Skill added" };
	} catch (error) {
		return { message: "Error adding skill" };
	}
}

export { removeSkill, addSkill };