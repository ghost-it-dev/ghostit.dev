"use server"
import prisma from "../prisma";
import { AddConnection } from "@/lib/actions/schemas/connections";
import { getPerson } from "./person";

async function removeConnection(id: string): Promise<{ message: string }> {
	try {
		await prisma.connection.delete({
			where: {
				id,
			}
		});

		return { message: "Connection removed" };
	} catch (error) {
		return { message: "Error removing connection" };
	}
}

async function addConnection(connection: AddConnection): Promise<{ message: string }> {
	const person = await getPerson();

	try {
		await prisma.connection.create({
			data: {
				url: connection.url,
				name: connection.name,
				handle: connection.handle,
				person: {
					connect: {
						id: person.id,
					}
				}
			}
		});

		return { message: "Connection added" };
	} catch (error) {
		return { message: "Error adding connection" };
	}
}

export { removeConnection, addConnection };