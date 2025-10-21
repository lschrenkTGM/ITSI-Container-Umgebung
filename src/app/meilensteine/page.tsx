import Link from "next/link";
import { Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { SITE_CONFIG, getFormattedLastUpdated } from "@/config/siteConfig";

const milestones = [
	{
		id: 1,
		title: "Mockup fertig",
		description:
			"Erstellung der visuellen Mockups und Design-Prototypen für die Container-Management Plattform",
		deadline: "12.10.2025",
		status: "completed",
	},
	{
		id: 2,
		title: "Recherche abgeschlossen",
		description:
			"Umfassende Recherche zu Container-Technologien, Tools und Best Practices für die Systemarchitektur",
		deadline: "17.10.2025",
		status: "completed",
	},
	{
		id: 3,
		title: "Formular für Datenübermittlung wurde erstellt",
		description:
			"Implementierung der Formulare für die Datenerfassung und -übertragung im System",
		deadline: "27.10.2025",
		status: "pending",
	},
	{
		id: 4,
		title: "Webseiten Prototyp wurde erstellt",
		description:
			"Entwicklung eines funktionsfähigen Prototyps der Webanwendung",
		deadline: "05.11.2025",
		status: "pending",
	},
	{
		id: 5,
		title: "Container Templates wurden aufgesetzt",
		description:
			"Erstellung und Konfiguration der Standard-Container-Templates für verschiedene Anwendungsfälle",
		deadline: "05.11.2025",
		status: "pending",
	},
	{
		id: 6,
		title: "Server-Container Verbindung vorhanden",
		description:
			"Etablierung der Kommunikation zwischen Server und Container-Infrastruktur",
		deadline: "15.11.2025",
		status: "pending",
	},
	{
		id: 7,
		title: "Backend Container Steuerung implementiert",
		description:
			"Implementierung der Backend-Logik für Container-Management und -Steuerung",
		deadline: "30.11.2025",
		status: "pending",
	},
	{
		id: 8,
		title: "Frontend-Backend Schnittstelle fertig",
		description:
			"Vollständige Integration und Kommunikation zwischen Frontend und Backend",
		deadline: "06.12.2025",
		status: "pending",
	},
	{
		id: 9,
		title: "Projektentwicklung abgeschlossen",
		description:
			"Abschluss der gesamten Entwicklungsphase mit allen Kernfunktionalitäten",
		deadline: "17.01.2026",
		status: "pending",
	},
	{
		id: 10,
		title: "Finales Testing des Projekts fertig",
		description:
			"Umfassende Tests, Qualitätssicherung und Bugfixing der gesamten Anwendung",
		deadline: "14.02.2026",
		status: "pending",
	},
	{
		id: 11,
		title: "Dokumentation abgeschlossen",
		description:
			"Fertigstellung der technischen Dokumentation, Benutzerhandbuch und Abschlusspräsentation",
		deadline: "15.03.2026",
		status: "pending",
	},
];

const getStatusIcon = (status: string) => {
	switch (status) {
		case "completed":
			return <CheckCircle className="w-5 h-5 text-green-500" />;
		case "pending":
		default:
			return <AlertCircle className="w-5 h-5 text-gray-400" />;
	}
};

export default function MeilensteinePage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black">
			<div className="bg-black/40 backdrop-blur-lg border-b border-purple-900/30">
				<div className="container mx-auto px-6 py-6 flex items-center justify-between">
					<h1 className="text-2xl font-bold text-white">Meilensteine</h1>
					<Link
						href="/"
						className="inline-flex items-center px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg text-base md:text-lg transition transform hover:-translate-y-0.5"
					>
						Zur Startseite
					</Link>
				</div>
			</div>

			<div className="container mx-auto px-6 py-12">
				<div className="space-y-6">
					{milestones.map((m) => (
						<div
							key={m.id}
							className="bg-black/30 rounded-xl p-6 border border-purple-800/30"
						>
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-center space-x-3">
									{getStatusIcon(m.status)}
									<h3 className="text-xl font-semibold text-white">
										{m.title}
									</h3>
								</div>
								<div className="flex items-center space-x-2">
									<Calendar className="w-4 h-4 text-gray-400" />
									<span className="text-gray-400 text-sm">
										{m.deadline}
									</span>
								</div>
							</div>
							<p className="text-gray-300 mb-4">{m.description}</p>
							<div className="flex items-center mt-4">
								<span
									className={`px-3 py-1 rounded-full text-sm font-medium ${
										m.status === "completed"
											? "bg-green-500/20 text-green-300 border border-green-500/50"
											: "bg-gray-500/20 text-gray-300 border border-gray-500/50"
									}`}
								>
									{m.status === "completed"
										? "Abgeschlossen"
										: "Ausstehend"}
								</span>
							</div>
						</div>
					))}
				</div>

				<div className="mt-8 grid md:grid-cols-2 gap-6">
					<div className="bg-green-500/20 rounded-xl p-6 border border-green-500/30">
						<h4 className="font-bold text-green-300 mb-2">Abgeschlossen</h4>
						<p className="text-2xl font-bold text-white">
							{
								milestones.filter((m) => m.status === "completed")
									.length
							}
						</p>
					</div>
					<div className="bg-gray-500/20 rounded-xl p-6 border border-gray-500/30">
						<h4 className="font-bold text-gray-300 mb-2">Ausstehend</h4>
						<p className="text-2xl font-bold text-white">
							{
								milestones.filter((m) => m.status === "pending").length
							}
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
