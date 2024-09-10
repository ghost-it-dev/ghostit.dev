import { PhoneIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import { SiReact } from "@icons-pack/react-simple-icons";

export default async function Page() {
  return (
    <main className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
      {/* <div className="w-full gap-4 flex items-center justify-end">
        <span className="font-medium text-lg">Services</span>
        <span className="font-medium text-lg">Contact</span>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1 flex flex-col items-center md:items-baseline">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src={`/images/trunk.png`}
              alt="Profile Picture"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">John Doe</h1>
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <PhoneIcon className="inline-block h-4 w-4" />
              (123) 456-7890
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="inline-block h-4 w-4" />
              email@email.com
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="min-h-[36px] flex items-center">
              <h2 className="text-xl md:text-2xl font-bold">Skills</h2>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2">
                <SiReact className="w-6 h-6" />
                <p className="text-gray-500 select-none">React</p>
              </div>
            </div>
          </div>
          <div>
            <div className="min-h-[36px] flex items-center">
              <h2 className="text-xl md:text-2xl font-bold">Education</h2>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-500">University of Example, 2016 - 2020</p>
              </div>
              <div>
                <h3 className="font-semibold">High School Diploma</h3>
                <p className="text-gray-500">Example High School, 2012 - 2016</p>
              </div>
            </div>
          </div>
          <div>
            <div className="min-h-[36px] flex items-center">
              <h2 className="text-xl md:text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Software Engineer</h3>
                <p className="text-sm text-gray-500">Example Company, 2020 - Present</p>
                <p className="text-gray-500 mt-2">
                  Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
                  cross-functional teams to deliver high-quality software.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Intern</h3>
                <p className="text-sm text-gray-500">Example Inc., 2019 - 2020</p>
                <p className="text-gray-500 mt-2">
                  Participated in various projects, gaining experience in front-end and back-end development.
                  Contributed to the company's codebase and learned best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
