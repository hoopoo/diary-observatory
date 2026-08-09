import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ThenNowBlock } from "@/components/entities/ThenNowBlock";
import { DomesticTimeFlow } from "@/components/entries/DomesticTimeFlow";
import { EntryBreadcrumb } from "@/components/entries/EntryBreadcrumb";
import { EntryDayLayers } from "@/components/entries/EntryDayLayers";
import { EntryTimeline } from "@/components/entries/EntryTimeline";
import { EvidenceLevelBadge } from "@/components/entries/EvidenceLevelBadge";
import { IndoorConditionPanel } from "@/components/entries/IndoorConditionPanel";
import { RecordSurvivalList } from "@/components/entries/RecordSurvivalList";
import { EntryProvenanceSummary } from "@/components/provenance/EntryProvenanceSummary";
import { ProvenanceAudit } from "@/components/provenance/ProvenanceAudit";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import { KafuExcavationPanels } from "@/components/entries/KafuExcavationPanels";
import {
  bodyInColdRoom,
  dayAtAGlance,
  diaryAsEvidence,
  domesticTimeFlow,
  ENTRY_ID_1918_01_01,
  entry19180101Meta,
  entryLayers,
  entryObjects,
  entrySourceNotice,
  entrySources,
  entryTimeline,
  newYearWithoutCeremony,
  parallelNishimura,
  publicPrivateConcept,
  recordSurvival,
  relatedPages,
  sameDateAcrossYears,
  thenAndNow,
  waitingForWarmth,
  weatherInterior,
} from "@/data/entries/1918-01-01-kafu-nagai";
import { getEntryExcavationStatus } from "@/lib/provenance";
import type { Entity } from "@/lib/types";

export function KafuEntryObservatory({ entities }: { entities: Entity[] }) {
  const byId = new Map(entities.map((e) => [e.id, e]));
  const meta = entry19180101Meta;
  const excavation = getEntryExcavationStatus(ENTRY_ID_1918_01_01);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <EntryBreadcrumb
        year="1918"
        monthDay="January 1"
        writerName={meta.writerName}
      />

      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Daily Entry — Provenance in Progress</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {meta.dateEn}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">{meta.dateJa}</p>

        <p className="mt-6 text-sm text-text-soft">
          <Link
            href={meta.writerHref}
            className="focus-ring underline-offset-4 hover:underline"
          >
            {meta.writerName}
          </Link>
          <span className="text-text-faint"> / {meta.writerNameJa}</span>
        </p>
        <p className="mt-2 text-sm text-text-soft">
          <Link
            href="/diaries/dancho-tei-nichijo"
            className="focus-ring underline-offset-4 hover:underline"
          >
            Danchōtei Nichijō
          </Link>
          <span className="text-text-faint"> / 断腸亭日乗</span>
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <ProvenanceBadge completeness={excavation.completeness} />
          <span className="text-xs text-text-faint">
            Primary source: 断腸亭日乗 · Edition not yet verified · Page
            reference not yet indexed · Last updated: {meta.lastUpdated}
          </span>
        </div>

        <p className="mt-3 text-xs tracking-wide text-text-faint">
          Primary location: {meta.primaryLocation}
        </p>
        {meta.locationDetail && (
          <p className="mt-1 text-xs text-text-faint">{meta.locationDetail}</p>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
          {meta.themes.map((theme) => (
            <li
              key={theme}
              className="border border-border px-2.5 py-1 text-[0.7rem] tracking-wide text-text-faint"
            >
              {theme}
            </li>
          ))}
        </ul>

        <p className="editorial mt-8 max-w-2xl text-xl text-accent md:text-2xl">
          {meta.tagline.en}
        </p>
        <p className="jp-serif mt-2 max-w-2xl text-base text-text-soft">
          {meta.tagline.ja}
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {meta.lead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Date</dt>
            <dd className="mt-1 text-text-soft">{meta.date}</dd>
          </div>
          <div>
            <dt className="label">Day</dt>
            <dd className="mt-1 text-text-soft">{meta.dayOfWeek}</dd>
          </div>
          <div>
            <dt className="label">Writer</dt>
            <dd className="mt-1 text-text-soft">{meta.writerName}</dd>
          </div>
          <div>
            <dt className="label">City</dt>
            <dd className="mt-1 text-text-soft">{meta.primaryLocation}</dd>
          </div>
          <div>
            <dt className="label">Entry type</dt>
            <dd className="mt-1 text-text-soft">Daily record</dd>
          </div>
          <div>
            <dt className="label">Primary diary</dt>
            <dd className="mt-1 text-text-soft">断腸亭日乗</dd>
          </div>
          <div>
            <dt className="label">Observation status</dt>
            <dd className="mt-1 text-text-soft">{meta.observationStatus}</dd>
          </div>
          <div>
            <dt className="label">Verification status</dt>
            <dd className="mt-1 text-text-soft">Partial — not Verified Entry</dd>
          </div>
          <div>
            <dt className="label">Provenance</dt>
            <dd className="mt-1 text-text-soft">{excavation.label}</dd>
          </div>
          <div>
            <dt className="label">Reference Entry</dt>
            <dd className="mt-1 text-text-soft">No (requires Strong/Complete)</dd>
          </div>
          <div>
            <dt className="label">Last updated</dt>
            <dd className="mt-1 text-text-soft">{meta.lastUpdated}</dd>
          </div>
        </dl>
      </header>

      <section className="my-12 border border-accent/30 bg-bg-raised px-6 py-6 md:px-8">
        <p className="label">{entrySourceNotice.title}</p>
        <h2 className="jp-heading mt-2 text-xl">{entrySourceNotice.titleJa}</h2>
        <div className="jp-body mt-4 space-y-3 text-sm text-text-soft">
          {entrySourceNotice.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {entrySourceNotice.labels.map((label) => (
            <li
              key={label.en}
              className="border border-border px-2.5 py-1 text-[0.7rem] text-text-faint"
            >
              {label.en}: {label.ja}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">{entrySourceNotice.note}</p>
      </section>

      <section className="my-14" aria-labelledby="day-glance">
        <h2 id="day-glance" className="editorial text-2xl text-text md:text-3xl">
          The day at a glance
        </h2>
        <p className="jp-heading mt-2 text-lg">この一日</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          「書かれていない」ことと「起きなかった」ことを混同しない。未記載は
          Not recorded として扱う。
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dayAtAGlance.map((block) => (
            <article
              key={block.id}
              className={`p-5 ${
                block.id === "unknown"
                  ? "border border-dashed border-border"
                  : "paper-panel"
              }`}
            >
              <p className="label">{block.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{block.labelJa}</p>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-text-soft">
                    <span className="text-accent" aria-hidden="true">
                      –
                    </span>
                    <span className="jp-serif">{item}</span>
                  </li>
                ))}
              </ul>
              {"noteEn" in block && block.noteEn && (
                <>
                  <p className="mt-4 text-xs text-text-faint">{block.noteEn}</p>
                  <p className="jp-serif text-xs text-text-faint">
                    {block.noteJa}
                  </p>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="my-14" aria-labelledby="timeline">
        <h2 id="timeline" className="editorial text-2xl text-text md:text-3xl">
          Timeline of the day
        </h2>
        <p className="jp-heading mt-2 text-lg">一日の時系列</p>
        <EntryTimeline events={entryTimeline} entitiesById={byId} />
      </section>

      <section className="my-14 max-w-3xl" aria-labelledby="no-ceremony">
        <h2
          id="no-ceremony"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {newYearWithoutCeremony.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">
          {newYearWithoutCeremony.titleJa}
        </p>
        <ul className="mt-8 space-y-4">
          {newYearWithoutCeremony.paragraphs.map((p) => (
            <li key={p.text} className="border border-border-soft px-4 py-4">
              <EpistemicLabel kind={p.layer} />
              <p className="jp-serif mt-3 text-sm text-text-soft">{p.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          {newYearWithoutCeremony.caution}
        </p>
      </section>

      <section className="my-14 max-w-3xl" aria-labelledby="warmth">
        <h2 id="warmth" className="editorial text-2xl text-text md:text-3xl">
          {waitingForWarmth.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{waitingForWarmth.titleJa}</p>
        <div className="jp-body mt-6 space-y-4 text-sm text-text-soft">
          {waitingForWarmth.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-3 text-xs text-text-faint">{waitingForWarmth.caution}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {waitingForWarmth.items.map((item) => (
            <li
              key={item.id}
              className="border border-dashed border-border px-4 py-3"
            >
              <p className="text-sm text-text-soft">{item.label}</p>
              <p className="jp-serif text-xs text-text-faint">{item.labelJa}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.65rem] tracking-wide text-accent">
          {waitingForWarmth.statusLabel}
        </p>
      </section>

      <section className="my-14" aria-labelledby="objects">
        <h2 id="objects" className="editorial text-2xl text-text md:text-3xl">
          Objects implied by the day
        </h2>
        <p className="jp-heading mt-2 text-lg">この一日に含まれる物</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          原文に直接書かれていない物は確定 Entity として登録しない。Recorded /
          Implied / Contextual / Unknown を区別する。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {entryObjects.map((obj) => (
            <article
              key={obj.id}
              className="border border-border px-5 py-5 text-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <EvidenceLevelBadge level={obj.evidenceLevel} />
              </div>
              <h3 className="editorial mt-3 text-lg text-text">{obj.name}</h3>
              {obj.nameJa && (
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {obj.nameJa}
                </p>
              )}
              <p className="mt-2 text-xs text-text-faint">Type: {obj.type}</p>
              <p className="mt-3 text-xs text-text-faint">{obj.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-14" aria-labelledby="layers">
        <h2 id="layers" className="editorial text-2xl text-text md:text-3xl">
          Fact / Observation / Interpretation
        </h2>
        <p className="jp-heading mt-2 text-lg">三層の読み</p>
        <EntryDayLayers layers={entryLayers} />
      </section>

      <ThenNowBlock
        title="This New Year’s Day, then and now"
        titleJa="この正月を、当時と現在から見る"
        then={thenAndNow.then}
        now={thenAndNow.now}
        note={thenAndNow.note}
      />

      <section className="my-14" aria-labelledby="domestic-time">
        <h2
          id="domestic-time"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {domesticTimeFlow.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{domesticTimeFlow.titleJa}</p>
        <div className="mt-3">
          <EpistemicLabel kind={domesticTimeFlow.layer} />
        </div>
        <DomesticTimeFlow steps={domesticTimeFlow.steps} />
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {domesticTimeFlow.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="my-14 max-w-3xl" aria-labelledby="weather-interior">
        <h2
          id="weather-interior"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {weatherInterior.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{weatherInterior.titleJa}</p>
        <IndoorConditionPanel
          weather={weatherInterior.weather}
          outdoorTemperature={weatherInterior.outdoorTemperature}
          indoorCondition={weatherInterior.indoorCondition}
          subjectiveCondition={weatherInterior.subjectiveCondition}
          measuredWeather={weatherInterior.measuredWeather}
        />
        <p className="mt-4 text-xs text-text-faint">
          Future: {weatherInterior.futureItems.join(" · ")}
        </p>
      </section>

      <section className="my-14 max-w-3xl" aria-labelledby="body-cold">
        <h2 id="body-cold" className="editorial text-2xl text-text md:text-3xl">
          {bodyInColdRoom.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{bodyInColdRoom.titleJa}</p>
        <div className="jp-body mt-6 space-y-4 text-sm text-text-soft">
          {bodyInColdRoom.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bodyInColdRoom.items.map((item) => (
            <li
              key={item.id}
              className="border border-dashed border-border px-4 py-3"
            >
              <p className="text-sm text-text-soft">{item.label}</p>
              <p className="jp-serif text-xs text-text-faint">{item.labelJa}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">{bodyInColdRoom.note}</p>
      </section>

      <ConceptBlock
        title={publicPrivateConcept.title}
        titleJa={publicPrivateConcept.titleJa}
        paragraphs={publicPrivateConcept.paragraphs}
      />

      <section className="my-14" aria-labelledby="parallel">
        <h2 id="parallel" className="editorial text-2xl text-text md:text-3xl">
          {parallelNishimura.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{parallelNishimura.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="border border-border px-5 py-5">
            <p className="label">{parallelNishimura.kafu.date}</p>
            <h3 className="editorial mt-2 text-xl text-text">
              {parallelNishimura.kafu.writer}
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-text-soft">
              {parallelNishimura.kafu.items.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-border px-5 py-5">
            <p className="label">{parallelNishimura.nishimura.date}</p>
            <h3 className="editorial mt-2 text-xl text-text">
              {parallelNishimura.nishimura.writer}
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-text-soft">
              {parallelNishimura.nishimura.items.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
            <Link
              href={parallelNishimura.nishimura.href}
              className="focus-ring mt-4 inline-block text-xs text-accent underline-offset-4 hover:underline"
            >
              View Nishimura day
            </Link>
          </article>
        </div>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm text-text-soft">
          {parallelNishimura.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link
          href={parallelNishimura.compareHref}
          className="focus-ring mt-6 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
        >
          Compare Kafū and Nishimura
        </Link>
      </section>

      <section className="my-14 border border-border px-6 py-8" aria-labelledby="same-day">
        <h2 id="same-day" className="editorial text-2xl text-text">
          Other lives on January 1, 1918
        </h2>
        <p className="jp-heading mt-2 text-lg">同じ日、別の人生</p>
        <p className="mt-4 text-sm text-text-soft">
          No other indexed diaries yet.
        </p>
        <p className="jp-serif mt-2 text-sm text-text-faint">
          現在、この日付で索引化された別の日記はまだありません。
        </p>
        <Link
          href="/same-day/1918-01-01"
          className="focus-ring mt-6 inline-block border border-border px-4 py-2 text-xs tracking-wide text-accent hover:border-text-faint"
        >
          Open Same Day
        </Link>
      </section>

      <section className="my-14" aria-labelledby="across-years">
        <h2
          id="across-years"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {sameDateAcrossYears.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{sameDateAcrossYears.titleJa}</p>
        <ul className="mt-6 space-y-3">
          {sameDateAcrossYears.items.map((item) => (
            <li
              key={item.date}
              className="flex flex-wrap items-center justify-between gap-3 border border-border px-4 py-3"
            >
              <div>
                <p className="text-sm text-text-soft">{item.date}</p>
                <p className="text-xs text-text-faint">{item.writer}</p>
              </div>
              {item.status === "indexed" && item.href ? (
                <Link
                  href={item.href}
                  className="focus-ring border border-accent/40 px-2 py-0.5 text-[0.65rem] text-accent"
                >
                  Indexed
                </Link>
              ) : (
                <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                  Not indexed
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          {sameDateAcrossYears.futureNote}
        </p>
      </section>

      <section className="my-14" aria-labelledby="remains">
        <h2 id="remains" className="editorial text-2xl text-text md:text-3xl">
          What remains from January 1, 1918?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          1918年1月1日から、何が残っているか
        </p>
        <p className="mt-3 text-xs text-text-faint">
          Record Survival — not Entity status scoring.
        </p>
        <RecordSurvivalList items={recordSurvival} />
      </section>

      <ConceptBlock
        title={diaryAsEvidence.title}
        titleJa={diaryAsEvidence.titleJa}
        paragraphs={diaryAsEvidence.paragraphs}
      />

      <EntryProvenanceSummary entryId={ENTRY_ID_1918_01_01} />

      <div className="my-14">
        <KafuExcavationPanels entryId={ENTRY_ID_1918_01_01} />
      </div>

      <CategorizedSourceList sources={entrySources} />

      <ProvenanceAudit entryId={ENTRY_ID_1918_01_01} />

      <section className="my-14" aria-labelledby="related-pages">
        <h2 id="related-pages" className="editorial text-2xl text-text">
          Related pages
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {relatedPages.map((page) =>
            page.href ? (
              <li key={`${page.group}-${page.title}`}>
                <Link
                  href={page.href}
                  className="focus-ring flex flex-col border border-border px-4 py-3 hover:border-text-faint"
                >
                  <span className="label">{page.group}</span>
                  <span className="mt-1 text-sm text-text-soft">
                    {page.title}
                  </span>
                </Link>
              </li>
            ) : (
              <li
                key={`${page.group}-${page.title}`}
                className="border border-dashed border-border px-4 py-3 text-sm text-text-faint"
              >
                <span className="label">{page.group}</span>
                <span className="mt-1 block">{page.title}</span>
                <span className="mt-2 block text-[0.65rem]">
                  Coming observation
                </span>
              </li>
            ),
          )}
        </ul>
      </section>
    </div>
  );
}
