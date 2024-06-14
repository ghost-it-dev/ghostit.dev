"use server"
import prisma from "./prisma";
import { Person, Education, Skill, Connection, Experience } from '@prisma/client';

async function getPerson(): Promise<Person | null> {
	const details = await prisma.person.findFirst();

	return details;
}

async function getEducation(): Promise<Education[] | null> {
	const education = await prisma.education.findMany();

	return education;
}

async function getSkills(): Promise<Skill[] | null> {
	const skills = await prisma.skill.findMany();

	return skills;
}

async function getConnections(): Promise<Connection[] | null> {
	const connections = await prisma.connection.findMany();

	return connections;
}

async function getExperience(): Promise<Experience[] | null> {
	const experience = await prisma.experience.findMany();

	return experience;
}

