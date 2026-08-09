import type { ReactNode } from "react";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { Timeline } from "@/components/Timeline";
import { CtaLink } from "@/components/ui/CtaLink";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterRelatedWriters } from "@/components/writers/WriterRelatedWriters";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import {
  audienceLoop,
  bodyNote,
  diaryCorpusStatus,
  futureComparisons,
  householdObserve,
  networkAsInfrastructure,
  primaryConditionLabel,
  provenanceStatus,
  publishingIsLabor,
  publishingLayers,
  readingAsWork,
  relatedObservations,
  visibleRegister,
  unknownRegister,
  warContextNote,
  whyWoolf,
  woolfLead,
  woolfOverviewLayers,
  woolfPrimaryQuestion,
  woolfRelatedWriters,
  woolfResearchQueue,
  woolfThesis,
  woolfTimeline,
  writingPublishingSplit,
} from "@/data/writers/virginia-woolf";
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

export function WoolfObservatory({ writer }: { writer: Writer }) {
  const years = `${writer.birthYear}–${writer.deathYear}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <WriterBreadcrumb name={writer.name} nameJa={writer.nameJa} />

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
            Tagline and lead are interpretive copy — not Fact.
          </p>

          <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
            {woolfLead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="editorial mt-8 text-lg text-accent">{woolfThesis.en}</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">{woolfThesis.ja}</p>
        </div>

        <aside className="paper-panel space-y-5 p-6">
          <div>
            <p className="label">Primary question</p>
            <p className="editorial mt-3 text-lg text-text">
              {woolfPrimaryQuestion.en}
            </p>
            <p className="jp-serif mt-3 text-sm text-text-soft">
              {woolfPrimaryQuestion.ja}
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
            <div>
              <dt className="label">Page completeness</dt>
              <dd className="mt-1 text-text-soft">
                Framework available · research incomplete
              </dd>
            </div>
          </dl>
        </aside>
      </header>

      <div className="mt-14 space-y-14">
        <Panel title={whyWoolf.title} titleJa={whyWoolf.titleJa}>
          <div className="jp-body max-w-2xl space-y-4 text-[0.98rem]">
            {whyWoolf.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="editorial mt-6 text-xl text-accent">{whyWoolf.concept.en}</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">{whyWoolf.concept.ja}</p>
          <p className="mt-6 max-w-2xl border-l border-accent pl-4 text-sm text-text-soft">
            {whyWoolf.caution}
          </p>
        </Panel>

        <Panel
          eyebrow="03"
          title="Publishing / Network"
          titleJa="中心軸としての出版／ネットワーク"
        >
          <p className="editorial text-lg text-accent">
            {woolfPrimaryQuestion.en}
          </p>
          <p className="jp-serif mt-2 text-sm text-text-soft">
            {woolfPrimaryQuestion.ja}
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {publishingLayers.map((layer) => (
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
          <div className="mt-8 space-y-3">
            {woolfOverviewLayers.map((layer) => (
              <div
                key={layer.text}
                className="border border-border-soft px-4 py-3"
              >
                <EpistemicLabel kind={layer.kind} />
                <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-text-faint">
            Primary Condition is a best entry point for comparison — not essence.
            Time, Body, and Maintenance may coexist.
          </p>
        </Panel>

        <Panel eyebrow="04–07" title="Writing · Reading · Editing · Publishing">
          <h3 className="editorial text-xl text-text">{publishingIsLabor.title}</h3>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            {publishingIsLabor.titleJa}
          </p>
          <ol className="mt-5 space-y-2">
            {publishingIsLabor.flow.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-text-soft">
                <span className="label shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  {step}
                  {i < publishingIsLabor.flow.length - 1 ? (
                    <span className="mt-1 block text-xs text-text-faint">↓</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-text-soft">{publishingIsLabor.caution}</p>
          <p className="mt-2 text-xs text-text-faint">
            PublishingActivityRecords indexed: 0
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-border-soft p-5">
              <p className="label">Writing</p>
              <ul className="mt-3 space-y-1 text-sm text-text-soft">
                {writingPublishingSplit.writing.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="border border-border-soft p-5">
              <p className="label">Publishing</p>
              <ul className="mt-3 space-y-1 text-sm text-text-soft">
                {writingPublishingSplit.publishing.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-soft">{writingPublishingSplit.caution}</p>

          <div className="mt-10">
            <h3 className="editorial text-xl text-text">{readingAsWork.title}</h3>
            <p className="jp-serif mt-1 text-sm text-text-faint">
              {readingAsWork.titleJa}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {readingAsWork.types.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2.5 py-1 text-xs text-text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-text-soft">{readingAsWork.note}</p>
            <p className="mt-2 text-xs text-text-faint">ReadingRecords indexed: 0</p>
          </div>
        </Panel>

        <Panel eyebrow="08–10" title="Correspondence · Literary Network · Meetings">
          <h3 className="editorial text-xl text-text">
            {networkAsInfrastructure.title}
          </h3>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            {networkAsInfrastructure.titleJa}
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {networkAsInfrastructure.observe.map((q) => (
              <li
                key={q}
                className="border border-border-soft px-3 py-2 text-sm text-text-soft"
              >
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-soft">{networkAsInfrastructure.avoid}</p>
          <p className="mt-2 text-xs text-text-faint">
            LiteraryNetworkRelations: 0 · MeetingRecords: 0 ·
            CorrespondenceRecords: 0
          </p>
          <p className="mt-4 text-sm text-text-soft">
            CorrespondenceRecord を再利用。手紙本文の長い転載はしない。Literary /
            Publishing / Personal / Family / Business / Reader 等の層は Source
            確認後に付ける。
          </p>
        </Panel>

        <Panel eyebrow="11–14" title="Money · Household · Body · Movement">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="editorial text-xl text-text">{householdObserve.title}</h3>
              <p className="jp-serif mt-1 text-sm text-text-faint">
                {householdObserve.titleJa}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {householdObserve.layers.map((l) => (
                  <li
                    key={l}
                    className="border border-border px-2.5 py-1 text-xs text-text-faint"
                  >
                    {l}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-text-soft">{householdObserve.caution}</p>
            </div>
            <div>
              <h3 className="editorial text-xl text-text">{bodyNote.title}</h3>
              <p className="jp-serif mt-1 text-sm text-text-faint">{bodyNote.titleJa}</p>
              <p className="mt-3 text-sm text-text-soft">{bodyNote.caution}</p>
              <p className="mt-4 text-xs text-text-faint">
                MoneyRecord amounts: none indexed · BodyRecords: 0 · MovementRecords:
                0
              </p>
            </div>
          </div>
        </Panel>

        <Panel eyebrow="15–16" title="War Context · Reception">
          <h3 className="editorial text-xl text-text">{warContextNote.title}</h3>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            {warContextNote.titleJa}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {warContextNote.candidates.map((c) => (
              <span
                key={c}
                className="border border-border px-2.5 py-1 text-xs text-text-faint"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-text-soft">{warContextNote.note}</p>

          <div className="mt-10">
            <h3 className="editorial text-xl text-text">{audienceLoop.title}</h3>
            <p className="jp-serif mt-1 text-sm text-text-faint">
              {audienceLoop.titleJa}
            </p>
            <ol className="mt-5 space-y-2">
              {audienceLoop.flow.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-text-soft"
                >
                  <span className="label shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    {step}
                    {i < audienceLoop.flow.length - 1 ? (
                      <span className="mt-1 block text-xs text-text-faint">↓</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-text-soft">{audienceLoop.note}</p>
            <p className="mt-2 text-xs text-text-faint">ReviewRecords indexed: 0</p>
          </div>
        </Panel>

        <Panel eyebrow="17" title={diaryCorpusStatus.title} titleJa={diaryCorpusStatus.titleJa}>
          <p className="inline-flex border border-border px-2.5 py-1 text-xs text-text-faint">
            {diaryCorpusStatus.status}
          </p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {diaryCorpusStatus.rows.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-3 border border-border-soft px-4 py-3"
              >
                <dt className="text-sm text-text-soft">{row.label}</dt>
                <dd className="shrink-0 text-xs text-text-faint">{row.status}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-text-soft">{diaryCorpusStatus.note}</p>
          <p className="mt-2 text-xs text-text-faint">
            Future route candidate: {diaryCorpusStatus.futureRoute}
          </p>
        </Panel>

        <Panel
          eyebrow="18"
          title="What the Records Make Visible"
          titleJa="記録が見せうること"
        >
          <dl className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {visibleRegister.map((row) => (
              <div
                key={row.label}
                className="border border-border-soft px-4 py-3"
              >
                <EpistemicLabel kind={row.kind} />
                <dt className="mt-2 text-sm text-text-soft">{row.label}</dt>
                <dd className="mt-1 text-xs text-text-faint">{row.status}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        <Panel eyebrow="19" title="What Remains Unknown" titleJa="未索引レジスタ">
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

        <Panel title="Research status / Provenance" titleJa="研究状態と証跡">
          <dl className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {provenanceStatus.map((row) => (
              <div key={row.label} className="border border-border-soft px-4 py-3">
                <dt className="label">{row.label}</dt>
                <dd className="mt-2 text-sm text-text-soft">{row.status}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-text-soft">
            ページ枠の完成 ≠ 資料研究の完成。Research completeness は未完のまま残す。
          </p>
        </Panel>

        <Panel eyebrow="20" title="Research Queue" titleJa="調査キュー">
          <Timeline items={woolfTimeline} />
          <div className="mt-8">
            <WriterResearchQueue items={woolfResearchQueue} />
          </div>
        </Panel>

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
        </Panel>

        <section className="border-t border-border pt-12">
          <h2 className="editorial text-2xl text-text">Related writers</h2>
          <p className="mt-2 text-sm text-text-faint">
            Linked by Observation Axis — not celebrity or biographical category.
          </p>
          <div className="mt-6">
            <WriterRelatedWriters items={woolfRelatedWriters} />
          </div>
        </section>

        <Panel eyebrow="22" title="Future Comparisons" titleJa="将来の比較">
          <div className="grid gap-4 md:grid-cols-2">
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
        </section>
      </div>
    </div>
  );
}
