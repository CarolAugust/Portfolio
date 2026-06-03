import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.6),transparent)]" />
      <div className="container-default">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {t("eyebrow")}
        </p>

        <h1 className="mt-3 max-w-4xl text-4xl font-black uppercase leading-tight tracking-[0.04em] text-white md:text-6xl">
          {t("title")}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--color-muted)] md:text-xl">
          {t("description")}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
