import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EkShastho – Health in One Platform | Bindulogic Limited",
  description: "EkShastho is a complete digital healthcare platform that connects doctors, patients, and hospitals. Manage patient records, appointments, prescriptions and more in one secure system.",
  keywords: "healthcare, hospital management, EHR, digital health, Bangladesh, EkShastho, Bindulogic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
