import Link from "next/link";
import { SITE_CONFIG, getFormattedLastUpdated } from "@/config/siteConfig";

export default function VertretungPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black">
      <div className="bg-black/40 backdrop-blur-lg border-b border-purple-900/30">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Vertretung nach außen</h1>
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg text-base md:text-lg transition transform hover:-translate-y-0.5"
          >
            Zur Startseite
          </Link>
        </div>
      </div>


      {/* Neue ausführliche Angebotsbeschreibung für externe Partner */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-black/55 rounded-2xl p-6 border border-purple-800/40">
          <h2 className="text-2xl font-bold text-white mb-3">Vertretung nach außen – Angebote für externe Partner</h2>
          <p className="text-gray-300 mb-4">
            Unser Diplomprojekt &quot;ITSI Container Umgebung&quot; am TGM entwickelt eine interaktive Lernplattform für den IT-Security Unterricht, bei der Schüler in isolierten Containern praxisnahe Aufgaben lösen können.
          </p>

          <p className="text-gray-300 mb-2 font-semibold">Für externe Firmen und Partner bieten wir folgende Möglichkeiten der Zusammenarbeit und Präsentation an:</p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Live-Demonstrationen &amp; Testzugänge – Vorstellung der Plattform und Übungsbeispiele direkt aus dem Unterricht um die Fähigkeiten der Schüler am TGM zu demonstrieren.</li>
            <li>Workshops &amp; Kurzvorträge – Einblicke in unsere Themen als auch Projekte.</li>
            <li>Kooperationsprojekte – Integration firmenspezifischer Challenges.</li>
            <li>Recruiting &amp; Networking – Direkter Kontakt zu engagierten Schülern mit Schwerpunkt auf IT-Security und DevOps.</li>
            <li>Verwendung als Schulungsplattform – Möglichkeit, das System für interne Trainings und Vortbildungen für nicht IT-Spezialisten.</li>
          </ul>

          <p className="text-gray-300 mb-2">Interessierte Unternehmen können uns gerne kontaktieren unter:</p>
          <p className="text-gray-300 mb-4">
            📧 <a href="mailto:lschrenk@student.tgm.ac.at" className="text-purple-300 hover:text-purple-200">lschrenk@student.tgm.ac.at</a><br />
          </p>

          <p className="text-gray-300">Wir freuen uns darauf, unser Projekt und unsere Expertise im Rahmen von Firmenevents, Messen oder Fachveranstaltungen zu präsentieren.</p>
        </div>
      </div>
    </main>
  );
}
