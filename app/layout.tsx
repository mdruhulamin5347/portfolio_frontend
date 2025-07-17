import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Md. Ruhul Amin",
  description: "A passionate Full Stack Developer creating robust and scalable web applications.",
  generator: "Md. Ruhul Amin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}