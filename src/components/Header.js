import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Layout");

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/projects", label: t("projects") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(5,7,13,0.78)] backdrop-blur-xl">
      <div className="container-default flex flex-wrap items-center justify-between gap-3 py-3 md:gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-white md:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgba(45,212,191,0.35)] bg-[linear-gradient(135deg,rgba(45,212,191,0.16),rgba(167,139,250,0.12))] text-xs font-black text-[var(--color-accent-soft)] shadow-[0_14px_30px_rgba(0,0,0,0.24)] md:h-11 md:w-11 md:text-sm">
            CA
          </div>
          <div className="min-w-0">
            <span className="block text-sm font-black uppercase tracking-[0.12em] text-white md:text-base md:tracking-[0.16em]">
              Caroline
            </span>
            <span className="hidden max-w-[150px] truncate text-xs font-medium text-[var(--color-muted)] sm:block sm:max-w-none md:text-sm">
              {t("role")}
            </span>
          </div>
        </Link>

        <nav className="order-4 grid w-full grid-cols-4 gap-1 rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.78)] px-2 py-2 md:order-2 md:flex md:w-auto md:items-center md:justify-center md:gap-2 md:border-none md:bg-transparent md:px-0 md:py-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-transparent px-1.5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-muted)] transition duration-200 hover:border-[rgba(45,212,191,0.28)] hover:bg-[rgba(45,212,191,0.08)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] md:px-4 md:text-sm md:tracking-[0.14em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 md:order-3">
          <LocaleSwitcher />
        </div>

        <Link
          href="/contact"
          className="order-3 hidden rounded-md border border-[rgba(45,212,191,0.5)] bg-[var(--color-accent)] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[var(--color-deep)] shadow-[0_16px_34px_rgba(45,212,191,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:inline-flex md:order-4 md:px-5 md:text-sm"
        >
          {t("cta")}
        </Link>
      </div>
    </header>
  );
}
