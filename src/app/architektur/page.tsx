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
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Das Backend wird in <span className="font-medium text-white">Go</span> implementiert und bildet das Herzstück der Plattform.
            Ein zentraler Server orchestriert alle Aufgaben und steuert die Container-Lifecycle-Funktionen. Die Wahl von Go
            begründet sich durch die hervorragende Performance, native Unterstützung für Concurrency mittels Goroutines
            und die geringe Speichernutzung – alles essenzielle Faktoren für eine ressourceneffiziente Container-Verwaltung.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Zur direkten Verwaltung von Containern verwendet das Backend das <span className="font-medium text-white">Docker SDK</span> für Go.
            Dies ermöglicht eine programmgesteuerte und effiziente Kontrolle über Start/Stop-Vorgänge, Netzwerkkonfiguration,
            Volume-Mounting und Ressourcenlimits (CPU, RAM). Der direkte Zugriff auf die Docker-Engine ohne zusätzliche Abstraktionsschichten
            garantiert minimale Latenz und maximale Flexibilität bei der Container-Orchestrierung.
          </p>
        </section>

        {/* Schnittstellen */}
        <section className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-xl p-6 border border-blue-700/30">
          <h2 className="text-2xl font-bold text-blue-300 mb-3">Schnittstellen</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Die Kommunikation zwischen Frontend und Backend erfolgt über eine hybride Architektur, die zwei komplementäre
            Mechanismen kombiniert, um sowohl klassische als auch Echtzeit-Anforderungen optimal zu bedienen:
          </p>
          <ul className="list-disc list-inside text-gray-200 mt-3 space-y-4">
            <li>
              <span className="font-medium text-white">REST-API</span> für CRUD-Operationen: Die RESTful-Schnittstelle
              folgt den Standards von HTTP-Methoden (GET, POST, PUT, DELETE) und ist zustandslos, was sie einfach zu cachen
              und horizontal zu skalieren macht. Dedizierte Endpunkte ermöglichen die Verwaltung von Aufgaben, Benutzern,
              Container-Templates und Metadaten. Die API wird mit JSON als Austauschformat implementiert und bietet
              umfassende Error-Handling-Mechanismen sowie Request-Validierung.
            </li>
            <li>
              <span className="font-medium text-white">WebSockets</span> für Echtzeit-Datenübertragung: Über persistente
              bidirektionale Verbindungen werden Statusupdates von Containern, Live-Logs und Monitoring-Events in Echtzeit
              an die Clients gepusht. Dies ermöglicht eine reaktive Benutzeroberfläche, die sofort auf Änderungen reagiert,
              ohne dass ständiges Polling notwendig ist. WebSockets werden insbesondere für Terminal-Sessions, Log-Streaming
              und Container-Statusbenachrichtigungen verwendet.
            </li>
          </ul>
        </section>

        {/* Remote-Zugriff */}
        <section className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 rounded-xl p-6 border border-emerald-700/30">
          <h2 className="text-2xl font-bold text-emerald-300 mb-3">Remote-Zugriff</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Die Einbindung von Arbeitsumgebungen in den Browser erfolgt über eine Kombination aus <span className="font-medium text-white">VNC-Server</span>
            im Container und <span className="font-medium text-white">noVNC</span> als Web-Client. VNC (Virtual Network Computing) ermöglicht
            die Fernsteuerung grafischer Benutzeroberflächen, während noVNC als HTML5-Canvas-basierter VNC-Client fungiert,
            der direkt im Browser läuft.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Diese Lösung bietet mehrere Vorteile: Nutzer können die grafische Oberfläche eines Containers vollständig im Browser
            verwenden, ohne zusätzliche Software wie VNC-Viewer installieren zu müssen. Die Verbindung erfolgt über WebSockets,
            was eine geringe Latenz und flüssige Interaktion gewährleistet. Zusätzlich werden Tastatureingaben, Mausbewegungen
            und Clipboard-Operationen über die noVNC-Schnittstelle übertragen, sodass eine nahezu native Desktop-Erfahrung
            entsteht. Die Skalierung und Anpassung der Auflösung erfolgt dynamisch basierend auf der Browserfenstergröße.
          </p>
        </section>

        {/* Sicherheit */}
        <section className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-xl p-6 border border-orange-700/30">
          <h2 className="text-2xl font-bold text-orange-300 mb-3">Sicherheit & Zugriffskontrolle</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Das Sicherheitskonzept basiert auf mehreren Ebenen. Zugriffskontrollen werden primär über <span className="font-medium text-white">ABAC</span>
            (Attribute-Based Access Control) realisiert. Im Gegensatz zu traditionellen rollenbasierten Systemen (RBAC)
            definiert ABAC kontextsensitive Regeln, die dynamisch Attribute wie Zeitpunkt, IP-Bereich, Kurszugehörigkeit,
            Gerätestatus und Benutzerverhalten berücksichtigen.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Diese Flexibilität ermöglicht granulare Zugriffsentscheidungen: Ein Schüler kann beispielsweise nur während der
            Unterrichtszeit, aus dem Schulnetzwerk und ausschließlich auf Container zugreifen, die seinem aktuellen Kurs
            zugeordnet sind. Policies werden zentral im Backend verwaltet und bei jedem API-Request evaluiert.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Zusätzlich werden alle Container in isolierten <span className="font-medium text-white">Docker Networks</span> ausgeführt,
            sodass eine direkte Kommunikation zwischen verschiedenen Benutzer-Containern verhindert wird. Ressourcenlimits
            (CPU, RAM, Disk I/O) schützen vor Denial-of-Service-Angriffen. Alle Kommunikationskanäle werden über
            <span className="font-medium text-white"> TLS/SSL verschlüsselt</span>, und Authentifizierung erfolgt mittels
            <span className="font-medium text-white"> JWT-Tokens</span> mit kurzen Ablaufzeiten und Refresh-Mechanismen.
          </p>
        </section>

        {/* CI/CD & Testing */}
        <section className="bg-gradient-to-r from-indigo-900/20 to-indigo-800/20 rounded-xl p-6 border border-indigo-700/30">
          <h2 className="text-2xl font-bold text-indigo-300 mb-3">Testing & CI/CD Pipeline</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Die Qualitätssicherung erfolgt über eine umfassende automatisierte Test-Suite in einer <span className="font-medium text-white">CI/CD-Pipeline</span>
            mittels <span className="font-medium text-white">GitHub Actions</span>. Bei jedem Push auf einen Branch wird automatisch
            ein Workflow getriggert, der mehrere Stufen durchläuft: Unit-Tests für Backend-Logik, Integration-Tests für
            API-Endpunkte, Linting für Code-Qualität und statische Analyse zur Erkennung von Sicherheitslücken.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Der CI/CD-Prozess umfasst auch automatisierte Builds von Docker-Images, die in einer Container-Registry gespeichert
            werden. Version-Tagging erfolgt basierend auf Git-Tags und Commit-Hashes. Pull Requests werden nur nach erfolgreichen
            Tests und Code-Reviews freigegeben, wodurch die Main-Branch-Stabilität gewährleistet wird.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Das Deployment erfolgt automatisch auf Staging-Umgebungen bei Merges in den Development-Branch und auf Production
            nach Manual-Approval bei Main-Branch-Updates. Diese Automatisierung garantiert kontinuierliche Integration,
            schnelle Fehlererkennung und reduziert manuelle Deploymentfehler erheblich.
          </p>
        </section>

        {/* Datenbank */}
        <section className="bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 rounded-xl p-6 border border-cyan-700/30">
          <h2 className="text-2xl font-bold text-cyan-300 mb-3">Datenbank & Persistenz</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Als Datenbanksystem kommt <span className="font-medium text-white">PostgreSQL</span> zum Einsatz – eine bewährte,
            ACID-konforme relationale Datenbank mit ausgezeichneter Performance und Zuverlässigkeit. PostgreSQL bietet
            umfangreiche Datentypen (JSON, Arrays, JSONB), mächtige Indexierungsmöglichkeiten und native Unterstützung für
            Transaktionen und Constraints, die für die Integrität der Benutzerdaten und Container-Metadaten essentiell sind.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Die Datenbankinstanz läuft in einem separaten Container und wird über <span className="font-medium text-white">Docker Compose</span>
            orchestriert. Diese Containerisierung vereinfacht Deployment, Versionierung und Portabilität. Persistent Volumes
            stellen sicher, dass Daten auch bei Container-Neustarts erhalten bleiben.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Neben der Hauptdatenbank werden dedizierte Volumes für die Speicherung von <span className="font-medium text-white">Docker Compose Files</span>,
            Container-Images und User-generierten Daten bereitgestellt. Diese Konfigurationsdateien können versioniert,
            exportiert und bei Bedarf wiederhergestellt werden. Automatische Backups laufen täglich und ermöglichen
            Point-in-Time-Recovery im Fehlerfall. Die Datenbankverbindung erfolgt über Connection-Pooling für optimale
            Performance bei gleichzeitigen Zugriffen.
          </p>
        </section>

        {/* Live Environment */}
        <section className="bg-gradient-to-r from-pink-900/20 to-pink-800/20 rounded-xl p-6 border border-pink-700/30">
          <h2 className="text-2xl font-bold text-pink-300 mb-3">Live Container-Umgebung</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Das Herzstück der Plattform ist ein intuitives <span className="font-medium text-white">Web-Interface</span>, über das
            Benutzer ihre Container-Umgebungen in Echtzeit steuern, konfigurieren und überwachen können. Die Benutzeroberfläche
            ist reaktiv gestaltet und aktualisiert sich automatisch bei Statusänderungen durch WebSocket-Events.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Das Dashboard bietet umfangreiche Funktionen: One-Click-Start/Stop von Containern, Live-Ansicht von Container-Logs
            mit Filtering und Search, Echtzeit-Monitoring von CPU- und RAM-Auslastung, Netzwerkstatistiken und Disk-I/O.
            Benutzer können Container-Konfigurationen anpassen, Umgebungsvariablen setzen, Ports freigeben und Volumes mounten.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Alle Container laufen in einer vollständig isolierten Live-Umgebung mit eigenen Netzwerken und Ressourcenlimits.
            Der Zugriff erfolgt bequem über den Browser – entweder via Terminal-Emulator für CLI-basierte Aufgaben oder via
            noVNC für grafische Desktop-Umgebungen. Multi-User-Support ermöglicht es mehreren Schülern, gleichzeitig an
            verschiedenen Aufgaben zu arbeiten, ohne sich gegenseitig zu beeinflussen. Snapshots erlauben das Speichern und
            Wiederherstellen von Container-Zuständen, ideal für experimentelle Übungen und Rollbacks.
          </p>
        </section>
      </div>
    </main>
  );
}
