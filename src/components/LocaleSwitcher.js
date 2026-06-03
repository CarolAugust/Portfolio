"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const locales = [
  {
    code: "pt",
    shortLabel: "PT",
    name: "Português",
    flag: "\uD83C\uDDE7\uD83C\uDDF7",
  },
  {
    code: "en",
    shortLabel: "EN",
    name: "English",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
  },
];

function FlagBadge({ flag, active }) {
  return (
    <span
      className={`hidden h-6 w-6 items-center justify-center rounded-full text-base leading-none sm:flex ${
        active ? "bg-white/12" : "bg-[rgba(148,163,184,0.12)]"
      }`}
      aria-hidden="true"
    >
      {flag}
    </span>
  );
}

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const activeLocale = locales.find((item) => item.code === locale) ?? locales[0];

  return (
    <>
      <div className="flex items-center gap-1 rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.9)] p-1 shadow-sm md:hidden">
        {locales.map((item) => {
          const isActive = item.code === locale;

          return (
            <Link
              key={item.code}
              href={pathname}
              locale={item.code}
              aria-label={`Switch language to ${item.name}`}
              className={`flex min-w-[38px] items-center justify-center gap-1 rounded-md px-1.5 py-2 text-xs font-bold uppercase tracking-[0.06em] transition sm:min-w-[48px] ${
                isActive
                  ? "bg-white text-[var(--color-deep)] shadow-lg shadow-slate-950/20"
                  : "text-[var(--color-muted)] hover:bg-white/8 hover:text-white"
              }`}
            >
              <FlagBadge flag={item.flag} active={isActive} />
              <span>{item.shortLabel}</span>
            </Link>
          );
        })}
      </div>

      <div className="hidden items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[rgba(13,19,32,0.78)] px-2 py-2 shadow-sm md:flex">
        <div className="flex items-center gap-3 rounded-md bg-white/5 px-3 py-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl leading-none shadow-sm">
            {activeLocale.flag}
          </span>
          <div className="leading-none">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Language
            </span>
            <span className="block pt-1 text-xs font-semibold text-white">
              {activeLocale.name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-md bg-white/5 p-1">
          {locales.map((item) => {
            const isActive = item.code === locale;

            return (
              <Link
                key={item.code}
                href={pathname}
                locale={item.code}
                aria-label={`Switch language to ${item.name}`}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${
                  isActive
                    ? "bg-white text-[var(--color-deep)] shadow-lg shadow-slate-950/20"
                    : "text-[var(--color-muted)] hover:bg-white/8 hover:text-white"
                }`}
              >
                <FlagBadge flag={item.flag} active={isActive} />
                <span>{item.shortLabel}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
