"use server";

import { Skill } from "@prisma/client";
import prisma from "../prisma";
import type { AddSkill } from "./schemas/skills";
import { getPerson } from "./person";
import { revalidatePath } from "next/cache";

async function getSkills(): Promise<Skill[] | null> {
	return prisma.skill.findMany();
}

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

async function addSkill(skill: AddSkill): Promise<{ message: string }> {
	const person = await getPerson();

	try {
		await prisma.skill.create({
			data: {
				name: skill.name,
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

export { getSkills, removeSkill, addSkill };