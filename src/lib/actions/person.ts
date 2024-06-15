"use server";
import { Person, Connection, Skill, Education, Experience } from "@prisma/client";
import prisma from "../prisma";

type PersonWithRelations = Person & {
	connections: Connection[];
	skills: Skill[];
	education: Education[];
	experience: Experience[];
};

async function getPerson(): Promise<PersonWithRelations> {
	// Define the relations to include
	const includeRelations = {
		connections: true,
		skills: true,
		education: true,
		experience: true,
	};

	// Attempt to find a person in the database
	let person = await prisma.person.findFirst({
		include: includeRelations
	});

	// If no person is found, create a new default one
	if (!person) {
		person = await prisma.person.create({
			data: {
				name: "John Doe",
				phone: "(123) 456-7890",
				email: "test@test.com",
				profilePic: "trunk.png",
			},
			include: includeRelations
		});

		await prisma.skill.createMany({
			data: [
				{ name: "javascript", personId: person.id },
				{ name: "typescript", personId: person.id },
				{ name: "git", personId: person.id },
				{ name: "vue", personId: person.id },
				{ name: "angular", personId: person.id },
				{ name: "cpp", personId: person.id },
			],
		});
	}

	return person;
}

export { getPerson };
