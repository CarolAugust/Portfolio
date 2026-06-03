import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectCard({ project }) {
  const locale = useLocale();
  const t = useTranslations("Projects");
  const mediaStyle = project.videoView?.card ?? project.imageView?.card;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(103,232,249,0.34)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
      <div className="relative h-56 w-full overflow-hidden bg-[var(--color-deep)]">
        {project.video ? (
          <>
            <video
              src={project.video}
              aria-label={`${t("previewAlt")} ${project.title[locale]}`}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              style={mediaStyle}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,7,13,0.92)] via-[rgba(5,7,13,0.1)] to-transparent" />
          </>
        ) : project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${t("previewAlt")} ${project.title[locale]}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
              style={mediaStyle}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,7,13,0.9)] via-[rgba(5,7,13,0.18)] to-transparent" />
          </>
        ) : (
          <div className="flex h-full items-end bg-[linear-gradient(135deg,#05070d_0%,#10243a_52%,#2dd4bf_100%)] p-6 text-white">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-warning)]">
                {t("projectInProgress")}
              </p>
              <h4 className="mt-3 text-3xl font-black uppercase leading-none text-white">
                {project.title[locale]}
              </h4>
            </div>
          </div>
        )}

        <div className="absolute left-5 top-5 rounded-md border border-[rgba(103,232,249,0.22)] bg-[rgba(5,7,13,0.72)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[var(--color-accent-soft)] backdrop-blur">
          {project.stack[0]}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item, index) => (
            <span
              key={item}
              className={`rounded-md border px-3 py-1 text-xs font-black uppercase tracking-wide ${
                index === 0
                  ? "border-[rgba(45,212,191,0.28)] bg-[rgba(45,212,191,0.1)] text-[var(--color-accent-soft)]"
                  : "border-[var(--color-line)] bg-white/[0.04] text-[var(--color-muted)]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-black uppercase leading-tight tracking-[0.03em] text-white md:text-3xl">
          {project.title[locale]}
        </h3>

        <p className="mt-4 flex-1 text-base leading-8 text-[var(--color-muted)] md:text-lg">
          {project.shortDescription[locale]}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex w-fit items-center rounded-md border border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.08)] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--color-accent-soft)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[rgba(45,212,191,0.14)] hover:text-white"
        >
          {t("viewProject")} {"->"}
        </Link>
      </div>
    </article>
  );
}
