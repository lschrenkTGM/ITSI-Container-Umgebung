import Link from "next/link";
import { SITE_CONFIG, getFormattedLastUpdated } from "@/config/siteConfig";

export default function AufgabenstellungPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-lg border-b border-purple-900/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">{SITE_CONFIG.projectTitle}</h1>
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg text-base md:text-lg transition transform hover:-translate-y-0.5"
            >
              Zur Startseite
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-2">Letzte Aktualisierung: {getFormattedLastUpdated()}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Ausgangslage */}
        <section className="mb-10 bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-700/30">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Ausgangslage</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Die IT-Security-Übungen der vierten Klasse am TGM werden derzeit hybrid durchgeführt – teils lokal 
            (zum Beispiel in isolierten Umgebungen wie Docker-Containern) und teils remote über eine vom Professor 
            gehostete Webseite. Obwohl dieses System grundsätzlich funktioniert, ist es in der Praxis 
            <span className="text-red-300 font-medium"> unübersichtlich und umständlich</span>, da eine zentrale, 
            einheitliche Plattform fehlt, welche beide Ansätze miteinander vereint.
          </p>
        </section>

        {/* Projektziel */}
        <section className="mb-10 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-xl p-6 border border-blue-700/30">
          <h2 className="text-2xl font-bold text-blue-300 mb-4">Projektziel</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Ziel dieses Projekts ist es, den Schülern der vierten Klasse eine 
            <span className="text-blue-300 font-medium"> zentrale Webplattform</span> zur Verfügung zu stellen, 
            über die alle Aufgaben bearbeitet werden können.
          </p>
        </section>

        {/* Technische Umsetzung */}
        <section className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-xl p-6 border border-orange-700/30">
          <h2 className="text-2xl font-bold text-orange-300 mb-4">Technische Umsetzung</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Neben der Webseite wird ein <span className="text-orange-300 font-medium">Backend entwickelt</span>, 
            das die Verwaltung und Steuerung der Container übernimmt. Eine 
            <span className="text-orange-300 font-medium"> Schnittstelle</span> verbindet das Frontend 
            mit dem Backend und sorgt für eine reibungslose Kommunikation.
          </p>
          <h3 className="text-xl font-semibold text-orange-200 mb-3 mt-6">Kernkomponenten der Implementierung:</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>
              <span className="font-medium text-white">CI/CD Pipeline:</span> Automatisiertes Testing und Deployment
              über GitHub Workflows zur Sicherstellung der Code-Qualität
            </li>
            <li>
              <span className="font-medium text-white">PostgreSQL Datenbank:</span> Persistente Datenspeicherung mit
              Docker Compose für Container-Konfigurationen und Benutzerdaten
            </li>
            <li>
              <span className="font-medium text-white">Live Container-Umgebung:</span> Webbasiertes User Interface
              zur Verwaltung und Überwachung von Container-Instanzen in Echtzeit
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
