import type { ReactNode } from "react";
import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { Timeline } from "@/components/Timeline";
import { CtaLink } from "@/components/ui/CtaLink";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterRelatedWriters } from "@/components/writers/WriterRelatedWriters";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import {
  bodyTime,
  comingObservation,
  commuteBoundary,
  diaryCorpusStatus,
  diaryVsLetter,
  futureComparisons,
  householdWriting,
  kafkaLead,
  kafkaOverviewLayers,
  kafkaPrimaryQuestion,
  kafkaRelatedWriters,
  kafkaResearchQueue,
  kafkaThesis,
  kafkaTimeControlProfile,
  kafkaTimeline,
  lettersCorpusStatus,
  nightWriting,
  officeNotOutside,
  paidWorkVsWriting,
  primaryConditionLabel,
  provenanceStatus,
  relatedObservations,
  roomWriting,
  salaryTimeTrade,
  sleepObservatory,
  timeLayers,
  timeOwnershipConcept,
  visibleRegister,
  whyKafka,
  writingSystemsConcept,
  unknownRegister,
} from "@/data/writers/franz-kafka";
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

export function KafkaObservatory({ writer }: { writer: Writer }) {
  const years = `${writer.birthYear}–${writer.deathYear}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <WriterBreadcrumb name={writer.name} nameJa={writer.nameJa} />

      {/* 01 Header */}
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
            {kafkaLead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="editorial mt-8 text-lg text-accent">{kafkaThesis.en}</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">{kafkaThesis.ja}</p>
        </div>

        <aside className="paper-panel space-y-5 p-6">
          <div>
            <p className="label">Primary question</p>
            <p className="editorial mt-3 text-lg text-text">
              {kafkaPrimaryQuestion.en}
            </p>
            <p className="jp-serif mt-3 text-sm text-text-soft">
              {kafkaPrimaryQuestion.ja}
            </p>
          </div>
          <dl className="grid gap-3 border-t border-border-soft pt-4 text-xs text-text-faint">
            <div>
              <dt className="label">Born / Died</dt>
              <dd className="mt-1 text-text-soft">{years} (commonly cited)</dd>
            </div>
            <div>
              <dt className="label">Research status</dt>
              <dd className="mt-1 text-text-soft">{writer.observationStatus}</dd>
            </div>
            <div>
              <dt className="label">Verification</dt>
              <dd className="mt-1 text-text-soft">{writer.verificationStatus}</dd>
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
        <Panel title={whyKafka.title} titleJa={whyKafka.titleJa}>
          <div className="jp-body max-w-2xl space-y-4 text-[0.98rem]">
            {whyKafka.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="editorial mt-6 text-xl text-accent">{whyKafka.concept.en}</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">{whyKafka.concept.ja}</p>
          <p className="mt-6 max-w-2xl border-l border-accent pl-4 text-sm text-text-soft">
            {whyKafka.caution}
          </p>
        </Panel>

        {/* 03 Time */}
        <Panel
          eyebrow="03"
          title="Time as Primary Condition"
          titleJa="中心軸としての時間"
        >
          <p className="editorial text-lg text-accent">
            {timeOwnershipConcept.question.en}
          </p>
          <p className="jp-serif mt-2 text-sm text-text-soft">
            {timeOwnershipConcept.question.ja}
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {timeLayers.map((layer) => (
              <li
                key={layer.en}
                className="border border-border-soft px-3 py-2 text-sm text-text-soft"
              >
                {layer.en}
                <span className="mt-0.5 block text-xs text-text-faint">
                  {layer.ja}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h3 className="editorial text-xl text-text">
              {timeOwnershipConcept.title}
            </h3>
            <p className="jp-serif mt-1 text-sm text-text-faint">
              {timeOwnershipConcept.titleJa}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {timeOwnershipConcept.dimensions.map((d) => (
                <span
                  key={d.en}
                  className="border border-border px-2.5 py-1 text-xs text-text-faint"
                >
                  {d.en} / {d.ja}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-text-soft">{timeOwnershipConcept.note}</p>
            <p className="mt-3 text-xs text-text-faint">
              Indexed TimeOwnershipRecords: 0
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {kafkaOverviewLayers.map((layer) => (
              <div key={layer.text} className="border border-border-soft px-4 py-3">
                <EpistemicLabel kind={layer.kind} />
                <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
              </div>
            ))}
          </div>
        </Panel>

        {/* 04 Paid work */}
        <Panel eyebrow="04" title="Paid Work" titleJa="有償労働">
          <h3 className="editorial text-xl text-text">{officeNotOutside.title}</h3>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            {officeNotOutside.titleJa}
          </p>
          <div className="jp-body mt-4 max-w-2xl space-y-3 text-[0.98rem]">
            {officeNotOutside.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-faint">{officeNotOutside.caution}</p>
          <p className="mt-4 text-xs text-text-faint">
            Indexed WorkRecords: 0 · employer / title / hours research needed
          </p>
        </Panel>

        {/* 05–06 Writing / relation */}
        <Panel eyebrow="05–06" title={paidWorkVsWriting.title} titleJa={paidWorkVsWriting.titleJa}>
          <div className="flex flex-wrap gap-2">
            {paidWorkVsWriting.axes.map((a) => (
              <span
                key={a}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-faint">{paidWorkVsWriting.avoid}</p>
          <p className="mt-3 text-xs text-text-faint">
            WorkWritingRelation records: 0 · no unstated causation
          </p>
        </Panel>

        {/* 07 Night */}
        <Panel eyebrow="07" title={nightWriting.title} titleJa={nightWriting.titleJa}>
          <p className="max-w-2xl text-sm text-text-soft">{nightWriting.note}</p>
          <p className="mt-3 text-xs text-text-faint">Indexed WritingSessions: 0</p>
        </Panel>

        {/* 08 Sleep */}
        <Panel eyebrow="08" title={sleepObservatory.title} titleJa={sleepObservatory.titleJa}>
          <ol className="max-w-md space-y-2 border border-border-soft p-5 text-sm text-text-soft">
            {sleepObservatory.cycle.map((step, i) => (
              <li key={step}>
                {step}
                {i < sleepObservatory.cycle.length - 1 ? (
                  <span className="mt-1 block text-xs text-text-faint">↓</span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-text-soft">{sleepObservatory.cycleNote}</p>
          <p className="mt-2 text-sm text-text-faint">{sleepObservatory.medicalCaution}</p>
          <p className="mt-3 text-xs text-text-faint">Indexed SleepRecords: 0</p>
        </Panel>

        {/* 09 Body */}
        <Panel eyebrow="09" title={bodyTime.title} titleJa={bodyTime.titleJa}>
          <p className="editorial text-lg text-accent">{bodyTime.concept.en}</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">{bodyTime.concept.ja}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {bodyTime.observableCandidates.map((c) => (
              <span
                key={c}
                className="border border-border px-2.5 py-1 text-xs text-text-faint"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-8 border border-border-soft p-5">
            <p className="label">{bodyTime.institutionModel.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-text-soft">
              {bodyTime.institutionModel.lines.map((line) => (
                <li key={line}>· {line}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-text-faint">
              {bodyTime.institutionModel.note}
            </p>
          </div>
        </Panel>

        {/* 10 Commute */}
        <Panel eyebrow="10" title="Commute" titleJa="通勤・移動">
          <h3 className="editorial text-xl text-text">{commuteBoundary.title}</h3>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            {commuteBoundary.titleJa}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-text-soft">{commuteBoundary.body}</p>
          <p className="mt-3 text-sm text-text-faint">{commuteBoundary.note}</p>
          <p className="mt-3 text-xs text-text-faint">Indexed MovementRecords: 0</p>
        </Panel>

        {/* 11 Household */}
        <Panel eyebrow="11" title={householdWriting.title} titleJa={householdWriting.titleJa}>
          <div className="flex flex-wrap gap-2">
            {householdWriting.observe.map((o) => (
              <span
                key={o}
                className="border border-border px-2.5 py-1 text-xs text-text-faint"
              >
                {o}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-soft">{householdWriting.avoid}</p>
        </Panel>

        {/* 12 Room */}
        <Panel eyebrow="12" title={roomWriting.title} titleJa={roomWriting.titleJa}>
          <p className="editorial text-lg text-accent">{roomWriting.question}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {roomWriting.placeTypes.map((p) => (
              <span
                key={p}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-faint">Indexed WritingPlaceRecords: 0</p>
        </Panel>

        {/* 13 Interruption */}
        <Panel eyebrow="13" title="Interruption" titleJa="中断">
          <p className="max-w-2xl text-sm text-text-soft">
            「中断された」と本文に根拠がある場合のみ Fact 化する。Indexed
            InterruptionRecords: 0
          </p>
        </Panel>

        {/* 14 Correspondence */}
        <Panel eyebrow="14" title="Correspondence" titleJa="手紙">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-border-soft p-5">
              <p className="label">Diary</p>
              <ul className="mt-3 space-y-2 text-sm text-text-soft">
                {diaryVsLetter.diary.map((row) => (
                  <li key={row.label}>
                    {row.label}: {row.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border-soft p-5">
              <p className="label">Letter</p>
              <ul className="mt-3 space-y-2 text-sm text-text-soft">
                {diaryVsLetter.letter.map((row) => (
                  <li key={row.label}>
                    {row.label}: {row.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-faint">{diaryVsLetter.note}</p>
          <p className="mt-2 text-xs text-text-faint">
            Indexed CorrespondenceRecords: 0 · Letter Time = TimeBlock correspondence
          </p>
        </Panel>

        {/* 15 Writing systems */}
        <Panel
          eyebrow="15"
          title={writingSystemsConcept.title}
          titleJa={writingSystemsConcept.titleJa}
        >
          <p className="editorial text-lg text-accent">
            {writingSystemsConcept.thesis.en}
          </p>
          <p className="jp-serif mt-2 text-sm text-text-soft">
            {writingSystemsConcept.thesis.ja}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {writingSystemsConcept.comparison.map((c) => (
              <span
                key={c}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-faint">
            WritingSystemProfiles: 0
          </p>
        </Panel>

        {/* 16 Money */}
        <Panel eyebrow="16" title="Money" titleJa="金銭">
          <p className="editorial text-lg text-accent">{salaryTimeTrade.concept.en}</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">
            {salaryTimeTrade.concept.ja}
          </p>
          <p className="mt-4 text-sm text-text-faint">{salaryTimeTrade.note}</p>
          <p className="mt-2 text-xs text-text-faint">Indexed MoneyRecords: 0</p>
        </Panel>

        {/* 17 Diary corpus */}
        <Panel
          eyebrow="17"
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
          <dl className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {diaryCorpusStatus.meta.map((m) => (
              <div key={m.label} className="border border-border-soft px-4 py-3">
                <dt className="label">{m.label}</dt>
                <dd className="mt-2 text-sm text-text-soft">{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-text-faint">
            Future route candidate: /diaries/{diaryCorpusStatus.futureSlugCandidate} —
            not created.
          </p>
        </Panel>

        {/* 18 Letters */}
        <Panel
          eyebrow="18"
          title={lettersCorpusStatus.title}
          titleJa={lettersCorpusStatus.titleJa}
        >
          <p className="inline-flex border border-border px-3 py-1.5 text-xs text-text-faint">
            Status · {lettersCorpusStatus.status}
          </p>
          <ul className="mt-5 max-w-2xl space-y-2 text-sm text-text-soft">
            {lettersCorpusStatus.notes.map((n) => (
              <li key={n}>· {n}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-text-faint">
            Future route candidate: {lettersCorpusStatus.futureRouteCandidate} — not
            created.
          </p>
        </Panel>

        {/* 19 Visible */}
        <Panel
          eyebrow="19"
          title="What the Records Make Visible"
          titleJa="記録が見せうること"
        >
          <dl className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {visibleRegister.map((row) => (
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

        {/* 20 Unknown */}
        <Panel eyebrow="20" title="What Remains Unknown" titleJa="未索引レジスタ">
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

        {/* Provenance + TimeControl */}
        <Panel title="Provenance / Time Control" titleJa="証跡と時間支配プロファイル">
          <dl className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {provenanceStatus.map((row) => (
              <div key={row.label} className="border border-border-soft px-4 py-3">
                <dt className="label">{row.label}</dt>
                <dd className="mt-2 text-sm text-text-soft">{row.status}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 border border-border-soft p-5">
            <p className="label">TimeControlProfile</p>
            <p className="mt-3 text-sm text-text-soft">
              All control fields remain <span className="text-text">unknown</span>{" "}
              until entry evidence is indexed.
            </p>
            <p className="mt-2 text-xs text-text-faint">
              {kafkaTimeControlProfile.evidenceBasis}
            </p>
          </div>
        </Panel>

        {/* 21 Research */}
        <Panel eyebrow="21" title="Research Queue" titleJa="調査キュー">
          <Timeline items={kafkaTimeline} />
          <div className="mt-8">
            <WriterResearchQueue items={kafkaResearchQueue} />
          </div>
        </Panel>

        {/* Related observations + coming */}
        <Panel title="Related Observations" titleJa="関連する観測">
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
          <div className="mt-6 border border-dashed border-border px-5 py-5">
            <p className="label">{comingObservation.status}</p>
            <h3 className="editorial mt-3 text-xl text-text">
              {comingObservation.titleEn}
            </h3>
            <p className="jp-serif mt-1 text-base text-accent">
              {comingObservation.title}
            </p>
            <p className="mt-3 text-sm text-text-soft">{comingObservation.subtitle}</p>
            {"href" in comingObservation && comingObservation.href ? (
              <CtaLink
                href={comingObservation.href}
                variant="text"
                arrow
                className="mt-4"
              >
                Read observation
              </CtaLink>
            ) : null}
          </div>
        </Panel>

        {/* 22–23 Related / Future */}
        <section className="border-t border-border pt-12">
          <h2 className="editorial text-2xl text-text">Related writers</h2>
          <div className="mt-6">
            <WriterRelatedWriters items={kafkaRelatedWriters} />
          </div>
        </section>

        <Panel eyebrow="23" title="Future Comparisons" titleJa="将来の比較">
          <div className="grid gap-4 md:grid-cols-3">
            {futureComparisons.map((c) => (
              <article key={c.id} className="border border-border-soft p-5">
                <p className="label">{c.status}</p>
                <h3 className="editorial mt-3 text-xl text-text">{c.title}</h3>
                <p className="jp-serif mt-1 text-sm text-accent">{c.titleJa}</p>
                <p className="mt-3 text-sm text-text-soft">{c.note}</p>
              </article>
            ))}
          </div>
        </Panel>

        <section className="border-t border-border pt-10">
          <CtaLink href="/writers" variant="secondary" arrow>
            All writers
          </CtaLink>
          <Link href="/compare/four-urban-lives" className="focus-ring cta cta-ghost ml-3">
            Four Urban Lives (unchanged)
          </Link>
        </section>
      </div>
    </div>
  );
}
