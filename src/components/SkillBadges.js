import { useTranslations } from "next-intl";

const skills = [
  "PostgreSQL / SQL",
  "JavaScript",
  "Node.js",
  "React / Next.js",
  "HTML / CSS",
  "APIs REST",
];

export default function SkillBadges() {
  const t = useTranslations("Skills");

  return (
    <section className="py-16 md:py-20">
      <div className="container-default">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-tight tracking-[0.04em] text-white md:text-5xl">
              {t("title")}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`rounded-lg border px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] shadow-sm transition duration-200 hover:-translate-y-1 md:text-base ${
                index % 3 === 0
                  ? "border-[rgba(45,212,191,0.28)] bg-[rgba(45,212,191,0.1)] text-[var(--color-accent-soft)]"
                  : index % 3 === 1
                    ? "border-[rgba(103,232,249,0.2)] bg-white/[0.06] text-white"
                    : "border-[rgba(167,139,250,0.24)] bg-[rgba(167,139,250,0.08)] text-[var(--color-violet)]"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
