import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher, useI18n } from "@/i18n";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  KeyRound,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const featureIcons = [Network, KeyRound, BarChart3] as const;
const featureKeys = ["routing", "keys", "observability"] as const;
const trustItems = [
  { id: "openaiCompatible", label: "welcome.trust.openaiCompatible" },
  { id: "security", label: "welcome.trust.security" },
  { id: "visibility", label: "welcome.trust.visibility" },
] as const;
const previewItems = [
  { id: "model", label: "welcome.preview.modelLabel", value: "welcome.preview.modelValue" },
  { id: "tokens", label: "welcome.preview.tokensLabel", value: "welcome.preview.tokensValue" },
  { id: "status", label: "welcome.preview.statusLabel", value: "welcome.preview.statusValue" },
] as const;

export default function WelcomePage() {
  const { t } = useI18n();

  return (
    <div className="min-h-svh overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(14,165,233,0.22),transparent_25%),radial-gradient(circle_at_84%_18%,rgba(99,102,241,0.19),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#020617_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[56rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={t("welcome.brandAria")}>
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 shadow-lg shadow-cyan-950/50">
            <Network className="size-5 text-slate-950" strokeWidth={2.4} />
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight text-white">BetterAPI</span>
            <span className="block text-xs text-slate-400">{t("welcome.brandTagline")}</span>
          </span>
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button asChild variant="ghost" className="hidden text-slate-200 hover:bg-white/10 hover:text-white sm:inline-flex">
            <Link to="/login">{t("welcome.nav.login")}</Link>
          </Button>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-200">
            <Link to="/register">{t("welcome.nav.start")}</Link>
          </Button>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:pb-24">
        <section className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm text-cyan-100">
              <Zap className="size-4" />
              <span>{t("welcome.eyebrow")}</span>
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("welcome.hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              {t("welcome.hero.description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <Link to="/register">
                  {t("welcome.hero.primaryCta")}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-600 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link to="/login">{t("welcome.hero.secondaryCta")}</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-cyan-300" />
                  <span>{t(item.label)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/35 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-300" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Code2 className="size-3.5" />
                  <span>{t("welcome.preview.title")}</span>
                </div>
              </div>
              <div className="space-y-5 p-5 sm:p-7">
                <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-200">{t("welcome.preview.endpointLabel")}</p>
                  {/* eslint-disable-next-line ferrogate/no-untranslated-literal -- API path is protocol syntax. */}
                  <p className="mt-2 font-mono text-sm text-white">POST /v1/chat/completions</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-400">{t("welcome.preview.routingLabel")}</p>
                    <p className="mt-2 text-sm font-medium text-white">{t("welcome.preview.routingValue")}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-400">{t("welcome.preview.accessLabel")}</p>
                    <p className="mt-2 text-sm font-medium text-white">{t("welcome.preview.accessValue")}</p>
                  </div>
                </div>
                <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  {previewItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{t(item.label)}</span>
                      <span className="font-medium text-slate-100">{t(item.value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-12 sm:mt-28 sm:pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-cyan-200">{t("welcome.features.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("welcome.features.title")}</h2>
            <p className="mt-4 text-base leading-7 text-slate-400">{t("welcome.features.description")}</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {featureKeys.map((key, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                  <span className="grid size-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-medium text-white">{t(`welcome.features.${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{t(`welcome.features.${key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16 flex flex-col justify-between gap-6 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 to-blue-500/10 px-6 py-7 sm:mt-20 sm:flex-row sm:items-center sm:px-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-100"><ShieldCheck className="size-5" /><span className="font-medium">{t("welcome.closing.title")}</span></div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{t("welcome.closing.description")}</p>
          </div>
          <Button asChild className="shrink-0 bg-white text-slate-950 hover:bg-slate-200">
            <Link to="/register">{t("welcome.closing.cta")}</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
