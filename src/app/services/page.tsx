import Link from "next/link";

export default async function Page() {
	return (
		<main className="w-full max-w-4xl mx-auto py-12 md:py-8 px-4 md:px-6">
			<nav className="w-full gap-4 flex items-center mb-12">
				<Link href="/" className="font-medium text-lg">Home</Link>
				<Link href="/services" className="font-medium text-lg">Services</Link>
			</nav>
			<div className="mt-4 space-y-4">
				<div>
					<h2 className="text-xl font-bold">Work Experience</h2>
					<p className="text-gray-600 mt-1">
						Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
						cross-functional teams to deliver high-quality software.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-bold">Work Experience</h2>
					<p className="text-gray-600 mt-1">
						Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
						cross-functional teams to deliver high-quality software.
					</p>
				</div>
			</div>

		</main>
	);
}
