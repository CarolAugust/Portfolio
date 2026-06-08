import { projects } from "@/data/projects";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProjectDetails" });

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const mediaStyle = project.videoView?.detail ?? project.imageView?.detail;
  const projectImages = project.images ?? (project.image ? [{ src: project.image }] : []);

  return (
    <section className="py-16 md:py-24">
      <div className="container-default max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {t("eyebrow")}
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-[0.04em] text-white md:text-6xl">
          {project.title[locale]}
        </h1>

        <p className="mt-6 text-lg leading-9 text-[var(--color-muted)]">
          {project.description[locale]}
        </p>

        {project.video ? (
          <div className="mt-10 overflow-hidden rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] shadow-[var(--shadow-soft)]">
            <div className="aspect-[16/9] w-full bg-[var(--color-deep)]">
              <video
                src={project.video}
                aria-label={`${t("eyebrow")} ${project.title[locale]}`}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                style={mediaStyle}
              />
            </div>
          </div>
        ) : projectImages.length ? (
          <div className="mt-10 grid gap-4">
            {projectImages.map((image, index) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[16/9] w-full bg-[var(--color-deep)]">
                  <Image
                    src={image.src}
                    alt={image.alt?.[locale] ?? `${t("eyebrow")} ${project.title[locale]}`}
                    fill
                    priority={index === 0}
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-contain"
                    style={index === 0 ? mediaStyle : undefined}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-[var(--color-line)] bg-white/[0.06] px-4 py-2 text-sm font-semibold text-[var(--color-accent-soft)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-8">
          <section className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] md:p-8">
            <h2 className="text-2xl font-black uppercase tracking-[0.03em] text-white">{t("highlights")}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-muted)]">
              {project.highlights[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] md:p-8">
            <h2 className="text-2xl font-black uppercase tracking-[0.03em] text-white">{t("challenges")}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-muted)]">
              {project.challenges[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] md:p-8">
            <h2 className="text-2xl font-black uppercase tracking-[0.03em] text-white">{t("learnings")}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-muted)]">
              {project.learnings[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] md:p-8">
            <h2 className="text-2xl font-black uppercase tracking-[0.03em] text-white">{t("nextSteps")}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-muted)]">
              {project.nextSteps[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
