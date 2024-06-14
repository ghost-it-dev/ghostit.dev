"use server";
import { Person, Connection, Skill, Education, Experience } from "@prisma/client";
import prisma from "./prisma";

type PersonWithRelations = Person & {
	connections: Connection[];
	skills: Skill[];
	education: Education[];
	experience: Experience[];
};

async function getPerson(): Promise<PersonWithRelations | null> {
	const person = await prisma.person.findFirst({
		include: {
			connections: true,
			skills: true,
			education: true,
			experience: true,
		}
	});

	return person;
}

async function savePerson(formData: FormData) {

}

export { getPerson, savePerson };
