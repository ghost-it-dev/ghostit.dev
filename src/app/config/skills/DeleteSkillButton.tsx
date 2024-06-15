"use client";

import { removeSkill } from "@/lib/actions/skills";
import { TrashIcon } from "lucide-react";


const DeleteSkillButton = ({ skillId }: { skillId: string }) => {

	const handleDelete = async () => {
		await removeSkill(skillId);
	};

	return (
		<TrashIcon onClick={() => handleDelete()} className="w-4 h-4 cursor-pointer hover:text-red-500 duration-200" />
	);
};

export default DeleteSkillButton;