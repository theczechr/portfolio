import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    const rewrites = [
      // Serve the static Hyprfolio app from public/hyprfolio/index.html at /hyprfolio
      { source: "/hyprfolio", destination: "/hyprfolio/index.html" },
      // Also handle trailing slash variant
      { source: "/hyprfolio/", destination: "/hyprfolio/index.html" },
    ];

    return rewrites;
  },
  async headers() {
    return [
      {
        source: "/hyprfolio/:path*",
        headers: [
          // Allow embedding on same-origin pages (we'll iframe it from /try)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Basic CSP that permits same-origin framing; expand if Hyprfolio needs external resources
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
        ],
      },
    ];
  },
};

export default nextConfig;
