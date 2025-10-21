import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, getFormattedLastUpdated } from "@/config/siteConfig";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/index-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header - sehr dunkles Violett, dünner */}
      <div className="bg-[#160022]/95 backdrop-blur-xl border-b border-[#3f0070]/60">
        <div className="container mx-auto px-6 py-3 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-1 text-white drop-shadow-sm">
            {SITE_CONFIG.projectTitle}
          </h1>
          <p className="text-purple-200 font-medium mb-1">{SITE_CONFIG.schoolName}</p>
          <p className="text-xs text-gray-300">Letzte Aktualisierung: {getFormattedLastUpdated()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-10 flex flex-col flex-1">
        <div className="mx-auto w-full max-w-3xl">
          <div className="bg-black/55 backdrop-blur-md rounded-2xl p-6 mb-6 border border-purple-800/40 text-center" >
            <h2 className="text-3xl text-white font-bold mb-0">Willkommen</h2>
          </div>
        </div>

        {/* Buttons am unteren Ende der Content-Box */}
        <div className="mt-auto grid md:grid-cols-2 gap-6 pb-6">
          <Link
            href="/aufgabenstellung"
            className="group block p-4 rounded-lg bg-purple-900/95 border border-purple-700 shadow-lg hover:scale-105 transform transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Aufgabenstellung</h3>
                <p className="text-purple-100 text-sm mt-1">Ausgangslage, Projektziel und technische Umsetzung.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-200 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          <Link
            href="/team"
            className="group block p-4 rounded-lg bg-[#1a0030]/95 border border-purple-800 shadow-lg hover:scale-105 transform transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Team</h3>
                <p className="text-purple-200 text-sm mt-1">Teamvorstellung und Kontaktdaten.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-200 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          <Link
            href="/vertretung"
            className="group block p-4 rounded-lg bg-blue-900/95 border border-blue-700 shadow-lg hover:scale-105 transform transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Vertretung nach außen</h3>
                <p className="text-blue-100 text-sm mt-1">Präsentationen, Workshops und Kontaktmöglichkeiten.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-200 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          <Link
            href="/meilensteine"
            className="group block p-4 rounded-lg bg-green-900/95 border border-green-700 shadow-lg hover:scale-105 transform transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Meilensteine</h3>
                <p className="text-green-100 text-sm mt-1">Aktueller Status und Zusammenfassung der Meilensteine.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-green-200 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-lg border-t border-purple-900/40">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-gray-400">
            © {SITE_CONFIG.academicYear} {SITE_CONFIG.teamName} | Letzte Aktualisierung: {getFormattedLastUpdated()}
          </p>
        </div>
      </footer>
    </main>
  );
}
