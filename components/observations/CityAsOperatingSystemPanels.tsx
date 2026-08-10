import type { ReactNode } from "react";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { CtaLink } from "@/components/ui/CtaLink";
import {
  cityObsTheses,
  cityOsFlow,
  cityOsLayers,
  cityVisibilityRows,
  cityWorkingPrinciple,
  distanceDimensions,
  disruptionLayers,
  epistemicSplit,
  futureComparison,
  movementModes,
  publishingLocationRoles,
  venueLayers,
  writerUrbanCards,
} from "@/data/observations/city-as-operating-system";

function PanelShell({
  title,
  titleJa,
  children,
}: {
  title: string;
  titleJa?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-8 border border-border-soft px-4 py-5 md:px-5">
      <p className="label">{title}</p>
      {titleJa ? (
        <p className="jp-serif mt-1 text-sm text-text-soft">{titleJa}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function CityThesisBlock() {
  return (
    <PanelShell title="Central theses" titleJa="中心命題">
      <p className="editorial text-xl text-accent">{cityObsTheses.primary.en}</p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        {cityObsTheses.primary.ja}
      </p>
      <p className="editorial mt-6 text-lg text-text">
        {cityObsTheses.secondary.en}
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        {cityObsTheses.secondary.ja}
      </p>
      <p className="mt-4 text-xs text-text-faint">{cityObsTheses.caution}</p>
    </PanelShell>
  );
}

export function CityOperatingSystemModel() {
  return (
    <PanelShell
      title="CITY OS"
      titleJa="都市を接続可能性のNetworkとして見る"
    >
      <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {cityOsLayers.map((layer) => (
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
      <ol className="mt-6 space-y-2">
        {cityOsFlow.map((step, i) => (
          <li
            key={step}
            className="flex items-start gap-3 text-sm text-text-soft"
          >
            <span className="label shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              {step}
              {i < cityOsFlow.length - 1 ? (
                <span className="mt-1 block text-xs text-text-faint">↓</span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-text-faint">
        Interpretive model — not a map. Edges only when Movement / Entry
        evidence exists.
      </p>
    </PanelShell>
  );
}

export function HomeAsBaseStation() {
  return (
    <PanelShell title="Home as base station" titleJa="家から始まる都市">
      <p className="editorial text-lg text-accent">
        The home is not outside the city. It is the first node of the city
        network.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        住居は都市の外側ではない。都市ネットワークの最初のNodeである。
      </p>
      <p className="mt-4 text-sm text-text-soft">
        Home known? Workplace known? Movement recorded? Duration / cost / route
        known? — Unknownを明示。地図距離だけで「近い／遠い」を判定しない。
      </p>
      <p className="mt-2 text-xs text-text-faint">
        HousingRecords: Hayashi partial · others Not indexed. HomeBaseProfiles
        linked only when sourced.
      </p>
      <CtaLink
        href="/observations/the-house-that-remained"
        variant="text"
        arrow
        className="mt-4"
      >
        残った家、消えた部屋
      </CtaLink>
    </PanelShell>
  );
}

export function WorkplaceNetwork() {
  return (
    <PanelShell title="Workplace / Work footprint" titleJa="職場へ向かう都市">
      <p className="text-sm text-text-soft">
        仕事は職場で始まるとは限らない。移動・準備・待機・帰宅が Work Footprint
        を作る。commuteStatus: confirmed のみ Fact。probable は Badge にしない。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        WorkplaceRelations / WorkRecords (day-level): 0
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <CtaLink href="/observations/what-did-diarists-do-for-work" variant="text" arrow>
          What Did Diarists Do for Work?
        </CtaLink>
        <CtaLink href="/observations/who-owns-the-day" variant="text" arrow>
          Who Owns the Day?
        </CtaLink>
      </div>
    </PanelShell>
  );
}

export function MobilityCapabilityPanel() {
  return (
    <PanelShell title="Mobility capability" titleJa="移動できることが生活を作る">
      <p className="editorial text-lg text-accent">
        Mobility is capability.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        移動できることは、生活上の能力である。
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {movementModes.map((m) => (
          <li
            key={m}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {m}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        MobilityCapabilityRecords: 0 — 時代不適合Modeやルートを推測しない。
      </p>
    </PanelShell>
  );
}

export function DistanceDimensionsPanel() {
  return (
    <PanelShell title="Distance is not only geography" titleJa="距離の多次元">
      <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {distanceDimensions.map((d) => (
          <li
            key={d.en}
            className="border border-border-soft px-3 py-2 text-sm text-text-soft"
          >
            {d.en}
            <span className="mt-0.5 block text-xs text-text-faint">{d.ja}</span>
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

export function CommerceNodePanel() {
  return (
    <PanelShell title="Commerce nodes" titleJa="店は生活維持のインフラ">
      <p className="editorial text-lg text-accent">
        A shop is a maintenance node.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        店は、生活維持NetworkのNodeである。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        CommerceNodeRecords: 0 · RetailRecords: 0 — 具体EntityのみFact（例:
        都丸書店はEntity登録あり）。
      </p>
    </PanelShell>
  );
}

export function PublishingGeography() {
  return (
    <PanelShell title="Publishing geography" titleJa="出版には地理がある">
      <p className="editorial text-lg text-accent">
        Publishing has geography.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        出版には、地理がある。
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {publishingLocationRoles.map((r) => (
          <li
            key={r}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {r}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        PublishingLocationRecords / ManuscriptMovementRecords: 0.
        PublishingRecords may exist without geographic roles.
      </p>
      <CtaLink
        href="/writers/virginia-woolf"
        variant="text"
        arrow
        className="mt-4"
      >
        Virginia Woolf
      </CtaLink>
    </PanelShell>
  );
}

export function VenueFunctionLayers() {
  return (
    <PanelShell title="Venue function layers" titleJa="劇場は上演だけではない">
      <p className="editorial text-lg text-accent">
        A venue is a workplace, waiting room, social node, and public interface
        at once.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {venueLayers.map((l) => (
          <li
            key={l}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {l}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-3">
        <CtaLink href="/writers/furukawa-roppa" variant="text" arrow>
          Roppa Furukawa
        </CtaLink>
        <CtaLink
          href="/observations/backstage-is-not-recorded"
          variant="text"
          arrow
        >
          Backstage
        </CtaLink>
      </div>
    </PanelShell>
  );
}

export function AdministrativeGeography() {
  return (
    <PanelShell
      title="Administrative geography"
      titleJa="行政は建物と移動で現れる"
    >
      <p className="editorial text-lg text-accent">
        Institutions become places before they become history.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        制度は、歴史になる前に誰かが行く場所として存在する。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        AdministrationLocationRecords: 0 — 記憶から港・官庁名を追加しない。
      </p>
      <CtaLink
        href="/writers/samuel-pepys"
        variant="text"
        arrow
        className="mt-4"
      >
        Samuel Pepys
      </CtaLink>
    </PanelShell>
  );
}

export function HealthcareAccessPanel() {
  return (
    <PanelShell title="Healthcare access" titleJa="病院と身体の都市">
      <p className="editorial text-lg text-accent">
        Health is also an access problem.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        身体の問題は、医療へのアクセスの問題にもなる。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        HealthcareAccessRecords: 0 — 医療診断を推測しない。
      </p>
    </PanelShell>
  );
}

export function FoodSupplyPath() {
  return (
    <PanelShell title="Food supply path" titleJa="食事は都市のネットワーク">
      <ol className="space-y-2 text-sm text-text-soft">
        {[
          "Market / Shop",
          "Purchase",
          "Transport",
          "Kitchen / Restaurant",
          "Meal",
          "Body",
        ].map((step, i) => (
          <li key={step} className="flex gap-3">
            <span className="label shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              {step}
              {i < 5 ? (
                <span className="mt-1 block text-xs text-text-faint">↓</span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-text-faint">
        Conceptual path — concrete Entry evidence only.
      </p>
    </PanelShell>
  );
}

export function AccessCostPanel() {
  return (
    <PanelShell title="Access cost" titleJa="金額は都市の距離を変える">
      <p className="text-sm text-text-soft">
        交通費・家賃・入場料・食費・宿泊・医療費はアクセス可能性を変える。money =
        access を単純因果化しない。
      </p>
      <p className="mt-4 border-l border-accent pl-4 text-sm text-text-soft">
        No recorded payment does not mean no cost.
        <span className="mt-1 block text-xs text-text-faint">
          支払い記録がないことは、コストがなかったことを意味しない（Time /
          Body / Social / Waiting）。
        </span>
      </p>
      <p className="mt-3 text-xs text-text-faint">
        AccessCostRecords: 0 — 金額は Source 必須。
      </p>
    </PanelShell>
  );
}

export function EncounterNetwork() {
  return (
    <PanelShell title="Encounter network" titleJa="誰に会えるかも都市が決める">
      <p className="editorial text-lg text-accent">
        Social proximity is partly geographic, partly institutional.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        人間関係の近さは、地理だけではなく所属制度によっても作られる。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        EncounterRecords: 0 — LiteraryNetwork / Meeting を推測で埋めない。
      </p>
    </PanelShell>
  );
}

export function WaitingNodePanel() {
  return (
    <PanelShell title="Waiting nodes" titleJa="都市は待機を作る">
      <p className="editorial text-lg text-accent">
        Infrastructure saves time and also creates waiting.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        インフラは時間を短縮する。同時に、待ち時間を作ることもある。
      </p>
      <p className="mt-3 text-xs text-text-faint">WaitingNodeProfiles: 0</p>
    </PanelShell>
  );
}

export function UrbanInterruptionPanel() {
  return (
    <PanelShell
      title="Access and interruption"
      titleJa="騒音と中断も都市が作る"
    >
      <p className="editorial text-lg text-accent">
        Access and interruption can come from the same density.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        都市の密度は、機会と中断の両方を生むことがある。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        Noise source only when Entry evidences it. UrbanInterruptionRelations:
        0
      </p>
    </PanelShell>
  );
}

export function UrbanSystemDisruption() {
  return (
    <PanelShell
      title="When the urban OS breaks"
      titleJa="戦争・災害・疫病と都市OS"
    >
      <ul className="flex flex-wrap gap-2">
        {disruptionLayers.map((l) => (
          <li
            key={l}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {l}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text-soft">
        Urban historical event → Infrastructure disruption → Confirmed personal
        impact → Diary Fact → Observation. 歴史EventをWriterへ自動接続しない。
      </p>
      <p className="mt-2 text-xs text-text-faint">
        UrbanSystemDisruptionRecords: 0
      </p>
    </PanelShell>
  );
}

export function UrbanLifePhasePanel() {
  return (
    <PanelShell title="Urban life phases" titleJa="都市が変わると一日も変わる">
      <p className="text-sm text-text-soft">
        Writer = City と固定しない。multiple homes / neighborhoods / cities /
        temporary residence がありうる。Primary city
        は代表値にすぎない。時代差を無視して同じ都市名で比較しない。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        Same city name, different urban system. UrbanLifePhases: 0
      </p>
    </PanelShell>
  );
}

export function CityWorkingPrinciplePanel() {
  return (
    <PanelShell
      title="How Diary Observatory records the city"
      titleJa="場所をどう記録するか"
    >
      <p className="jp-serif text-sm text-text-soft">{cityWorkingPrinciple.ja}</p>
      <ul className="mt-4 space-y-1 text-sm text-text-soft">
        {cityWorkingPrinciple.enQuestions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-text-faint">
        Place is not enough: Function · Access · Movement · Cost · Time · People
        · Activity · Source. Current venue pages are not Sources for
        historical state.
      </p>
    </PanelShell>
  );
}

export function NineWriterUrbanGrid() {
  return (
    <PanelShell
      title="Nine writer urban cards"
      titleJa="九つの生活と都市の問い"
    >
      <p className="mb-4 text-xs text-text-faint">
        No best-city / walkability / literary ranking. Questions are Observation
        prompts — not Facts.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {writerUrbanCards.map((card) => (
          <article
            key={card.writerId}
            className="flex h-full flex-col border border-border-soft p-4"
          >
            <p className="label">{card.primaryConditionShort}</p>
            <h3 className="editorial mt-2 text-xl text-text">{card.name}</h3>
            <p className="jp-serif text-sm text-accent">{card.nameJa}</p>
            <p className="mt-1 text-xs text-text-faint">
              Primary city label: {card.primaryCity}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-text-soft">
              {card.urbanQuestion}
            </p>
            <dl className="mt-4 space-y-1.5 text-[0.7rem] text-text-faint">
              <div className="flex justify-between gap-2">
                <dt>Entities</dt>
                <dd>{card.entityCount}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Housing</dt>
                <dd>
                  {card.housingRecordCount === 0
                    ? "No indexed records"
                    : card.housingRecordCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Mobility capability</dt>
                <dd>
                  {card.movementCapabilityCount === 0
                    ? "No indexed records"
                    : card.movementCapabilityCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Publishing / Work</dt>
                <dd>
                  {card.publishingRecordCount} / {card.workRecordCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Maintenance / Money</dt>
                <dd>
                  {card.maintenanceEventCount} / {card.moneyRecordCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Admin / Commerce</dt>
                <dd>
                  {card.administrationRecordCount} /{" "}
                  {card.commerceNodeCount + card.retailRecordCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Coverage</dt>
                <dd className="max-w-[55%] text-right">{card.dataStatus}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Main unknown</dt>
                <dd className="max-w-[55%] text-right">{card.mainUnknown}</dd>
              </div>
            </dl>
            <CtaLink
              href={`/writers/${card.slug}`}
              variant="text"
              arrow
              className="mt-4 self-start"
            >
              Open writer
            </CtaLink>
          </article>
        ))}
      </div>
    </PanelShell>
  );
}

export function CityVisibilityMatrix() {
  return (
    <PanelShell title="City visibility matrix" titleJa="都市層の可視性">
      <dl className="grid gap-2 sm:grid-cols-2">
        {cityVisibilityRows.map((row) => {
          const status =
            row === "Housing" ||
            row === "Publisher" ||
            row === "Shop" ||
            row === "Money"
              ? "Partial"
              : "Not indexed";
          return (
            <div
              key={row}
              className="flex items-baseline justify-between gap-3 border border-border-soft px-3 py-2"
            >
              <dt className="text-sm text-text-soft">{row}</dt>
              <dd className="shrink-0 text-xs text-text-faint">{status}</dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-3 text-xs text-text-faint">
        Partial = some writers have related Entities / Money / Publishing /
        Housing traces — not a complete urban OS for any writer.
      </p>
    </PanelShell>
  );
}

export function UrbanDayGraphNote() {
  return (
    <PanelShell title="UrbanDayGraph" titleJa="機能ネットワーク（地図ではない）">
      <p className="text-sm text-text-soft">
        将来共通Component。Node: Home / Work / Shop / Publisher / Theater /
        Office / Hospital / Person / Transit. Edge: Walked / Traveled / Worked /
        Purchased / Visited / Waited / …
      </p>
      <p className="mt-3 text-xs text-text-faint">
        Graph is not a map. 緯度経度未確認なら地図へ配置しない。現在 edges: 0
      </p>
    </PanelShell>
  );
}

export function CityEpistemicPanel() {
  return (
    <PanelShell
      title="Fact / Observation / Interpretation"
      titleJa="この記事自身の層"
    >
      <div className="space-y-4">
        <div className="border border-border-soft px-4 py-3">
          <EpistemicLabel kind="fact" />
          <p className="mt-2 text-sm text-text-soft">{epistemicSplit.fact}</p>
          <p className="jp-serif mt-1 text-xs text-text-faint">
            {epistemicSplit.factJa}
          </p>
        </div>
        <div className="border border-border-soft px-4 py-3">
          <EpistemicLabel kind="observation" />
          <p className="mt-2 text-sm text-text-soft">
            {epistemicSplit.observation}
          </p>
          <p className="jp-serif mt-1 text-xs text-text-faint">
            {epistemicSplit.observationJa}
          </p>
        </div>
        <div className="border border-border-soft px-4 py-3">
          <EpistemicLabel kind="interpretation" />
          <p className="mt-2 text-sm text-text-soft">
            {epistemicSplit.interpretation}
          </p>
          <p className="jp-serif mt-1 text-xs text-text-faint">
            {epistemicSplit.interpretationJa}
          </p>
        </div>
      </div>
    </PanelShell>
  );
}

export function CityRelatedCta() {
  return (
    <div className="my-10 space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            href: "/observations/who-owns-the-day",
            title: "一日は、誰のものなのか",
            note: "Urban infrastructure controls part of the day through distance, schedules, and access.",
          },
          {
            href: "/observations/what-did-diarists-do-for-work",
            title: "日記を書く人は、何を仕事としていたのか",
            note: "Work gives the city a daily route.",
          },
          {
            href: "/observations/maintenance-is-not-background",
            title: "生活維持は、文学の背景ではない",
            note: "Shops, housing, food, heating, and care turn maintenance into geography.",
          },
          {
            href: "/observations/backstage-is-not-recorded",
            title: "楽屋は、歴史に映らない",
            note: "A performance creates a hidden network around the venue.",
          },
          {
            href: "/observations/the-house-that-remained",
            title: "残った家、消えた部屋",
            note: "A place may survive while its function changes.",
          },
        ].map((item) => (
          <article key={item.href} className="paper-panel flex flex-col p-5">
            <p className="label">Related observation</p>
            <h3 className="jp-serif mt-3 text-lg text-text">{item.title}</h3>
            <p className="mt-2 text-sm text-text-faint">{item.note}</p>
            <CtaLink href={item.href} variant="secondary" arrow className="mt-5">
              Read observation
            </CtaLink>
          </article>
        ))}
      </div>
      <div className="border border-dashed border-border px-5 py-5">
        <p className="label">{futureComparison.status}</p>
        <h3 className="editorial mt-3 text-xl text-text">
          {futureComparison.titleEn}
        </h3>
        <p className="jp-serif mt-1 text-base text-accent">
          {futureComparison.title}
        </p>
        <p className="mt-2 text-sm text-text-soft">
          Primary: {futureComparison.primary}
        </p>
        <p className="mt-2 text-xs text-text-faint">
          Route candidate: {futureComparison.href} — not created yet.
        </p>
      </div>
    </div>
  );
}
