// Site Configuration
// Diese Datei enthält wichtige Konfigurationsvariablen für die Website

export const SITE_CONFIG = {
  // Letztes Update-Datum der Website
  lastUpdated: "20.12.2025",
  
  // Weitere Konfigurationsmöglichkeiten für die Zukunft
  projectTitle: "ITSI Container Diplomprojekt 2025/26",
  schoolName: "TGM - Die Schule der Technik",
  updateInterval: "alle zwei Wochen",
  
  // Team Information
  teamName: "TGM Itsi-Container Diplomarbeit Team",
  academicYear: "2025/26"
};

// Hilfsfunktion für formatiertes Datum
export const getFormattedLastUpdated = (): string => {
  return SITE_CONFIG.lastUpdated;
};