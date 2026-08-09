import type { ReactNode } from "react";
import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { Timeline } from "@/components/Timeline";
import { CtaLink } from "@/components/ui/CtaLink";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterRelatedWriters } from "@/components/writers/WriterRelatedWriters";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import {
  diaryCorpusStatus,
  familyMaintenancePanel,
  futureComparisons,
  genderWithoutEssentialism,
  householdEconomyPanel,
  ichiyoLead,
  ichiyoPrimaryQuestion,
  ichiyoOverview,
  ichiyoRelatedWriters,
  ichiyoResearchQueue,
  ichiyoTimeline,
  lifeInfrastructure,
  primaryConditionLabel,
  provenanceStatus,
  relatedObservations,
  retailPanel,
  sectionLabels,
  timeAllocationPanel,
  unknownRegister,
  visibleInvisible,
  whyIchiyo,
  writingMoneyPanel,
  youngWriterAxes,
} from "@/data/writers/ichiyo-higuchi";
import type { Writer } from "@/lib/types";

function Panel({
  eyebrow,
  title,
  titleJa,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleJa?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-12">
      {eyebrow ? <p className="label">{eyebrow}</p> : null}
      <h2 className="editorial mt-3 text-2xl text-text md:text-3xl">{title}</h2>
      {titleJa ? (
        <p className="jp-serif mt-2 text-base text-text-soft">{titleJa}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function IchiyoObservatory({ writer }: { writer: Writer }) {
  const years = `${writer.birthYear}–${writer.deathYear}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <WriterBreadcrumb name={writer.name} nameJa={writer.nameJa} />

      {/* 01 Writer Header */}
      <header className="mt-8 grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="label">Writer Observatory</p>
          <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
            {writer.name}
          </h1>
          <p className="jp-heading mt-3 text-2xl md:text-3xl">{writer.nameJa}</p>
          <p className="mt-4 text-sm text-text-faint">
            {years} · {writer.primaryCity ?? writer.city}, {writer.country}
          </p>
          <p className="mt-3 inline-flex border border-accent/40 bg-accent/5 px-2.5 py-1 text-xs tracking-wide text-accent">
            Primary condition · {primaryConditionLabel.en} /{" "}
            {primaryConditionLabel.ja}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {writer.themes.map((theme) => (
              <span
                key={theme}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {theme}
              </span>
            ))}
          </div>

          <p className="editorial mt-8 text-xl text-accent md:text-2xl">
            {writer.tagline}
          </p>
          <p className="jp-serif mt-2 text-base text-text-soft">
            {writer.taglineJa}
          </p>
          <p className="mt-3 text-xs text-text-faint">
            Tagline is interpretive copy — not Fact.
          </p>

          <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
            {ichiyoLead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="paper-panel space-y-5 p-6">
          <div>
            <p className="label">Primary question</p>
            <p className="editorial mt-3 text-lg text-text">
              {ichiyoPrimaryQuestion.en}
            </p>
            <p className="jp-serif mt-3 text-sm text-text-soft">
              {ichiyoPrimaryQuestion.ja}
            </p>
          </div>
          <dl className="grid gap-3 border-t border-border-soft pt-4 text-xs text-text-faint">
            <div>
              <dt className="label">Born / Died</dt>
              <dd className="mt-1 text-text-soft">{years} (commonly cited)</dd>
            </div>
            <div>
              <dt className="label">Research status</dt>
              <dd className="mt-1 text-text-soft">
                {writer.observationStatus}
              </dd>
            </div>
            <div>
              <dt className="label">Verification</dt>
              <dd className="mt-1 text-text-soft">
                {writer.verificationStatus}
              </dd>
            </div>
            <div>
              <dt className="label">Indexed entries</dt>
              <dd className="mt-1 text-text-soft">0</dd>
            </div>
          </dl>
        </aside>
      </header>

      <div className="mt-14 space-y-14">
        {/* 02 Why */}
        <Panel title={whyIchiyo.title} titleJa={whyIchiyo.titleJa}>
          <div className="jp-body max-w-2xl space-y-4 text-[0.98rem]">
            {whyIchiyo.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-6 max-w-2xl border-l border-accent pl-4 text-sm text-text-soft">
            {whyIchiyo.caution}
          </p>
        </Panel>

        {/* 03 Diary corpus */}
        <Panel
          eyebrow="03"
          title={diaryCorpusStatus.title}
          titleJa={diaryCorpusStatus.titleJa}
        >
          <p className="inline-flex border border-border px-3 py-1.5 text-xs text-text-faint">
            Status · {diaryCorpusStatus.status} / {diaryCorpusStatus.statusJa}
          </p>
          <ul className="mt-5 max-w-2xl space-y-2 text-sm text-text-soft">
            {diaryCorpusStatus.notes.map((n) => (
              <li key={n}>· {n}</li>
            ))}
          </ul>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {diaryCorpusStatus.meta.map((m) => (
              <div key={m.label} className="border border-border-soft px-4 py-3">
                <dt className="label">{m.label}</dt>
                <dd className="mt-2 text-sm text-text-soft">{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-text-faint">
            Future route candidate: /diaries/{diaryCorpusStatus.futureSlugCandidate}{" "}
            — not created.
          </p>
        </Panel>

        {/* 04 Writing inside household */}
        <Panel
          eyebrow="04"
          title={lifeInfrastructure.title}
          titleJa={lifeInfrastructure.titleJa}
        >
          <div className="paper-panel max-w-xl space-y-4 p-6">
            <p className="editorial text-center text-xl text-accent">
              {lifeInfrastructure.apex.en}
            </p>
            <p className="text-center text-xs text-text-faint">↑</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {lifeInfrastructure.supports.map((s) => (
                <li
                  key={s.en}
                  className="border border-border-soft px-3 py-2 text-sm text-text-soft"
                >
                  {s.en}
                  <span className="mt-0.5 block text-xs text-text-faint">
                    {s.ja}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="editorial mt-6 text-lg text-accent">
            {lifeInfrastructure.thesis.en}
          </p>
          <p className="jp-serif mt-2 text-sm text-text-soft">
            {lifeInfrastructure.thesis.ja}
          </p>
          <CtaLink
            href={lifeInfrastructure.relatedHref}
            variant="text"
            arrow
            className="mt-6"
          >
            Related observation
          </CtaLink>

          <div className="mt-10 space-y-3">
            {ichiyoOverview.layers.map((layer) => (
              <div key={layer.text} className="border border-border-soft px-4 py-3">
                <EpistemicLabel kind={layer.kind} />
                <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
              </div>
            ))}
          </div>
        </Panel>

        {/* 05 Household economy */}
        <Panel
          eyebrow="05"
          title={householdEconomyPanel.title}
          titleJa={householdEconomyPanel.titleJa}
        >
          <p className="text-sm text-text-soft">{householdEconomyPanel.note}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {householdEconomyPanel.candidateCategories.map((c) => (
              <span
                key={c}
                className="border border-border px-2.5 py-1 text-xs text-text-faint"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-faint">
            Indexed MoneyRecords: {householdEconomyPanel.indexedCount}
          </p>
        </Panel>

        {/* 06 Writing / Money */}
        <Panel
          eyebrow="06"
          title={writingMoneyPanel.title}
          titleJa={writingMoneyPanel.titleJa}
        >
          <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {writingMoneyPanel.items.map((item) => (
              <li
                key={item}
                className="border border-border-soft px-3 py-2 text-sm text-text-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-text-faint">{writingMoneyPanel.caution}</p>
        </Panel>

        {/* 07 Family maintenance */}
        <Panel
          eyebrow="07"
          title={familyMaintenancePanel.title}
          titleJa={familyMaintenancePanel.titleJa}
        >
          <div className="flex flex-wrap gap-2">
            {familyMaintenancePanel.categories.map((c) => (
              <span
                key={c}
                className="border border-border px-2.5 py-1 text-xs text-text-faint"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-soft">
            {familyMaintenancePanel.actorRule}
          </p>
          <p className="mt-2 text-xs text-text-faint">
            Indexed MaintenanceEvents: {familyMaintenancePanel.indexedCount}
          </p>
        </Panel>

        {/* 08 Retail */}
        <Panel
          eyebrow="08"
          title={retailPanel.title}
          titleJa={retailPanel.titleJa}
        >
          <p className="text-sm text-text-soft">{retailPanel.note}</p>
          <p className="mt-2 text-xs text-text-faint">
            Indexed RetailRecords: {retailPanel.indexedCount}
          </p>
        </Panel>

        {/* 09–14 */}
        {(
          [
            sectionLabels.housing,
            sectionLabels.food,
            sectionLabels.body,
            sectionLabels.network,
            sectionLabels.visitors,
            sectionLabels.movement,
          ] as const
        ).map((section, i) => (
          <Panel
            key={section.title}
            eyebrow={String(9 + i).padStart(2, "0")}
            title={section.title}
            titleJa={section.titleJa}
          >
            <p className="max-w-2xl text-sm text-text-soft">{section.body}</p>
          </Panel>
        ))}

        <Panel
          eyebrow="Time"
          title={timeAllocationPanel.title}
          titleJa={timeAllocationPanel.titleJa}
        >
          <div className="flex flex-wrap gap-2">
            {timeAllocationPanel.slots.map((s) => (
              <span
                key={s}
                className="border border-border px-2.5 py-1 text-xs text-text-faint"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-soft">{timeAllocationPanel.note}</p>
        </Panel>

        <Panel
          title={youngWriterAxes.title}
          titleJa={youngWriterAxes.titleJa}
        >
          <div className="flex flex-wrap gap-2">
            {youngWriterAxes.axes.map((a) => (
              <span
                key={a}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-soft">{youngWriterAxes.note}</p>
        </Panel>

        <Panel
          title={genderWithoutEssentialism.title}
          titleJa={genderWithoutEssentialism.titleJa}
        >
          <p className="editorial text-lg text-accent">
            {genderWithoutEssentialism.question.en}
          </p>
          <p className="jp-serif mt-2 text-sm text-text-soft">
            {genderWithoutEssentialism.question.ja}
          </p>
          <p className="mt-4 text-sm text-text-faint">
            {genderWithoutEssentialism.avoid}
          </p>
        </Panel>

        {/* 15 Visible */}
        <Panel
          eyebrow="15"
          title={visibleInvisible.title}
          titleJa={visibleInvisible.titleJa}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-border-soft p-5">
              <p className="label">Possibly visible</p>
              <ul className="mt-3 space-y-2 text-sm text-text-soft">
                {visibleInvisible.visibleCandidates.map((v) => (
                  <li key={v}>· {v}</li>
                ))}
              </ul>
            </div>
            <div className="border border-border-soft p-5">
              <p className="label">Often unknown</p>
              <ul className="mt-3 space-y-2 text-sm text-text-soft">
                {visibleInvisible.unknownCandidates.map((v) => (
                  <li key={v}>· {v}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-faint">{visibleInvisible.note}</p>
        </Panel>

        {/* 16 Unknown */}
        <Panel eyebrow="16" title="Unknown Register" titleJa="未索引レジスタ">
          <dl className="grid gap-3 sm:grid-cols-2">
            {unknownRegister.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-3 border border-border-soft px-4 py-3"
              >
                <dt className="text-sm text-text-soft">{row.label}</dt>
                <dd className="shrink-0 text-xs text-text-faint">{row.status}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        {/* 17 Research */}
        <Panel
          eyebrow="17"
          title="Source / Edition Research"
          titleJa="書誌・版研究"
        >
          <p className="text-sm text-text-soft">
            Bibliographic research needed. Research page is not mass-generated
            until a verifiable edition exists.
          </p>
          <p className="mt-2 text-xs text-text-faint">
            Future route (not created): /research/ichiyo-higuchi-bibliography
          </p>
          <div className="mt-6">
            <WriterResearchQueue items={ichiyoResearchQueue} />
          </div>
          <div className="mt-8">
            <Timeline items={ichiyoTimeline} />
          </div>
        </Panel>

        {/* Provenance */}
        <Panel title="Provenance" titleJa="現時点の証跡状況">
          <dl className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {provenanceStatus.map((row) => (
              <div key={row.label} className="border border-border-soft px-4 py-3">
                <dt className="label">{row.label}</dt>
                <dd className="mt-2 text-sm text-text-soft">{row.status}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-text-faint">
            Not indexed ≠ empty life. Zero captures mean research gap, not absence
            of lived days.
          </p>
        </Panel>

        {/* 18 Related observations */}
        <Panel
          eyebrow="18"
          title="Related Observations"
          titleJa="関連する観測"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {relatedObservations.map((obs) => (
              <article key={obs.href} className="paper-panel p-5">
                <h3 className="jp-serif text-lg text-text">{obs.title}</h3>
                <p className="mt-2 text-sm text-text-faint">{obs.note}</p>
                <CtaLink href={obs.href} variant="text" arrow className="mt-4">
                  Read observation
                </CtaLink>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-faint">
            Four Urban Lives remains a four-writer comparison. Ichiyō is not
            inserted into it.
          </p>
        </Panel>

        {/* 19 Future comparisons */}
        <Panel
          eyebrow="19"
          title="Future Comparisons"
          titleJa="将来の比較"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {futureComparisons.map((c) => (
              <article key={c.id} className="border border-border-soft p-5">
                <p className="label">{c.status}</p>
                <h3 className="editorial mt-3 text-xl text-text">{c.title}</h3>
                <p className="jp-serif mt-1 text-sm text-accent">{c.titleJa}</p>
                {"altTitle" in c && c.altTitle ? (
                  <p className="mt-2 text-xs text-text-faint">{c.altTitle}</p>
                ) : null}
                <p className="mt-3 text-sm text-text-soft">{c.note}</p>
              </article>
            ))}
          </div>
        </Panel>

        <section className="border-t border-border pt-12">
          <h2 className="editorial text-2xl text-text">Related writers</h2>
          <div className="mt-6">
            <WriterRelatedWriters items={ichiyoRelatedWriters} />
          </div>
        </section>

        <section className="border-t border-border pt-10">
          <CtaLink href="/writers" variant="secondary" arrow>
            All writers
          </CtaLink>
          <Link
            href="/compare/four-urban-lives"
            className="focus-ring cta cta-ghost ml-3"
          >
            Four Urban Lives (unchanged)
          </Link>
        </section>
      </div>
    </div>
  );
}
