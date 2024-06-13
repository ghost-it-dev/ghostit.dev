"use server"
import prisma from "../prisma";

async function getDetails() {
	const details = await prisma.person.findFirst();

	return details;
}

export default getDetails;