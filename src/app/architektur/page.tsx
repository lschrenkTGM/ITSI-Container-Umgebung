import Link from "next/link";
import { getFormattedLastUpdated } from "@/config/siteConfig";

export default function ArchitekturPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-lg border-b border-purple-900/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Architektur & Technologien</h1>
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

      <div className="container mx-auto px-6 py-12 space-y-8">
        {/* Backend */}
        <section className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-700/30">
          <h2 className="text-2xl font-bold text-purple-300 mb-3">Backend</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Das Backend wird in <span className="font-medium text-white">Go</span> implementiert. Ein zentraler Server
            orchestriert Aufgaben und steuert die Container-Lifecycle-Funktionen. Zur direkten Verwaltung von
            Containern verwendet das Backend das <span className="font-medium text-white">Docker SDK</span> für Go,
            wodurch Start/Stop, Netzwerkkonfiguration und Ressourcenlimits programmgesteuert und effizient
            realisiert werden können.
          </p>
        </section>

        {/* Schnittstellen */}
        <section className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-xl p-6 border border-blue-700/30">
          <h2 className="text-2xl font-bold text-blue-300 mb-3">Schnittstellen</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Zur Kommunikation zwischen Frontend und Backend kommen zwei Mechanismen zum Einsatz:
          </p>
          <ul className="list-disc list-inside text-gray-200 mt-3 space-y-2">
            <li>
              <span className="font-medium text-white">REST-API</span> für CRUD-Operationen: Einfach, zustandslos und
              gut testbar. Endpunkte sorgen für Verwaltung von Aufgaben, Benutzern und Metadaten.
            </li>
            <li>
              <span className="font-medium text-white">WebSockets</span> für Echtzeit-Datenübertragung: Statusupdates
              von Containern, Logs und Monitoring-Events werden in Echtzeit an die Clients gepusht.
            </li>
          </ul>
        </section>

        {/* Remote-Zugriff */}
        <section className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 rounded-xl p-6 border border-emerald-700/30">
          <h2 className="text-2xl font-bold text-emerald-300 mb-3">Remote-Zugriff</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Die Einbindung von Arbeitsumgebungen in den Browser erfolgt über <span className="font-medium text-white">noVNC</span>
            zur Erzeugung der VNC-Sitzungen und <span className="font-medium text-white">noVNC</span> für den Web-Client.
            Dadurch können Nutzer die grafische Oberfläche eines Containers direkt im Browser verwenden, ohne
            zusätzliche Software installieren zu müssen.
          </p>
        </section>

        {/* Sicherheit */}
        <section className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-xl p-6 border border-orange-700/30">
          <h2 className="text-2xl font-bold text-orange-300 mb-3">Sicherheit & Zugriffskontrolle</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Zugriffskontrollen werden über <span className="font-medium text-white">ABAC</span>
            (attributbasierte Zugriffskontrolle) realisiert. ABAC definiert kontextsensitive Regeln, die
            Attribute wie Zeitpunkt, IP-Bereich oder Kurszugehörigkeit berücksichtigen und so granulare
            Zugriffsentscheidungen ermöglichen.
          </p>
        </section>

        {/* Fazit */}
        <section className="bg-black/40 rounded-xl p-6 border border-purple-900/20 text-gray-200">
          <h3 className="text-xl font-bold text-white mb-2">Kurzfazit!</h3>
          <p className="leading-relaxed">
            Die gewählte Architektur verbindet Performance und Kontrolle (Go + Docker SDK) mit Benutzerfreundlichkeit
            (noVNC) und Flexibilität bei der Zugriffskontrolle (ABAC). REST und WebSockets bieten eine
            saubere Trennung zwischen zustandslosen CRUD-Operationen und Echtzeit-Kommunikation.
          </p>
        </section>
      </div>
    </main>
  );
}
