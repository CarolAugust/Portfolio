import { useTranslations } from "next-intl";

const skillLevels = [
  { name: "PostgreSQL / SQL", level: "65%" },
  { name: "JavaScript", level: "60%" },
  { name: "Node.js", level: "50%" },
  { name: "React / Next.js", level: "50%" },
  { name: "HTML / CSS", level: "80%" },
  { name: "TypeScript", level: "60%" },
];

export default function SkillBars() {
  const t = useTranslations("Skills");

  return (
    <section className="pb-12 md:pb-16">
      <div className="container-default">
        <div className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[var(--shadow-soft)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Skill Tree
              </p>
              <h3 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[0.04em] text-white md:text-4xl">
                XP in progress, build in evolution.
              </h3>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                {t("footnote")}
              </p>
            </div>

            <div className="space-y-7">
              {skillLevels.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-sm font-black uppercase tracking-[0.08em] text-white md:text-lg">
                      {skill.name}
                    </span>
                    <span className="rounded-md border border-[var(--color-line)] bg-white/[0.05] px-3 py-1 text-sm font-bold text-[var(--color-accent-soft)]">
                      {skill.level}
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-white/[0.06]">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-soft)] to-[var(--color-violet)] shadow-[0_0_18px_rgba(45,212,191,0.2)]"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
