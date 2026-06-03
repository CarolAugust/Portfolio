import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-20 border-t border-[var(--color-line)] bg-[rgba(5,7,13,0.94)] text-white">
      <div className="container-default py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-md border border-[rgba(45,212,191,0.28)] bg-[rgba(45,212,191,0.08)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
              Player Profile
            </span>
            <h2 className="mt-6 max-w-xl text-3xl font-black uppercase leading-tight tracking-[0.04em] text-white md:text-5xl">
              Build mode active.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Menu
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/projects" className="text-lg font-semibold text-[var(--color-muted)] transition hover:text-white">
                  {t("projects")}
                </Link>
                <Link href="/about" className="text-lg font-semibold text-[var(--color-muted)] transition hover:text-white">
                  {t("about")}
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Network
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="https://github.com/CarolAugust" target="_blank" className="text-lg font-semibold text-[var(--color-muted)] transition hover:text-white">
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/carolineaugusto" target="_blank" className="text-lg font-semibold text-[var(--color-muted)] transition hover:text-white">
                  LinkedIn
                </Link>
                <Link href="mailto:augustocarol89@gmail.com" className="text-lg font-semibold text-[var(--color-muted)] transition hover:text-white">
                  E-mail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-muted)]">
          {t("role")}
        </div>
      </div>
    </footer>
  );
}
