import "./globals.css";

export const metadata = {
  title: "Caroline Augusto | Desenvolvedora Full Stack Jr",
  description: "Portfólio de Caroline Augusto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[var(--color-page)] text-[var(--color-ink)] antialiased">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
