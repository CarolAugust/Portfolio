import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import SkillBadges from "@/components/SkillBadges";
import SkillBars from "@/components/SkillBars";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-line)] px-0 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,212,191,0.1),transparent_32%),linear-gradient(300deg,rgba(167,139,250,0.1),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.7),transparent)]" />

        <div className="container-default">
          <div className="relative z-10 mb-8 flex flex-wrap gap-3">
            <span className="rounded-md border border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.08)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
              {t("badge1")}
            </span>
            <span className="rounded-md border border-[rgba(103,232,249,0.24)] bg-[rgba(103,232,249,0.06)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
              {t("badge2")}
            </span>
            <span className="rounded-md border border-[rgba(167,139,250,0.28)] bg-[rgba(167,139,250,0.08)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-violet)]">
              {t("badge3")}
            </span>
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Caroline Augusto
              </p>

              <h1 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-[0.96] tracking-[0.04em] text-white md:text-6xl lg:text-7xl">
                {t("rolePrefix")}{" "}
                <span className="bg-[linear-gradient(90deg,var(--color-accent-soft),var(--color-violet))] bg-clip-text text-transparent">
                  {t("roleHighlight")}
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-muted)] md:text-xl md:leading-9">
                {t("description")}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex min-h-12 items-center rounded-md border border-[rgba(45,212,191,0.6)] bg-[var(--color-accent)] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--color-deep)] shadow-[0_18px_38px_rgba(45,212,191,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] md:px-8"
                >
                  {t("viewProjects")}
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center rounded-md border border-[rgba(103,232,249,0.22)] bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--color-accent-soft)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(103,232,249,0.5)] hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] md:px-8"
                >
                  {t("contact")}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.82)] text-white shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-warning)]">
                    Mission HUD
                  </p>
                  <span className="h-2 w-20 rounded-full bg-[linear-gradient(90deg,var(--color-accent),var(--color-violet))]" />
                </div>
                <div className="p-5">
                  <div className="space-y-4 font-mono text-sm text-[var(--color-muted)]">
                    <p>
                      <span className="text-[var(--color-accent)]">focus</span>:{" "}
                      <span className="text-white">{t("focusValue")}</span>
                    </p>
                    <p>
                      <span className="text-[var(--color-accent)]">stack</span>: React / Next / Node / SQL
                    </p>
                    <p>
                      <span className="text-[var(--color-accent)]">mode</span>: quest + build + deploy
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex min-h-28 flex-col justify-between rounded-lg border border-[var(--color-line)] bg-white/[0.06] p-5 transition duration-200 hover:-translate-y-1 hover:border-[rgba(103,232,249,0.35)]">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {t("projectsLabel")}
                  </p>
                  <p className="mt-3 text-3xl font-black uppercase text-[var(--color-accent-soft)] md:text-4xl">
                    {projects.length}+
                  </p>
                </div>

                <div className="flex min-h-28 flex-col justify-between rounded-lg border border-[rgba(45,212,191,0.22)] bg-[rgba(45,212,191,0.08)] p-5 transition duration-200 hover:-translate-y-1 hover:border-[rgba(45,212,191,0.5)]">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {t("focusLabel")}
                  </p>
                  <p className="mt-3 text-3xl font-black uppercase leading-none text-[var(--color-accent)] md:text-4xl">
                    {t("focusValue")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillBadges />
      <SkillBars />

      <section className="py-16 md:py-20">
        <div className="container-default">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {t("portfolio")}
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight tracking-[0.04em] text-white md:text-5xl">
                {t("featuredProjects")}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                {t("featuredDescription")}
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex w-fit rounded-md border border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.08)] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--color-accent-soft)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[rgba(45,212,191,0.14)] hover:text-white"
            >
              {t("viewAll")} {"->"}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
