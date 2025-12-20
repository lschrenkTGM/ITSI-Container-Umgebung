import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // WICHTIG: exportiert statische Seiten
    images: {
        unoptimized: true, // Deaktiviert die Image Optimization API (erforderlich bei output: 'export')
    },
};

export default nextConfig;
