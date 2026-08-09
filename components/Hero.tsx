import { CtaLink } from "@/components/ui/CtaLink";
import {
  CORE_SENTENCE,
  SITE_EYEBROW,
  SITE_NAME,
  SITE_SUBTITLE,
  SITE_SUBTITLE_JA,
} from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-0 h-px w-full bg-border" />
        <div className="absolute bottom-16 left-[8%] h-40 w-px bg-border-soft" />
        <div className="absolute right-[12%] top-24 h-px w-32 bg-border-soft" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="fade-rise max-w-3xl space-y-8">
          <p className="label">{SITE_EYEBROW}</p>

          <div className="space-y-3">
            <h1 className="editorial text-4xl leading-[1.12] text-text md:text-6xl">
              {SITE_NAME}
            </h1>
            <p className="editorial text-lg text-accent md:text-xl">
              {SITE_SUBTITLE}
            </p>
            <p className="jp-serif text-base text-text-soft md:text-lg">
              {SITE_SUBTITLE_JA}
            </p>
          </div>

          <div className="max-w-2xl space-y-4 border-l border-border pl-5">
            <p className="prose-quiet text-base leading-relaxed md:text-[1.02rem]">
              作家の日記には、本人が残そうと意図しなかった世界が写り込んでいる。
              通った店、会った人、食べたもの、病気、仕事、街、メディア。
              時間が経つと、それらの一部は消え、日記だけが残る。
              Diary Observatoryは、日記に記録された一日を現在と照合し、
              その世界がどれほど残っているかを観測する。
            </p>
          </div>

          <blockquote className="max-w-xl space-y-2 pt-1">
            <p className="editorial text-lg text-accent md:text-xl">
              {CORE_SENTENCE.en}
            </p>
            <p className="jp-serif text-sm text-text-faint">{CORE_SENTENCE.ja}</p>
          </blockquote>

          <div className="flex flex-wrap gap-3 pt-2">
            <CtaLink
              href="/diaries/dancho-tei-nichijo"
              variant="primary"
              size="md"
            >
              Explore the diaries
            </CtaLink>
            <CtaLink
              href="/observations/heisei-dancho-tei-nichijo"
              variant="secondary"
              size="md"
            >
              View the first observation
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
