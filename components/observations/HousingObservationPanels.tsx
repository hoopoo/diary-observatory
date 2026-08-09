import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { authenticityLayers } from "@/data/entities/hayashi-fumiko-memorial-hall";
import { hayashiHousingRecords } from "@/data/housing/fumiko-hayashi";
import {
  domesticWorkMap,
  earlierLater,
  fourWriterHousing,
  houseHousingObservations,
  housingArchiveAbsences,
  housingLayers,
  housingSequence,
  housingStatusMatrixRows,
  museumEditorialFunctions,
  preservationCosts,
  preservationProcess,
  roomConditions,
  survivalBias,
} from "@/data/observations/the-house-that-remained";

export function HousingSequence() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Housing sequence</p>
      <ol className="mt-4 space-y-2">
        {housingSequence.map((step, i) => (
          <li key={step.id} className="border border-border px-4 py-3 text-sm">
            <p className="text-text-soft">
              {i + 1}. {step.label} / {step.labelJa}
            </p>
            <p className="mt-1 text-[0.65rem] tracking-wide text-text-faint">
              {step.status}
            </p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function RoomConditionPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Room condition panel</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {roomConditions.map((c) => (
          <li
            key={c}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            {c}
            <span className="mt-1 block text-[0.65rem] text-text-faint">
              Not indexed per room — do not invent equipment
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function HousingLayersPanel() {
  return (
    <aside className="not-prose my-10">
      <ul className="grid gap-2 sm:grid-cols-2">
        {housingLayers.map((layer) => (
          <li
            key={layer.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] text-text-faint">
              {layer.label}
            </span>
            {layer.labelJa}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function HousingRecordPanel() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Housing records</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">住居記録</p>
      <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {hayashiHousingRecords.map((h) => (
          <article
            key={h.id}
            className="flex min-h-[12rem] flex-col border border-border px-4 py-4 text-sm"
          >
            <p className="label">{h.label}</p>
            <p className="jp-serif mt-1 text-text-soft">{h.labelJa}</p>
            <dl className="mt-3 flex-1 space-y-1 text-xs text-text-faint">
              <div>Period: {h.startDate ?? "Not indexed"} – {h.endDate ?? "—"}</div>
              <div>Type: {h.housingType}</div>
              <div>Address: {h.addressLevel}</div>
              <div>Rent: Not indexed</div>
              <div>Writing use: {h.writingUse ?? "Not indexed"}</div>
              <div>Verification: {h.verificationStatus}</div>
            </dl>
          </article>
        ))}
      </div>
    </aside>
  );
}

export function RentRecordPanel() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-5">
      <p className="label">Rent record panel</p>
      <p className="mt-4 text-sm text-text-soft">
        No verified rent amount indexed yet.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        確認済みの家賃額は、まだ索引化されていません。
      </p>
      <ul className="mt-4 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
        {[
          "Known rent",
          "Payment period",
          "Housing type",
          "Income relation",
          "Move relation",
          "Source",
          "Verification",
        ].map((f) => (
          <li key={f} className="border border-border-soft px-2 py-1">
            {f}: Not indexed
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.65rem] text-text-faint">
        No modern currency conversion.
      </p>
    </aside>
  );
}

export function EarlierLaterHousingPanel() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">
        Earlier rooms / Later house
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        それ以前の部屋／後年の家
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="border border-border px-4 py-4">
          <p className="label">Earlier rooms</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {earlierLater.earlier.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Later house</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {earlierLater.later.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm text-text-faint">
        This is a structural comparison, not a moral judgment or a complete
        housing history.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        これは構造比較であり、住居の優劣や完全な生活史を示すものではない。
      </p>
    </aside>
  );
}

export function ArchitecturalSurvivalBias() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">
        Architectural survival bias
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        建築の生存者バイアス
      </p>
      <div className="mt-2">
        <EpistemicLabel kind="interpretation" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="border border-border px-4 py-4">
          <p className="label">More likely to remain</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {survivalBias.moreLikely.map((x) => (
              <li key={x.id}>
                {x.label} / {x.labelJa}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Less likely to remain</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {survivalBias.lessLikely.map((x) => (
              <li key={x.id}>
                {x.label} / {x.labelJa}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm text-text-faint">
        一般的な観測モデルであり、林芙美子記念館の保存理由を資料なしに断定するものではない。
      </p>
    </aside>
  );
}

export function DomesticWorkMap() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Domestic work map</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {domesticWorkMap.map((item) => (
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
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {["Documented", "Implied", "Historical context", "Unknown"].map((m) => (
          <li key={m} className="border border-border px-2 py-1">
            {m}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function PreservationProcess() {
  return (
    <aside className="not-prose my-10">
      <ol className="space-y-2">
        {preservationProcess.map((step, i) => (
          <li key={step.id} className="border border-border px-4 py-3 text-sm">
            {i + 1}. {step.label} / {step.labelJa}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-text-faint">
        実際の保存経緯は公式資料で確認できた部分だけ Fact。
      </p>
    </aside>
  );
}

export function PreservationCostPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Preservation cost</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {preservationCosts.map((c) => (
          <li
            key={c.id}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] text-text-faint">
              {c.label} / {c.labelJa}
            </span>
            {c.visibility}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        具体金額は公開資料がある場合のみ。推測しない。
      </p>
    </aside>
  );
}

export function MuseumEditorialFunctions() {
  return (
    <aside className="not-prose my-10">
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {museumEditorialFunctions.map((f) => (
          <li
            key={f.id}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] text-text-faint">{f.label}</span>
            {f.labelJa}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function PreservationAuthenticityPanel() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">
        What exactly are we seeing?
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
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
    </aside>
  );
}

export function FourWriterHousingMatrix() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">
        Four writers, four housing conditions
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        四人の作家、四つの住居条件
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {fourWriterHousing.map((w) => (
          <article key={w.id} className="border border-border px-4 py-4 text-sm">
            <p className="label">{w.name}</p>
            <ul className="mt-3 space-y-1 text-text-soft">
              {w.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-8 overflow-x-auto">
        <p className="label">Housing status matrix</p>
        <table className="mt-4 w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[0.65rem] text-text-faint">
              <th className="py-2 pr-3 font-normal">Axis</th>
              <th className="py-2 pr-3 font-normal">Kafū</th>
              <th className="py-2 pr-3 font-normal">Nishimura</th>
              <th className="py-2 pr-3 font-normal">Bukowski</th>
              <th className="py-2 pr-3 font-normal">Hayashi</th>
            </tr>
          </thead>
          <tbody>
            {housingStatusMatrixRows.map((row) => (
              <tr key={row.id} className="border-b border-border">
                <td className="py-2 pr-3 text-text-soft">{row.label}</td>
                <td className="py-2 pr-3 text-text-faint">{row.cells.kafu}</td>
                <td className="py-2 pr-3 text-text-faint">
                  {row.cells.nishimura}
                </td>
                <td className="py-2 pr-3 text-text-faint">
                  {row.cells.bukowski}
                </td>
                <td className="py-2 pr-3 text-text-faint">
                  {row.cells.hayashi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
}

export function HousingArchiveAbsenceBlock() {
  return (
    <aside className="not-prose my-12">
      <ConceptQuote
        en={"An archive contains absences,\nnot only documents."}
        ja="アーカイブにあるのは、資料だけではない。欠落もまた残っている。"
      />
      <p className="label mt-8">Housing archive absences</p>
      <ul className="mt-4 space-y-3">
        {housingArchiveAbsences.map((item) => (
          <li
            key={item.id}
            className="border border-border px-4 py-4 text-sm text-text-soft"
          >
            <p className="label">{item.absenceType}</p>
            <p className="mt-2">{item.descriptionJa ?? item.description}</p>
            <p className="mt-2 text-xs text-text-faint">
              Evidence: {item.evidence}
            </p>
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              {item.verificationStatus}
            </p>
          </li>
        ))}
      </ul>
      <ul className="mt-6 space-y-2 text-sm text-text-faint">
        {houseHousingObservations.map((o) => (
          <li key={o.id} className="border border-border-soft px-3 py-2">
            {o.observationType}: {o.summaryJa ?? o.summary}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function IndexedHousingRecords() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Indexed housing records</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        索引化された住居記録
      </p>
      <p className="mt-2 text-xs text-text-faint">
        Filter focus: Writer · Period · Housing type · Current status · Address
        precision · Writing use · Verification
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <article className="border border-border px-4 py-4 text-sm">
          <p className="label">Fumiko Hayashi</p>
          <p className="mt-2 text-text-soft">Ochiai residence</p>
          <p className="mt-1 text-xs text-text-faint">Preserved / museum</p>
          <Link
            href="/entities/hayashi-fumiko-memorial-hall"
            className="focus-ring mt-3 inline-block text-accent underline-offset-4 hover:underline"
          >
            Open memorial entity
          </Link>
        </article>
        <article className="border border-border px-4 py-4 text-sm">
          <p className="label">Fumiko Hayashi</p>
          <p className="mt-2 text-text-soft">Early Tokyo rooms</p>
          <p className="mt-1 text-xs text-text-faint">
            Not indexed / research needed
          </p>
        </article>
      </div>
    </aside>
  );
}

export function HouseRelatedCta() {
  return (
    <aside className="not-prose my-12 grid gap-3">
      {[
        {
          href: "/writers/fumiko-hayashi",
          title: "Fumiko Hayashi",
          ja: "林芙美子",
        },
        { href: "/diaries/horoki", title: "Hōrōki", ja: "放浪記" },
        {
          href: "/entities/hayashi-fumiko-memorial-hall",
          title: "Hayashi Fumiko Memorial Hall",
          ja: "林芙美子記念館",
        },
        {
          href: "/observations/maintenance-is-not-background",
          title: "Maintenance Is Not the Background",
          ja: "生活維持は、文学の背景ではない",
        },
        {
          href: "/compare/four-urban-lives",
          title: "Four Urban Lives",
          ja: "四人の都市生活",
        },
        {
          href: "/compare/urban-diarists",
          title: "Three Urban Diarists",
          ja: "三人の都市記録者",
        },
        {
          href: "/observations/the-price-of-an-ordinary-day",
          title: "The Price of an Ordinary Day",
          ja: "一日の値段",
        },
        {
          href: "/observations/where-did-the-editor-go",
          title: "Where Did the Editor Go?",
          ja: "編集者は消えたのか",
        },
        {
          href: "/observations/three-cities-three-speeds",
          title: "Three Cities, Three Speeds",
          ja: "三つの都市、三つの生活速度",
        },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
        >
          <p className="editorial text-lg text-text">{item.title}</p>
          <p className="jp-serif text-sm text-accent">{item.ja}</p>
        </Link>
      ))}
    </aside>
  );
}
