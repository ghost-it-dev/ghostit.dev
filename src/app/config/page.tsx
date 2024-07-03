import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PhoneIcon, MailIcon, PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { getPerson } from "@/lib/actions/person";
import DeleteSkillButton from "./skills/DeleteSkillButton";
import AddSkillButton from "./skills/AddSkillButton";
import { skillsArray } from "@/lib/skills";
import { connectionsIconArray } from "@/lib/connections";

export default async function Page() {
  const person = await getPerson();

  return (
    <main className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1 flex flex-col items-center md:items-baseline">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src={`/images/${person.profilePic}`}
              alt="Profile Picture"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">{person.name}</h1>
          {person.title && <p className="text-gray-500 mt-2">{person.title}</p>}
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            {person.phone && (
              <div className="flex items-center gap-2">
                <PhoneIcon className="inline-block h-4 w-4" />
                {person.phone}
              </div>
            )}
            {person.email && (
              <div className="flex items-center gap-2">
                <MailIcon className="inline-block h-4 w-4" />
                {person.email}
              </div>
            )}
            {person.connections.map((connection) => {
              const connectionDetails = connectionsIconArray.find((c) => c.key === connection.key);
              if (!connectionDetails) return null;
              return (
                <Link href={connection.url} key={connection.id} target="_blank" className="flex items-center gap-2">
                  <connectionDetails.icon className="inline-block h-4 w-4" />
                  {connection.handle}
                </Link>
              )
            }
            )}
          </div>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="w-full flex items-center justify-between min-h-[36px]">
              <h2 className="text-xl md:text-2xl font-bold">Skills</h2>
              <AddSkillButton />
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {person.skills.map((skill) => {
                const skillDetails = skillsArray.find((s) => s.value === skill.key);
                if (!skillDetails) return null;
                return (
                  <div key={skill.id} className="relative bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 group">
                    <skillDetails.icon className="w-6 h-6" />
                    <p className="text-gray-500">{skillDetails.label}</p>
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 duration-200">
                      <DeleteSkillButton skillId={skill.id} />
                    </div>
                  </div>
                )
              }
              )}
            </div>
          </div>
          <div>
            <div className="w-full flex items-center justify-between min-h-[36px]">
              <h2 className="text-xl md:text-2xl font-bold">Education</h2>
              <Button size={"sm"}>
                Add
              </Button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="w-full flex items-center justify-between group">
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-500">University of Example, 2016 - 2020</p>
                </div>
                <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 duration-200">
                  <PencilIcon className="h-4 w-4 cursor-pointer" />
                  <TrashIcon className="h-4 w-4 cursor-pointer" />
                </div>
              </div>
              <div className="w-full flex items-center justify-between group">
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-500">University of Example, 2016 - 2020</p>
                </div>
                <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 duration-200">
                  <PencilIcon className="h-4 w-4 cursor-pointer" />
                  <TrashIcon className="h-4 w-4 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center justify-between min-h-[36px]">
              <h2 className="text-xl md:text-2xl font-bold">Work Experience</h2>
              <Button size={"sm"}>
                Add
              </Button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="group">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Software Engineer</h3>
                    <p className="text-sm text-gray-500">Example Company, 2020 - Present</p>
                  </div>
                  <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 duration-200">
                    <PencilIcon className="h-4 w-4 cursor-pointer" />
                    <TrashIcon className="h-4 w-4 cursor-pointer" />
                  </div>
                </div>
                <p className="text-gray-500 mt-2">
                  Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
                  cross-functional teams to deliver high-quality software.
                </p>
              </div>
              <div className="group">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Software Engineer</h3>
                    <p className="text-sm text-gray-500">Example Company, 2020 - Present</p>
                  </div>
                  <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 duration-200">
                    <PencilIcon className="h-4 w-4 cursor-pointer" />
                    <TrashIcon className="h-4 w-4 cursor-pointer" />
                  </div>
                </div>
                <p className="text-gray-500 mt-2">
                  Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
                  cross-functional teams to deliver high-quality software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
