"use server";
import { Person, Connection, Skill, Education, Work } from "@prisma/client";
import prisma from "../prisma";

type PersonWithRelations = Person & {
	connections: Connection[];
	skills: Skill[];
	education: Education[];
	work: Work[];
};

async function getPerson(): Promise<PersonWithRelations> {
	// Define the relations to include
	const includeRelations = {
		connections: true,
		skills: true,
		education: true,
		work: true,
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
				{ key: "javascript", personId: person.id },
				{ key: "typescript", personId: person.id },
				{ key: "git", personId: person.id },
				{ key: "vue", personId: person.id },
				{ key: "angular", personId: person.id },
				{ key: "cpp", personId: person.id },
			],
		});
	}

	return person;
}

export { getPerson };
