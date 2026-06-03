import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <section className="py-16 md:py-24">
      <div className="container-default">
        <div className="relative overflow-hidden rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.9)] p-6 shadow-[var(--shadow-soft)] md:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent),var(--color-violet),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,212,191,0.08),transparent_35%),linear-gradient(300deg,rgba(167,139,250,0.08),transparent_35%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-md border border-[rgba(45,212,191,0.28)] bg-[rgba(45,212,191,0.08)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
                {t("badge")}
              </span>
              <h2 className="mt-6 max-w-3xl text-3xl font-black uppercase leading-tight tracking-[0.04em] text-white md:text-6xl">
                {t("title")}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--color-muted)]">
                {t("description")}
              </p>
            </div>

            <div className="rounded-lg border border-[rgba(45,212,191,0.18)] bg-white/[0.05] p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-warning)]">
                New mission
              </p>
              <p className="mt-4 text-2xl font-black uppercase leading-tight tracking-[0.03em] text-white">
                Procurando squad para next level.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-md border border-[rgba(45,212,191,0.5)] bg-[var(--color-accent)] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--color-deep)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)]"
              >
                {t("button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
