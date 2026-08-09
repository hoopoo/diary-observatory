import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { EntityBreadcrumb } from "@/components/entities/EntityBreadcrumb";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { HousingTimeline } from "@/components/writers/HousingTimeline";
import {
  authenticityLayers,
  domesticFunctions,
  domesticLaborModes,
  functionTransformation,
  futureObservations,
  historicalCurrentLayers,
  houseRoute,
  houseTimeline,
  housingConnectionCards,
  housingContrast,
  memorialAccess,
  memorialLead,
  memorialMetadata,
  memorialResearchQueue,
  memorialRoomRecords,
  memorialObjectRecords,
  memorialSources,
  moneyConnection,
  museumEditorialActions,
  objectCategories,
  privateToPublic,
  roomCategories,
  visitGuide,
  whatKindOfPlace,
  workInfrastructure,
  MEMORIAL_SLUG,
} from "@/data/entities/hayashi-fumiko-memorial-hall";
import { getEntityById } from "@/data/entities";
import type { Entity } from "@/lib/types";

function MemorialArchitecturalPortrait() {
  return (
    <div
      className="paper-panel relative overflow-hidden px-6 py-8 md:px-8"
      aria-hidden="true"
    >
      <p className="label">Text-based architectural portrait</p>
      <p className="editorial mt-4 text-2xl tracking-[0.12em] text-text md:text-3xl">
        HAYASHI FUMIKO
        <br />
        MEMORIAL HALL
      </p>
      <p className="mt-4 text-[0.65rem] tracking-[0.22em] text-text-faint">
        HOME / WORK / GARDEN / ARCHIVE
      </p>
      <div className="mt-8 grid grid-cols-3 gap-2">
        {["間取り", "建具", "庭", "書斎", "台所", "原稿用紙"].map((label) => (
          <div
            key={label}
            className="flex h-16 items-end border border-border-soft px-2 py-2 text-[0.65rem] text-text-faint"
          >
            {label}
          </div>
        ))}
      </div>
      <p className="mt-4 font-serif text-[0.7rem] leading-relaxed text-text-faint">
        No unlicensed exterior photograph. Quiet spatial portrait only.
      </p>
      <div className="pointer-events-none absolute -right-2 bottom-0 select-none font-serif text-[5.5rem] leading-none text-border opacity-40">
        家
      </div>
    </div>
  );
}

export function HayashiMemorialObservatory({ entity }: { entity: Entity }) {
  const tomaru = getEntityById("entity-tomaru");
  const nameJa = entity.nameJa ?? entity.nameOriginal ?? entity.name;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <EntityBreadcrumb name={entity.name} nameJa={nameJa} />

      <header className="mt-8 grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="label">Entity Observatory</p>
          <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
            {entity.name}
          </h1>
          <p className="jp-heading mt-3 text-2xl md:text-3xl">{nameJa}</p>
          <p className="mt-4 text-sm text-text-faint">
            Residence / Museum / Literary archive
          </p>
          <p className="mt-1 text-xs text-text-faint">
            Historical role: Home and workplace · Current status: Existing ·
            Entity nature: Real
          </p>
          <p className="mt-1 text-xs text-text-faint">
            Primary writer: Fumiko Hayashi · Primary city: Tokyo
          </p>
          <p className="mt-1 text-xs text-text-faint">
            District: Official confirmation only — Source needed
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <EntityStatusBadge status={entity.status} />
            <span className="border border-border px-2.5 py-1 text-xs text-text-faint">
              Historical: Transformed
            </span>
            <span className="border border-accent/40 px-2.5 py-1 text-xs text-accent">
              Source needed
            </span>
          </div>

          <p className="editorial mt-8 text-xl text-accent md:text-2xl">
            {entity.tagline}
          </p>
          <p className="jp-serif mt-2 text-base text-text-soft">
            {entity.taglineJa}
          </p>

          <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
            {(entity.longDescription ?? memorialLead).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
            {(
              [
                ["Entity ID", memorialMetadata.entityId],
                ["Status", memorialMetadata.status],
                ["Nature", memorialMetadata.nature],
                ["Historical function", memorialMetadata.historicalFunction],
                ["Current function", memorialMetadata.currentFunction],
                ["Primary writer", memorialMetadata.primaryWriter],
                ["Observation status", memorialMetadata.observationStatus],
                ["Verification status", memorialMetadata.verificationStatus],
                ["Last updated", memorialMetadata.lastUpdated],
              ] as const
            ).map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd className="mt-1 text-text-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <MemorialArchitecturalPortrait />
      </header>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{whatKindOfPlace.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {whatKindOfPlace.titleJa}
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {whatKindOfPlace.badges.map((b) => (
            <li
              key={b.en}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">{b.en}</span>
              {b.ja}
            </li>
          ))}
        </ul>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          {whatKindOfPlace.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {historicalCurrentLayers.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {historicalCurrentLayers.titleJa}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-4 py-4">
            <p className="label">Historical layer</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {historicalCurrentLayers.historical.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Current layer</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {historicalCurrentLayers.current.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          {historicalCurrentLayers.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="mt-8 border border-border px-5 py-6">
          <EpistemicLabel kind="interpretation" />
          <p className="editorial mt-3 whitespace-pre-line text-xl text-accent">
            {historicalCurrentLayers.concept.en}
          </p>
          <p className="jp-serif mt-3 text-sm text-text-soft">
            {historicalCurrentLayers.concept.ja}
          </p>
        </aside>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Entity status</h2>
        <p className="jp-serif mt-2 text-sm text-accent">Entity Status</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <EntityStatusBadge status="existing" />
          <span className="border border-border px-2.5 py-1 text-xs text-text-faint">
            Historical status: Transformed
          </span>
        </div>
        <ol className="mt-6 space-y-3">
          {functionTransformation.map((step, i) => (
            <li key={step.id} className="border border-border px-4 py-3 text-sm">
              <p className="label">
                {i + 1}. {step.label}
              </p>
              <p className="jp-serif mt-1 text-text-soft">{step.labelJa}</p>
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                {step.status}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-text-faint">
          originalFunction: residence / workplace · currentFunction: museum /
          archive
        </p>
      </section>

      <section
        id="house-timeline"
        className="mt-16 border-b border-border pb-14"
      >
        <h2 className="editorial text-3xl text-text">Timeline of the house</h2>
        <p className="jp-serif mt-2 text-sm text-accent">家の時間</p>
        <ol className="mt-6 space-y-3">
          {houseTimeline.map((item) => (
            <li key={item.id} className="border border-border px-4 py-4 text-sm">
              <p className="label">{item.event}</p>
              <p className="jp-serif mt-1 text-text-soft">{item.eventJa}</p>
              <p className="mt-2 text-text-faint">
                {item.date ?? item.period ?? "Date verification needed"}
              </p>
              {item.description && (
                <p className="mt-2 text-xs text-text-faint">{item.description}</p>
              )}
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                {item.layer} · {item.verificationStatus}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          A house built around work
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">仕事を支える家</p>
        <div className="jp-body mt-4 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            作家の家は、生活の結果であるだけでなく、仕事のための設備でもある。
          </p>
          <p>
            具体的な部屋の用途は、公式資料や平面図で確認できる範囲のみ表示する。現時点：Not
            indexed。
          </p>
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {workInfrastructure.map((item) => (
            <li
              key={item.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {item.label}
              </span>
              {item.labelJa}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Domestic space is also work space
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          生活空間は、仕事空間でもある
        </p>
        <p className="mt-4 max-w-2xl text-sm text-text-soft">
          書斎だけを仕事空間として扱わない。家事の担い手は確認済み資料なしに断定しない。
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {domesticFunctions.map((item) => (
            <li
              key={item.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {item.label}
              </span>
              {item.labelJa}
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-2">
          {domesticLaborModes.map((m) => (
            <li
              key={m.id}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {m.label} / {m.labelJa}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Rooms and functions</h2>
        <p className="jp-serif mt-2 text-sm text-accent">部屋と役割</p>
        <p className="mt-3 text-sm text-text-faint">
          RoomRecords registered: {memorialRoomRecords.length} — categories
          only until official plans.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {roomCategories.map((r) => (
            <li
              key={r.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {r.label}
              </span>
              {r.labelJa}
              <p className="mt-2 text-[0.65rem] text-text-faint">Not indexed</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          A day moving through the house
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          家の中を移動する一日
        </p>
        <p className="mt-2 text-xs tracking-wide text-text-faint">
          Interpretive route
        </p>
        <ol className="mt-6 space-y-2">
          {houseRoute.map((step, i) => (
            <li key={step.id} className="border border-border px-4 py-3 text-sm">
              <p className="text-text-soft">
                {i + 1}. {step.label} / {step.labelJa}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-text-soft">
          This is not a reconstructed historical day. It is a spatial model of
          activities the house could support.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          これは実在した一日の再現ではない。この家が支え得た生活行動を示す、空間的な概念モデルである。
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          The room where writing became work
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          書くことが仕事になった部屋
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-4 py-4">
            <p className="label">Earlier rooms</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {[
                "temporary",
                "rented",
                "shared",
                "uncertain",
                "poorly documented",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Later house</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {[
                "owned or secured residence — ownership Fact pending",
                "purpose-designed space — design intent pending",
                "preserved",
                "publicly documented — official source pending",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          The garden as a working environment
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          仕事環境としての庭
        </p>
        <p className="mt-4 max-w-2xl text-sm text-text-soft">
          植物名、配置、設計意図を推測しない。確認済み記録がある場合のみ Fact。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-4 py-4 text-sm text-text-soft">
            <p className="label">Kafū</p>
            <p className="mt-2">日記の中で反復して観測される庭</p>
          </div>
          <div className="border border-border px-4 py-4 text-sm text-text-soft">
            <p className="label">Hayashi</p>
            <p className="mt-2">住居と執筆環境として残った庭</p>
          </div>
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Objects that remain</h2>
        <p className="jp-serif mt-2 text-sm text-accent">残った物</p>
        <p className="mt-3 text-sm text-text-faint">
          ObjectRecords registered: {memorialObjectRecords.length} — authenticity
          unknown until catalogue.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {objectCategories.map((o) => (
            <li
              key={o.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {o.label}
              </span>
              {o.labelJa}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          What exactly are we seeing?
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          私たちは、何を見ているのか
        </p>
        <div className="mt-2">
          <EpistemicLabel kind="observation" />
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {authenticityLayers.map((layer) => (
            <li
              key={layer.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {layer.label}
              </span>
              {layer.labelJa}
              <p className="mt-2 text-[0.65rem] text-text-faint">Unknown</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm text-text-soft">
          「残っている」と「当時のままである」を区別する。修復・復元・複製・展示配置を混同しない。
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Rooms that did not become museums
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          記念館にならなかった部屋
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-4 py-4">
            <p className="label">Memorialized</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {housingContrast.memorialized.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Not memorialized</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {housingContrast.notMemorialized.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="mt-8 border border-border px-5 py-6">
          <EpistemicLabel kind="interpretation" />
          <p className="editorial mt-3 whitespace-pre-line text-xl text-accent">
            {housingContrast.concept.en}
          </p>
          <p className="jp-serif mt-3 text-sm text-text-soft">
            {housingContrast.concept.ja}
          </p>
        </aside>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Housing timeline</h2>
        <p className="jp-serif mt-2 text-sm text-accent">住居の時間との接続</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {housingConnectionCards.map((card) => (
            <article
              key={card.id}
              className="border border-border px-4 py-4 text-sm"
            >
              <p className="label">{card.label}</p>
              <p className="jp-serif mt-1 text-text-soft">{card.labelJa}</p>
              <p className="mt-2 text-xs text-text-faint">{card.housingType}</p>
              <p className="mt-2 text-xs text-text-faint">{card.status}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <HousingTimeline />
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          When success becomes permanent space
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          成功が、恒久的な空間になるとき
        </p>
        <p className="mt-4 max-w-2xl text-sm text-text-soft">
          家の取得費、土地価格、建築費を資料なしに推測しない。
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {moneyConnection.map((m) => (
            <li
              key={m.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {m.label} / {m.labelJa}
              </span>
              {m.status}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          From private home to public memory
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          私的な家が、公的な記憶になるまで
        </p>
        <ol className="mt-6 space-y-2">
          {privateToPublic.map((step, i) => (
            <li key={step.id} className="border border-border px-4 py-3 text-sm">
              {i + 1}. {step.label} / {step.labelJa}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-text-faint">
          実際の保存経緯は、公式資料で確認後に Fact として表示する。
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">A museum edits a life</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          記念館は、人生を編集する
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {museumEditorialActions.map((a) => (
            <li
              key={a.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {a.label}
              </span>
              {a.labelJa}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          ActorType: curator / museum / archive-institution
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Can this place still be visited?
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          この場所は、いま訪ねられるか
        </p>
        <p className="mt-3 text-xs text-text-faint">
          CurrentAccessInfo — separated from Entity Fact core
        </p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          {(
            [
              ["Current status", memorialAccess.status],
              ["Operator", memorialAccess.operator],
              ["Official page", memorialAccess.officialUrl ?? "Source needed"],
              [
                "Opening hours",
                memorialAccess.openingHours ?? "Source needed",
              ],
              ["Admission", memorialAccess.admission ?? "Source needed"],
              ["Access", memorialAccess.transport ?? "Source needed"],
              [
                "Accessibility",
                memorialAccess.accessibility ?? "Source needed",
              ],
              [
                "Photography",
                memorialAccess.photographyPolicy ?? "Source needed",
              ],
              ["Checked at", memorialAccess.checkedAt ?? "—"],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="border border-border px-3 py-3">
              <dt className="text-[0.65rem] text-text-faint">{k}</dt>
              <dd className="mt-1 text-text-soft">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">How to visit this place</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          この場所を、どう見るか
        </p>
        <p className="mt-2 text-xs tracking-wide text-text-faint">
          Observation Guide — not a tourist course
        </p>
        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-text-soft">
          {visitGuide.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Two surviving and disappearing entities
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          残る場所と、消える場所
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="border border-border px-4 py-4 text-sm">
            <p className="label">Hayashi Fumiko Memorial Hall</p>
            <ul className="mt-3 space-y-1 text-text-soft">
              <li>Residence · Preserved · Museum</li>
              <li>Official archive · Public access</li>
              <li>Associated with success</li>
              <li>
                Status: <EntityStatusBadge status={entity.status} size="sm" />
              </li>
            </ul>
          </article>
          <article className="border border-border px-4 py-4 text-sm">
            <p className="label">Tomaru Shoten</p>
            <ul className="mt-3 space-y-1 text-text-soft">
              <li>Used bookstore · Everyday commercial place</li>
              <li>Limited archive · Ordinary movement</li>
              <li>
                Status:{" "}
                {tomaru ? (
                  <EntityStatusBadge status={tomaru.status} size="sm" />
                ) : (
                  "—"
                )}
              </li>
            </ul>
            <Link
              href="/entities/tomaru-shoten"
              className="focus-ring mt-4 inline-block text-accent underline-offset-4 hover:underline"
            >
              Open Tomaru Shoten
            </Link>
          </article>
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Two homes of writing</h2>
        <p className="jp-serif mt-2 text-sm text-accent">二つの書く家</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-4 py-4 text-sm text-text-soft">
            <p className="label">Kafū Nagai</p>
            <ul className="mt-3 space-y-1">
              <li>長期日記 · 庭 · 室内 · 戦争と住居</li>
              <li>現在の住居状況は別途調査</li>
            </ul>
          </div>
          <div className="border border-border px-4 py-4 text-sm text-text-soft">
            <p className="label">Fumiko Hayashi</p>
            <ul className="mt-3 space-y-1">
              <li>移動する住居 · 成功後の家 · 書斎 · 記念館</li>
              <li>現存</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-text-faint">
          Related:{" "}
          <Link
            href="/compare/four-urban-lives"
            className="focus-ring text-accent underline-offset-4 hover:underline"
          >
            Four Urban Lives
          </Link>
          {" · "}
          Coming: /compare/kafu-hayashi-houses
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <Link
          href="/diaries/horoki"
          className="focus-ring paper-panel group block p-7 transition-colors hover:border-text-faint md:p-10"
        >
          <p className="label">Related Diary Work</p>
          <h2 className="editorial mt-3 text-3xl text-text group-hover:opacity-80">
            The house after Hōrōki
          </h2>
          <p className="jp-serif mt-2 text-sm text-accent">
            『放浪記』のあとに残った家
          </p>
          <p className="mt-4 max-w-2xl text-sm text-text-soft">
            Hōrōki records unstable work, food, rooms, and movement. The memorial
            hall preserves the later space of writing and success.
          </p>
          <p className="jp-serif mt-2 text-sm text-text-faint">
            『放浪記』には、不安定な仕事、食事、部屋、移動が残る。記念館には、その後に得た執筆と生活の空間が残る。
          </p>
          <p className="mt-6 text-sm text-accent">Open Hōrōki →</p>
        </Link>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related Writer</h2>
        <Link
          href="/writers/fumiko-hayashi"
          className="focus-ring mt-4 inline-block border border-border px-5 py-4 transition-colors hover:border-text-faint"
        >
          <p className="editorial text-xl text-text">Fumiko Hayashi</p>
          <p className="jp-serif text-sm text-accent">林芙美子</p>
          <p className="mt-3 text-xs text-text-faint">
            Work · Rooms · Food · Movement · Publishing · Success · Body
          </p>
        </Link>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related Future Observation</h2>
        <ul className="mt-6 space-y-2 text-sm text-text-faint">
          {futureObservations.map((o) =>
            o.available && o.href ? (
              <li key={o.title}>
                <Link
                  href={o.href}
                  className="focus-ring text-text-soft underline-offset-4 hover:underline"
                >
                  {o.title}
                </Link>
              </li>
            ) : (
              <li key={o.title}>Coming: {o.title}</li>
            ),
          )}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Research queue</h2>
        <p className="jp-serif mt-2 text-sm text-accent">調査対象</p>
        <ul className="mt-6 space-y-3">
          {memorialResearchQueue.map((item) => (
            <li
              key={item.id}
              className="border border-border-soft px-4 py-3 text-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-text-soft">
                  Priority {item.priority}: {item.title}
                </p>
                <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
                  {item.status}
                </span>
              </div>
              {item.titleJa && (
                <p className="jp-serif mt-1 text-xs text-text-faint">
                  {item.titleJa}
                </p>
              )}
              {item.note && (
                <p className="mt-2 text-xs text-text-faint">{item.note}</p>
              )}
              {item.sourceNeeded && (
                <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                  Source needed
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <FactObservationInterpretationBlock
          fact="林芙美子記念館は実在の記念館・保存住居として Existing に置く。公式URL・開館時間・正確な地区表示は未登録。"
          observation="建物は残っても機能は私邸から記念館へ変容している。失われた下宿・借間は同じ大きさのカードとして残す。"
          interpretation="残った家だけを人生の代表像にしない。成功の建築物と、貧困が残した文章を同時に読む。"
        />
      </section>

      <section className="mt-16">
        <p className="max-w-2xl text-xs text-text-faint">
          架空URLを作らない。無断の外観写真を使わない。現在の開館情報は
          CurrentAccessInfo に分離する。
        </p>
        <div className="mt-4">
          <CategorizedSourceList sources={memorialSources} />
        </div>
        <p className="mt-6 text-xs text-text-faint">
          Entity path: /entities/{MEMORIAL_SLUG}
        </p>
      </section>
    </div>
  );
}
