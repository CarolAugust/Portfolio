import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-line)] py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,212,191,0.1),transparent_34%),linear-gradient(300deg,rgba(167,139,250,0.1),transparent_36%)]" />
        <div className="container-default relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {t("eyebrow")}
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[0.04em] md:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--color-muted)]">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-default">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.86)] p-6 shadow-[var(--shadow-soft)] md:p-8">
              <h2 className="text-3xl font-black uppercase tracking-[0.04em] text-white">
                {t("infoTitle")}
              </h2>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4 rounded-lg border border-[var(--color-line)] bg-white/[0.04] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.1)] text-xs font-black text-[var(--color-accent-soft)]">
                    MAIL
                  </div>
                  <Link
                    href="mailto:augustocarol89@gmail.com"
                    className="break-all text-base text-[var(--color-muted)] transition hover:text-white md:text-lg"
                  >
                    augustocarol89@gmail.com
                  </Link>
                </div>

                <div className="flex items-center gap-4 rounded-lg border border-[var(--color-line)] bg-white/[0.04] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[rgba(103,232,249,0.25)] bg-[rgba(103,232,249,0.08)] text-xs font-black text-[var(--color-accent-soft)]">
                    GH
                  </div>
                  <Link
                    href="https://github.com/CarolAugust"
                    target="_blank"
                    className="break-all text-base text-[var(--color-muted)] transition hover:text-white md:text-lg"
                  >
                    github.com/carol-augusto
                  </Link>
                </div>

                <div className="flex items-center gap-4 rounded-lg border border-[var(--color-line)] bg-white/[0.04] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[rgba(167,139,250,0.28)] bg-[rgba(167,139,250,0.1)] text-xs font-black text-[var(--color-violet)]">
                    IN
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/carolineaugusto/"
                    target="_blank"
                    className="break-all text-base text-[var(--color-muted)] transition hover:text-white md:text-lg"
                  >
                    linkedin.com/in/carolineaugusto
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border border-[var(--color-line)] bg-white/[0.04] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[rgba(34,197,94,0.28)] bg-[rgba(34,197,94,0.1)] text-xs font-black text-green-400">
                  WA
                </div>

                <Link
                  href="https://wa.me/41988320056?text=Ol%C3%A1%20Caroline%2C%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA%20pelo%20seu%20portf%C3%B3lio."
                  target="_blank"
                  className="break-all text-base text-[var(--color-muted)] transition hover:text-white md:text-lg"
                >
                  whatsapp
                </Link>
              </div>



              <div className="mt-8 rounded-lg border border-[rgba(45,212,191,0.22)] bg-[rgba(45,212,191,0.08)] p-5">
                <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg">
                  <strong className="text-white">{t("statusLabel")}</strong>{" "}
                  {t("statusValue")}
                  <br />
                  {t("statusNote")}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white/[0.04] p-6 md:p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    {t("name")} <span className="text-[var(--color-warning)]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t("namePlaceholder")}
                    className="w-full rounded-lg border border-[var(--color-line)] bg-[rgba(5,7,13,0.62)] px-5 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-accent)] focus:bg-[rgba(5,7,13,0.86)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    {t("email")} <span className="text-[var(--color-warning)]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-[var(--color-line)] bg-[rgba(5,7,13,0.62)] px-5 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-accent)] focus:bg-[rgba(5,7,13,0.86)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    {t("message")} <span className="text-[var(--color-warning)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder={t("messagePlaceholder")}
                    className="w-full resize-none rounded-lg border border-[var(--color-line)] bg-[rgba(5,7,13,0.62)] px-5 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-accent)] focus:bg-[rgba(5,7,13,0.86)]"
                  />
                </div>

                <Link
                  href="mailto:augustocarol89@gmail.com?subject=Contato%20pelo%20portfolio"
                  className="inline-flex w-full items-center justify-center rounded-md border border-[rgba(45,212,191,0.5)] bg-[var(--color-accent)] px-8 py-4 text-base font-black uppercase tracking-[0.12em] text-[var(--color-deep)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] md:text-lg"
                >
                  {t("button")}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
