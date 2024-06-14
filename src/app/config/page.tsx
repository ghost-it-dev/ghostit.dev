import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PhoneIcon, MailIcon, LinkedinIcon, GithubIcon, PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

export default async function Page() {

  return (
    <main className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
      {/* <div className="w-full gap-4 flex items-center justify-end">
        <span className="font-medium text-lg">Services</span>
        <span className="font-medium text-lg">Contact</span>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden group">
            <Image
              src={"/images/trunk.png"}
              alt="Profile Picture"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center cursor-pointer justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-center">Change Picture</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">John Doe</h1>
          <p className="text-gray-500 mt-2">Software Engineer</p>
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <PhoneIcon className="inline-block h-4 w-4" />
              (316) 123-4567
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="inline-block h-4 w-4" />
              john.doe@example.com
            </div>
            <div className="flex items-center gap-2">
              <LinkedinIcon className="inline-block h-4 w-4" />
              <Link href="#">
                linkedin.com/in/johndoe
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <GithubIcon className="inline-block h-4 w-4" />
              <Link href="#">
                github.com/johndoe
              </Link>
            </div>
          </div>
          <Button className="w-full mt-4">
            Edit
          </Button>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="w-full flex items-center justify-between min-h-[36px]">
              <h2 className="text-xl md:text-2xl font-bold">Education</h2>
              <Button size={"sm"}>
                Add
              </Button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="w-full flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-500">University of Example, 2016 - 2020</p>
                </div>
                <div className="flex gap-2 items-center">
                  <PencilIcon className="h-4 w-4" />
                  <TrashIcon className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-500">University of Example, 2016 - 2020</p>
                </div>
                <div className="flex gap-2 items-center">
                  <PencilIcon className="h-4 w-4" />
                  <TrashIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center justify-between min-h-[36px]">
              <h2 className="text-xl md:text-2xl font-bold">Skills</h2>
              <Button size={"sm"}>
                Add
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 group">
                <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
                <p className="text-gray-500">JavaScript</p>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 duration-200">
                  <TrashIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="relative bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 group">
                <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
                <p className="text-gray-500">JavaScript</p>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 duration-200">
                  <TrashIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="relative bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 group">
                <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
                <p className="text-gray-500">JavaScript</p>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 duration-200">
                  <TrashIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="relative bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 group">
                <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
                <p className="text-gray-500">JavaScript</p>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 duration-200">
                  <TrashIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="relative bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 group">
                <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
                <p className="text-gray-500">JavaScript</p>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 duration-200">
                  <TrashIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="relative bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 group">
                <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
                <p className="text-gray-500">JavaScript</p>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 duration-200">
                  <TrashIcon className="w-4 h-4" />
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
              <div>
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Software Engineer</h3>
                    <p className="text-sm text-gray-500">Example Company, 2020 - Present</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <PencilIcon className="h-4 w-4" />
                    <TrashIcon className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-gray-500 mt-2">
                  Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
                  cross-functional teams to deliver high-quality software.
                </p>
              </div>
              <div>
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Software Engineer</h3>
                    <p className="text-sm text-gray-500">Example Company, 2020 - Present</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <PencilIcon className="h-4 w-4" />
                    <TrashIcon className="h-4 w-4" />
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
