import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-line)] py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,212,191,0.1),transparent_34%),linear-gradient(300deg,rgba(167,139,250,0.1),transparent_36%)]" />

        <div className="container-default relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {t("eyebrow")}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight tracking-[0.04em] md:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--color-muted)]">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-default">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <aside className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[var(--shadow-soft)] md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {t("journey")}
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.04em] text-white md:text-4xl">
                Caroline Augusto
              </h2>

              <p className="mt-3 text-lg font-semibold text-[var(--color-accent-soft)]">
                {t("role")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "HTML",
                  "CSS",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[var(--color-line)] bg-white/[0.06] px-4 py-2 text-sm font-semibold text-[var(--color-accent-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>

            <div className="rounded-lg border border-[var(--color-line)] bg-white/[0.04] p-6 md:p-8">
              <div className="space-y-6 text-base leading-8 text-[var(--color-muted)] md:text-lg md:leading-9">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
                <p>{t("paragraph3")}</p>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-24">
            <div className="mb-10 md:mb-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {t("profileEyebrow")}
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase tracking-[0.04em] text-white md:text-5xl">
                {t("profileTitle")}
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(103,232,249,0.34)] md:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.1)] text-lg font-black text-[var(--color-accent-soft)]">
                  {"</>"}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-[0.03em] text-white">
                  {t("card1Title")}
                </h4>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)] md:text-lg">
                  {t("card1Description")}
                </p>
              </div>

              <div className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(167,139,250,0.34)] md:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(167,139,250,0.28)] bg-[rgba(167,139,250,0.1)] text-sm font-black text-[var(--color-violet)]">
                  LAB
                </div>
                <h4 className="text-2xl font-black uppercase tracking-[0.03em] text-white">
                  {t("card2Title")}
                </h4>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)] md:text-lg">
                  {t("card2Description")}
                </p>
              </div>

              <div className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(248,211,107,0.34)] md:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(248,211,107,0.28)] bg-[rgba(248,211,107,0.1)] text-sm font-black text-[var(--color-warning)]">
                  TEAM
                </div>
                <h4 className="text-2xl font-black uppercase tracking-[0.03em] text-white">
                  {t("card3Title")}
                </h4>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)] md:text-lg">
                  {t("card3Description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
