import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { getFormattedLastUpdated, SITE_CONFIG } from "@/config/siteConfig";

const teamMembers = [
	{
		name: "Lukas Schrenk",
		role: "Projektleiter & Backend Developer",
		email: "lschrenk@student.tgm.ac.at",
		linkedin: "https://www.linkedin.com/in/lukas-schrenk-290abb364/",
		github: "https://github.com/LukassSchr3",
		image: "/images/schrenk.jpg",
		tasks: "Kümmert sich um die Verbindung zwischen der Benutzeroberfläche und der technischen Übungsumgebung.",
	},
	{
		name: "Carol Gradkowski",
		role: "Backend Developer & Container Verwaltung",
		email: "cgradkowski@student.tgm.ac.at",
		linkedin: "https://www.linkedin.com/in/karol-gradkowski-09372536a/",
		github: "https://github.com/Rechtschraibung",
		image: "/images/carol.jpg",
		tasks: "Verantwortlich für die Entwicklung der technischen Basis des Projekts.",
	},
	{
		name: "Nicolas Hrdlicka",
		role: "Frontend Developer & UI/UX Design",
		email: "nhrdlicka@student.tgm.ac.at",
		linkedin: "https://www.linkedin.com/in/nicolas-hrdlicka-b21a92387/",
		github: "https://github.com/nicolasHrdlicka",
		image: "/images/hrdlicka.jpg",
		tasks: "Fokussiert sich auf das Design und die Nutzererfahrung der Webplattform.",
	},
	{
		name: "Christoph Pasterniak",
		role: "Frontend Developer & Rollenverwaltung",
		email: "cpasterniak@student.tgm.ac.at",
		linkedin: "https://www.linkedin.com/in/christoph-pasterniak-29a648266",
		github: "https://github.com/cpasterniak",
		image: "/images/pasterniak.jpg",
		tasks: "Zuständig für Benutzerrollen und Organisation der Übungsumgebung im Frontend.",
	},
];

export default function TeamPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black">
			{/* Header */}
			<div className="bg-black/40 backdrop-blur-lg border-b border-purple-900/30">
				<div className="container mx-auto px-6 py-6 flex items-center justify-between">
					<h1 className="text-2xl font-bold text-white">
						{SITE_CONFIG.projectTitle} — Team
					</h1>
					<div className="flex items-center space-x-4">
						<Link
							href="/"
							className="inline-flex items-center px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg text-base md:text-lg transition transform hover:-translate-y-0.5"
						>
							Zur Startseite
						</Link>
						<span className="text-sm text-gray-500">
							Letzte Aktualisierung: {getFormattedLastUpdated()}
						</span>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-6 py-12">
				<div className="grid md:grid-cols-2 gap-8">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="bg-black/30 rounded-xl p-6 border border-purple-800/30"
						>
							<div className="text-center mb-6">
								<div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-700">
									<Image
										src={member.image}
										alt={member.name}
										width={128}
										height={128}
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold text-white mb-1">
									{member.name}
								</h3>
								<p className="text-purple-300 font-medium">
									{member.role}
								</p>
							</div>

							<div className="mb-4 p-4 bg-purple-900/20 rounded-lg border border-purple-800/40">
								<h4 className="text-sm font-semibold text-purple-300 mb-2">
									📋 Aufgaben
								</h4>
								<p className="text-gray-300 text-sm">
									{member.tasks}
								</p>
							</div>

							<div className="space-y-2">
								<div className="flex items-center text-gray-300">
									<Mail className="w-4 h-4 mr-3 text-blue-400" />
									<a
										href={`mailto:${member.email}`}
										className="hover:text-blue-400 text-sm"
									>
										{member.email}
									</a>
								</div>
								<div className="flex items-center text-gray-300">
									<Linkedin className="w-4 h-4 mr-3 text-blue-500" />
									<a
										href={member.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-blue-500 text-sm"
									>
										LinkedIn
									</a>
								</div>
								<div className="flex items-center text-gray-300">
									<Github className="w-4 h-4 mr-3 text-purple-400" />
									<a
										href={member.github}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-purple-400 text-sm"
									>
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
