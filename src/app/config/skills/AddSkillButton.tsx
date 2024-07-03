"use client"
import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { skillsArray } from "@/lib/skills";
import React from "react";

export default function AddSkillButton() {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Search for a skill..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{skillsArray.map((skill) => (
						<CommandItem key={skill.value} onClick={() => console.log('asd')}>
							<skill.icon className="h-6 w-6 mr-2" />
							{skill.label}
						</CommandItem>
					))}
				</CommandList>
			</CommandDialog>
			<Button onClick={() => setOpen(true)} size={"sm"}>Add</Button>
		</>
	)
}