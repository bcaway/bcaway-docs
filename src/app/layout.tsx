import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BCAway Documentation",
  description:
    "Official documentation for BCAway — real-time teacher absences and daily bell schedules for Bergen County Academies.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
